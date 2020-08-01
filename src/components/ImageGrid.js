import React, { Fragment } from 'react';
import useFirestore from '../hooks/useFirestore';
import DeleteModal from './DeleteModal';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg, setDeleteImg }) => {
  const { docs } = useFirestore('images');

  return (
    <div className='img-grid'>
      {docs &&
        docs.map((doc) => (
          <Fragment>
            <motion.div
              layout
              whileHover={{ opacity: 1 }}
              className='img-wrap'
              key={doc.id}
            >
              <motion.img
                src={doc.url}
                alt='Pic'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                onClick={() => setSelectedImg(doc.url)}
              />
              <motion.div key={doc.id}>
                <motion.button
                  className='delete'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  onClick={() => (
                    <DeleteModal setDeleteImg={setDeleteImg(doc.id)} />
                  )}
                >
                  <span>x</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </Fragment>
        ))}
    </div>
  );
};

export default ImageGrid;
