import { VercelRequest, VercelResponse } from '@vercel/node';

interface Calendar {
    date: string,
    assignments: string[] | null,
    readings: string[] | null,
    exams: string[] | null,
}

export async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // TODO:
        // Organize/parse PDF file if neccessary
        // Use OpenAI API with proper prompt, ensuring AI returns JSON as Calendar interface
        // Return with 200 status with JSON calendar
        // Later/Optional: Send API to Google Calendar to sync (Could be done through another endpoint)

        res.status(200).json({})
    } catch (error) {
        res.status(400).json({ error: error })
    }
}