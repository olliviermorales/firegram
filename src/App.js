import React, { useState } from 'react';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import DeleteModal from './components/DeleteModal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [deleteImg, setDeleteImg] = useState(null);
  return (
    <div className='App'>
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} setDeleteImg={setDeleteImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      {deleteImg && (
        <DeleteModal deleteImg={deleteImg} setDeleteImg={setDeleteImg} />
      )}
    </div>
  );
}

export default App;
