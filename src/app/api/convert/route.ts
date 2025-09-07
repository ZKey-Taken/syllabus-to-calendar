interface Calendar {
    date: string,
    assignments: string[] | null,
    readings: string[] | null,
    exams: string[] | null,
}

// Converts request (with PDF) to calendar
function convert(req: Request): Calendar[] {
    const parsedPDFText = '';
    // TODO: Parse/Get PDF file from req

    return getCalendarJsonUsingAI(parsedPDFText)
}

// Uses OpenAI with a prompt to get an array of Calendars
function getCalendarJsonUsingAI(content: string): Calendar[] {
    const prompt = '';
    return []
}

export async function POST(req: Request) {
    try {
        // Payload size limit set to 6MB due to Vercel free plan limit
        console.log("Req:", req)

        return Response.json({ status: 200, data: null })
    } catch (error) {
        return Response.json({ status: 400, error: error })
    }
}