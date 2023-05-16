import { ChangeEvent, useState } from 'react';
import axios from 'axios';

function UploadFile() {
  const [file, setFile] = useState();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    if (!file) {
      return;
    }	 
	console.log(file)
    // fetch('http://localhost:5000/api/uploadfile', {
    //   method: 'POST',
    //   headers: {
    //     'content-type': file.type,
    //     'content-length': `${file.size}`, 
	// 	'content-name': file.name,
    //   },
	//   body: file,
    // })
    //   .then((res) => res.json())
    //   .catch((err) => console.error(err));

	const formData = new FormData();
	formData.append('file', file);

	axios.post('http://localhost:5000/api/uploadfile', formData, {
	headers: {
		'Content-Type': 'multipart/form-data'
	}
	}).then((response) => {
	// Handle response from server
	}).catch((error) => {
	// Handle error
	});

  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />

      <div>{file && `${file.name} - ${file.type}`}</div>

      <button onClick={handleUploadClick}>Upload</button>
    </div>
  );
}

export default UploadFile;