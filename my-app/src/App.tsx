import { useState, type ChangeEvent } from 'react'
import './App.css'

function App() {
  const API_URL = 'api/convert'; // TODO: Create backend endpoint, if using Vercel create serverless /api endpoint
  const [file, setFile] = useState<File | null>(null);
  const [isConverting, setIsConverting] = useState<boolean>(false)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e?.target?.files?.[0] || null;
    setFile(uploadedFile);
  }

  const handleUploadClick = async () => {
    if (!file) { // Ensures file exists, fallback
      alert("Please upload a file!");
      return;
    }

    setIsConverting(true);
    const formData = new FormData()
    formData.append('file', file);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        const result = await res.json();

        console.log("Result:", result);
        alert("Success!");
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      alert("Error: " + error);
    }

    setIsConverting(false)
  }

  // Only allowing pdf uploads
  return (
    <div>
      <h1>Syllabus to Calendar</h1>
      <div id='inputDiv'>
        <input type='file' accept='.pdf' onChange={handleFileChange} />
        <button onClick={handleUploadClick} disabled={!file}>Submit</button>
      </div>
      <h3>{isConverting && "Please wait, converting PDF to calendar ..."}</h3>
    </div>
  )
}

export default App
