import axios from 'axios';
import style from "./UploadFile.scss";
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';
import React, { ChangeEvent, useState, useEffect } from 'react';

function UploadFile() {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUploadClick = async () => {
    if (!file) {
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/api/uploadfile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Handle response from server
      setResponseData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      // Stop loading
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="center">
        <label htmlFor="file-input" className="buttonFile">
          Choose a file
        </label>
        <input
          id="file-input"
          type="file"
          onChange={handleFileChange}
          className="file-input"
        />
        <div>{file && `${file.name} - ${file.type}`}</div>
        <button onClick={handleUploadClick} className="buttonFile">Upload</button>

        {isLoading && (
          <div className="loading-spinner">
            <ClipLoader size={35} color="#000000" loading={isLoading} />
            <p>Analizing...</p>
          </div>
        )}

        {responseData && <p id="response">The classification is</p>}
        {responseData && <p id="response">{responseData}</p>}
      </div>
    </div>
  );
}

export default UploadFile;
