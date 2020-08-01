import React from 'react';
import { projectFirestore } from '../firebase/config';

import { motion } from 'framer-motion';

const DeleteModal = ({ deleteImg, setDeleteImg }) => {
  const onDelete = () => {
    projectFirestore.collection('images').doc(deleteImg).delete();
    setDeleteImg(null);
  };

  const onCancel = () => {
    setDeleteImg(null);
  };

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop-delete')) {
      setDeleteImg(null);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='backdrop-delete'
      onClick={handleClick}
    >
      <div initial={{ y: '-100vh' }} animate={{ y: 0 }} className='modal'>
        <p className='message'>Are you sure you want to delete this picture?</p>
        <div className='options'>
          <button className='btn' onClick={onDelete}>
            Yes
          </button>
          <button className='btn' onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default DeleteModal;
