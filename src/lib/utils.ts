import {Agreement} from '@/lib/definitions';
import {EventClickArg} from '@fullcalendar/core';

export const formatDate = (date: Date) => {
  const year = date.getFullYear().toString();
  let month = (date.getMonth() + 1).toString();
  let day = date.getDate().toString();

  month = month.length < 2 ?
    `0${month}` :
    month;
  day = day.length < 2 ?
    `0${day}` :
    day;

  return `${year}-${month}-${day}`;
};

export const convertAgreementToCalendarEvent = (agreement: Agreement) => (
  {
    id: agreement.id,
    title: agreement.title,
    start: agreement.startDate,
    end: agreement.endDate,
    appliances: agreement.appliances,
    textColor: 'gray',
    backgroundColor: 'lightgray',
    borderColor: 'transparent',
  }
);

export const convertCalendarEventToAgreement =
    (calendarEvent: EventClickArg['event']): Agreement => (
      {
        id: calendarEvent.id,
        title: calendarEvent.title,
        startDate: formatDate(calendarEvent.start!),
        endDate: formatDate(calendarEvent.end!),
        appliances: calendarEvent.extendedProps.appliances,
      }
    );
