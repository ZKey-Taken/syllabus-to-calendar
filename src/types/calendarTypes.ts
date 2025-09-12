export type CalendarObj = CalendarEvent[];

export interface CalendarEvent {
    start: Date,
    end?: Date,
    event: string, // Exam/Assignment/Reading/Etc
}

export interface CalendarResponse {
    success: boolean,
    data: CalendarEvent[],
    error: string | null
}

export type FullCalendarObj = FullCalendarEvent[];

export interface FullCalendarEvent {
    title: string,
    start: Date,
    end?: Date,
    allDay?: boolean,
    // More attributes can be added, doc: https://fullcalendar.io/docs#toc
}