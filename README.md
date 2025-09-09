# Syllabus to Calendar

A web app that transforms syllabus PDFs into a calendar view and syncs them with Google Calendar. Built with React, Vite, Node.js, TypeScript, and OpenAI API.

## Features

- Upload syllabus PDF and extract important dates (assignments, readings, exams, etc).
- View events in a calendar.
- Sync events with Google Calendar.
- AI-powered parsing of syllabus content.

## Tech Stack

- Frontend: React + TypeScript
- Backend: Node.js + TypeScript
- Framework: Nextjs
- AI: OpenAI API
- Calendar Integration: Google Calendar API (Optional)

### Prerequisites

- Node.js >= 18
- OpenAI API Key
- Google Cloud Project with Calendar API enabled (Optional)

## Get Started

### Method 1 (Use Website):

    - Open website
    - Upload a syllabus PDF
    - Watch it do magic

### Method 2 (Copy Code):

    - Goto /src/app/api/convert/route.ts
    - The main convert function is PDFToCalendar(pdfFile: File): Promise<Calendar[]>
    - Copy it and use it
