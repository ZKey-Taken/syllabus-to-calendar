import { Calendar } from "@/types/calendarTypes";
import { toFileType } from "@/Utils/establishType";
import OpenAI from "openai";

const openAI_Client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const prompt: string = `Extract calendar data as JSON array matching this TypeScript interface:
          
          interface Calendar {
            date: string,           // YYYY-MM-DD format
            assignments: string[] | null,
            readings: string[] | null,
            exams: string[] | null,
          }
          
          Return: Calendar[]
          
          Use null for empty categories, not empty arrays.`;

// Use OpenAI Response API to create calendar array
async function PDFToCalendar(pdfFile: File): Promise<Calendar[]> {
    // Doc: https://platform.openai.com/docs/quickstart?input-type=file-upload#analyze-images-and-files

    const attachedFile = await openAI_Client.files.create({
        file: pdfFile,
        purpose: 'user_data',
    });

    const aiResponse = await openAI_Client.responses.create({
        model: 'chatgpt-4o-latest',
        input: [{
            role: 'user',
            content: [
                {
                    type: 'input_file',
                    file_id: attachedFile.id,
                },
                {
                    type: "input_text",
                    text: prompt,
                },
            ],
        }]
    })

    console.log("aiResponse: ", aiResponse); // For debug purposes only

    // Todo: Parse JSON object from AI response into Calendar[] and return it

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
            return Response.json({ status: 500, error: "File not uploaded" });
        } else if (file.size > 2 * 1024 * 1024) {
            return Response.json({ status: 500, error: "File size exceeds 2MB" });
        }

        // const calendar = await PDFToCalendar(file);

        return Response.json({ status: 200, data: null });
    } catch (error) {
        return Response.json({ status: 500, error: error });
    }
}