'use client';

import ApplianceList from '@/components/appliance/appliance_list';
import Calendar from '@/components/calendar';
import AgreementModal from '@/components/modals/agreement_modal';
import {
  selectAgreement,
  unSelectAgreement,
} from '@/lib/effects/active_agreement';
import {appliances} from '@/lib/effects/appliances';
import {convertCalendarEventToAgreement} from '@/lib/utils';
import {EventClickArg} from '@fullcalendar/core';
import {
  Button,
  useDisclosure,
} from '@nextui-org/react';
import {useUnit} from 'effector-react';
import React from 'react';

import './page.css';

export default function Home() {
  const {onOpen, isOpen, onClose} = useDisclosure();
  const appliancesList = useUnit(appliances);

  const onModalClose = () => {
    unSelectAgreement();
    onClose();
  };

  return (
    <main className="main-container px-2 sm:px-6 lg:px-8">
      <div id="calendar">
        <ApplianceList appliances={appliancesList}/>
        <Calendar
          eventClick={(eventClickInfo: EventClickArg) => {
            const currentAgreement = convertCalendarEventToAgreement(eventClickInfo.event);
            selectAgreement(currentAgreement);
            onOpen();
          }}
        />
      </div>
      <Button
        className="justify-self-end text-white"
        color="success"
        onPress={onOpen}
      >
        Добавить аренду
      </Button>
      <AgreementModal
        isOpen={isOpen}
        onClose={onModalClose}
      />
    </main>
  );
}
