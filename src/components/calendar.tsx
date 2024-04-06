import {agreements} from '@/lib/effects/agreements';
import {convertAgreementToCalendarEvent} from '@/lib/utils';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, {DropArg} from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import {useUnit} from 'effector-react';
import React from 'react';

type CalendarProps = FullCalendar['props'];

export default function Calendar(props: CalendarProps) {
  const agreementsList = useUnit(agreements);

  const calendarEvents = agreementsList.map(convertAgreementToCalendarEvent);

  return (
    <FullCalendar
      height="calc(100dvh - 148px)"
      plugins={[
        interactionPlugin,
        dayGridPlugin,
      ]}
      events={calendarEvents}
      headerToolbar={{
        left: '',
        center: 'title',
      }}
      drop={(event: DropArg) => {
        console.log(event);
      }}
      editable
      droppable
      {...props}
    />
  );
}
