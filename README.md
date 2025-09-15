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

## Getting Started

1. Git clone the repository
2. `cd` into the `syllabus-to-calendar` folder
3. `touch .env` to create env file
4. Open env file and add your OpenAI API key: `OPENAI_API_KEY=your_key`
5. In terminal, type `npm run dev` to start website locally
6. Open the site and upload syllabus PDF to convert
