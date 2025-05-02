import React, { useState } from 'react';

function PhotoUpload() {
  const [image, setImage] = useState(null);

  const handleFileInput = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('my-image-file', image);

    fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Image uploaded successfully:', data);
      })
      .catch(error => {
        console.error('Error uploading image:', error);
      });
  };

  return (
    <div>
      <h1>Image Upload with Fetch</h1>
      <input type="file" onChange={handleFileInput} />
      <button onClick={handleUpload}>Upload!</button>
    </div>
  );
}

export default PhotoUpload;