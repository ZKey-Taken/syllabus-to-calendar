import { CalendarObj, FullCalendarObj } from "@/types/calendarTypes";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import multiMonthPlugin from '@fullcalendar/multimonth';

export default function Calendar({ calendar }: CalendarProp) {
    const transformDataToEvents = (data: CalendarObj): FullCalendarObj => {
        const events: FullCalendarObj = [];

        data.forEach(item => {
            const startDate = item.start;
            const endDate = item.end;
            const isAllDay = endDate === undefined ? true : false;

            events.push({ title: item.event, start: startDate, end: endDate, allDay: isAllDay });
        });

        return events;
    }

    return (
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
            moreLinkClassNames={['my-more-link']}
            moreLinkContent={() => {
                // Change "+n more" to "Expand"
                return `Expand`;
            }}
            eventDidMount={(info) => {
                // Custom Tooltip for event title, triggers when hovering
                const tooltip = document.createElement('span');
                tooltip.className = 'fc-tooltip';
                tooltip.innerText = info.event.title;
                info.el.appendChild(tooltip);
            }}
        />
    )
}

interface CalendarProp {
    calendar: CalendarObj;
}