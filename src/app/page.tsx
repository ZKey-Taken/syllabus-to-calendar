"use client";
import Calendar from "@/components/calendar";
import { CalendarArr } from "@/types/calendarTypes";
import { convertResToCalendarRes } from "@/Utils/establishType";
import { useState, ChangeEvent, useRef } from "react";

export default function Home() {
  const API_URL = 'api/convert';
  const maxFileSize = 2 * 1024 * 1024; // 2MB

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isConverting, setIsConverting] = useState<boolean>(false)
  const [calendar, setCalendar] = useState<CalendarArr | null>(null);

  const showFileUploadUI = () => {
    if (!fileInputRef?.current) return;
    fileInputRef.current.click();
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e?.target?.files?.[0] || null;

    // File constraints, 2MB max upload size
    if (!uploadedFile) return;
    else if (uploadedFile.size > maxFileSize) {
      alert("File size cannot exceed 2MB");
      return;
    }

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

    // Trycatch parses response data
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        body: formData,
      });

      const result = await convertResToCalendarRes(res);
      if (result.success) {
        setCalendar(result.data);
      } else {
        alert("Error:" + result.error);
      }
    } catch (error) {
      alert("Error: " + error);
    } finally {
      setIsConverting(false)
    }
  }

  // Simple frontend file upload, only pdf files are allowed
  return (
    <div className="flex flex-col text-center">
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
      {!isConverting && calendar &&
        <Calendar calendar={calendar} />
      }
    </div >
  )
}
