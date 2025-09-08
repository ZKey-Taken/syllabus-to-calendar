import { Calendar } from "@/types/calendarTypes";
import { toFileType } from "@/Utils/establishType";

// Use OpenAI API to create calendar array
async function PDFToCalendar(pdfFile: File): Promise<Calendar[]> {
    // Use OpenAI to
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



        return Response.json({ status: 200, data: null })
    } catch (error) {
        return Response.json({ status: 500, error: error })
    }
}