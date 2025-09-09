import { CalendarArr } from "@/types/calendarTypes";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default function Calendar({ calendar }: CalendarProp) {
    return (
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
        />
    )
}

interface CalendarProp {
    calendar: CalendarArr;
}