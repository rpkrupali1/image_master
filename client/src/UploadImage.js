// UploadImage.js

import React, { useState } from 'react';
import './styles.css'; // Import the CSS file

const UploadImage = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);
      onUpload(formData);
    }
  };

  return (
    <div className="upload-image-container"> {/* Apply the CSS class */}
      <h2>Upload Image</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadImage;
