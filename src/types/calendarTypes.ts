export interface CalendarObj {
    date: string,
    assignments: string[] | null,
    readings: string[] | null,
    exams: string[] | null,
}

export interface CalendarResponse {
    success: boolean,
    data: CalendarObj[],
    error: string | null
}