"use client";
import { useState, ChangeEvent, useRef } from "react";

export default function Home() {
  const API_URL = 'api/convert';

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isConverting, setIsConverting] = useState<boolean>(false)

  const showFileUploadUI = () => {
    if (!fileInputRef?.current) return;
    fileInputRef.current.click();
  }

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

      const result = await res.json();
      console.log(result)
      if (result?.status) {
        console.log("Ok")
      } else {
        console.log("Not ok")
      }
    } catch (error) {
      alert("Error: " + error);
    }

    setIsConverting(false)
  }

  // Only allowing pdf uploads
  return (
    <div className="flex flex-col h-screen text-center">
      <h1 className="text-3xl font-bold text-amber-200 justify-center py-10 px-2">
        Syllabus to Calendar
      </h1>

      <div className="flex justify-center p-1">
        {file && <p className="flex items-center pr-2">{file.name}</p>}
        <button className="border rounded-2xl px-2 py-1 bg-emerald-600" onClick={showFileUploadUI}>
          {file ? "Change File" : "Upload File"}
        </button>
      </div>

      <div className="flex justify-center p-1">
        <button className="border rounded-2xl px-2 py-1 bg-emerald-600" onClick={handleUploadClick} hidden={!file}>
          Convert To Calendar
        </button>
      </div>

      <input ref={fileInputRef} type="file" accept="application/pdf" hidden onChange={handleFileChange} />

      {isConverting &&
        <h3 className="text-2xl font-bold pt-12">
          Please wait, converting PDF to calendar ...
        </h3>
      }
    </div >
  )
}
