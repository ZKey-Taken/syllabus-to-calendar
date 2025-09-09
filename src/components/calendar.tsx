import { CalendarArr, CalendarEventArr } from "@/types/calendarTypes";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import multiMonthPlugin from '@fullcalendar/multimonth';

export default function Calendar({ calendar }: CalendarProp) {
    const transformDataToEvents = (data: CalendarArr): CalendarEventArr => {
        const events: CalendarEventArr = [];

        data.forEach(item => {
            const startDate = item.date;
            const isAllDay = true;

            if (item.assignments) {
                item.assignments.forEach(assignmentName => {
                    events.push({ title: assignmentName, start: startDate, allDay: isAllDay });
                });
            }
            if (item.exams) {
                item.exams.forEach(examName => {
                    events.push({ title: examName, start: startDate, allDay: isAllDay });
                });
            }
            if (item.readings) {
                item.readings.forEach(readingName => {
                    events.push({ title: readingName, start: startDate, allDay: isAllDay });
                });
            }
        });

        return events;
    }

    return (
        <div className="bg-black">
            <FullCalendar
                plugins={[dayGridPlugin, multiMonthPlugin]}
                initialView="dayGridMonth"
                events={transformDataToEvents(calendar)}
                aspectRatio={2}
                headerToolbar={{
                    left: 'prev,today,next',
                    center: 'title',
                    right: 'dayGridMonth,multiMonthYear'
                }}
            />
        </div>
    )
}

interface CalendarProp {
    calendar: CalendarArr;
}