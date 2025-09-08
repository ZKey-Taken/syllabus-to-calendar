import { CalendarResponse } from "@/types/calendarTypes";

export async function convertResToCalendarRes(response: Response): Promise<CalendarResponse> {
    const result = await response.json();
    const succeed = true;

    if ("status" in result && "data" in result) {
        if (result.status >= 200 && result.status < 300) {
            return { success: succeed, data: result.data, error: null }
        }
    } else if ("error" in result) {
        return { success: !succeed, data: [], error: result.error }
    }

    return { success: !succeed, data: [], error: null }
}


export function toFileType(formDataFile: FormDataEntryValue | null): File | null {
    if (formDataFile instanceof File) {
        return formDataFile;
    }

    return null;
}