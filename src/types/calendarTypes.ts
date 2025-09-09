export type CalendarArr = CalendarObj[];

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

export type CalendarEventArr = CalendarEvent[];

export interface CalendarEvent {
    title: string,
    start: string,
    allDay: boolean,
    // More attributes can be added, doc: https://fullcalendar.io/docs#toc
}