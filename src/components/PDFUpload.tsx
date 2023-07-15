import React, { useState } from 'react';
import axios from 'axios';

function FileUpload() {
  const [file, setFile] = useState();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Check if a file is selected
    if (!file) {
      setErrorMessage('Please select a file before submitting.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    
    try {
      const res = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res.data);
      setErrorMessage(''); // Clear any previous error messages
    } catch (err) {
      console.error(err);
      setErrorMessage('An error occurred while uploading the file.');
    }
  };

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
}

export default FileUpload;
