import { Calendar } from "@/types/calendarTypes";
import { toFileType } from "@/Utils/establishType";
import OpenAI from "openai";

const openAI_Client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Use OpenAI API to create calendar array
async function PDFToCalendar(pdfFile: File): Promise<Calendar[]> {
    return [];
}

export async function POST(req: Request) {
    try {
        // Parse FormData from request
        const formData = await req.formData();
        const fileFormData = formData.get("file");
        const file = toFileType(fileFormData);

        // Validate file (size <= 2MB)
        if (!file) {
            return Response.json({ status: 500, error: "File not uploaded" })
        } else if (file.size > 2 * 1024 * 1024) {
            return Response.json({ status: 500, error: "File size exceeds 2MB" })
        }

        const calendar = await PDFToCalendar(file);

        return Response.json({ status: 200, data: calendar })
    } catch (error) {
        return Response.json({ status: 500, error: error })
    }
}