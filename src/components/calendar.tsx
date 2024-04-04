import React from 'react';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';

type CalendarProps = FullCalendar['props'];

export default function Calendar(props: CalendarProps) {
  return (
    <FullCalendar
      height="calc(100dvh - 148px)"
      plugins={[
        interactionPlugin,
        dayGridPlugin
      ]}
      events={[
        {title: 'Meeting', start: new Date()},
      ]}
      headerToolbar={{
        left: '',
        center: 'title',
      }}
      editable
      droppable
      {...props}
    />
  );
}



