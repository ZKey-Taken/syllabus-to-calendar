import { CalendarResponse } from "@/types/calendarTypes";

export async function convertTypeToCalendarRes(response: Response): Promise<CalendarResponse> {
    const result = await response.json();

    if ("status" in result && "data" in result) {
        return { status: result.status, data: result.data, error: null }
    } else if ("error" in result) {
        return { status: 500, data: [], error: result.error }
    }

    return { status: 400, data: [], error: null }
}