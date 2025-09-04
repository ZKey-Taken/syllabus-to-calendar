import { VercelRequest, VercelResponse } from '@vercel/node';

interface Calendar {
    date: string,
    assignments: string[] | null,
    readings: string[] | null,
    exams: string[] | null,
}

// Converts request (with PDF) to calendar
function convert(req: VercelRequest): Calendar[] {
    const parsedPDFText = '';
    // TODO: Parse/Get PDF file from req

    return getCalendarJsonUsingAI(parsedPDFText)
}

// Uses OpenAI with a prompt to get an array of Calendars
function getCalendarJsonUsingAI(content: string): Calendar[] {
    const prompt = '';
}

export async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // Payload size limit set to 6MB due to Vercel free plan limit

        const data = convert(req)
        res.status(200).json({ calendar: data })
    } catch (error) {
        res.status(400).json({ error: error })
    }
}