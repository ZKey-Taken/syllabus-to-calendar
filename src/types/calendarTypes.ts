export interface Calendar {
    date: string,
    assignments: string[] | null,
    readings: string[] | null,
    exams: string[] | null,
}

export interface CalendarResponse {
    status: number,
    data: Calendar[],
    error: string | null
}