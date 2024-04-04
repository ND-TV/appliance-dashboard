'use client';

import ApplianceList from '@/components/appliance/appliance_list';
import Calendar from '@/components/calendar';
import AddRentModal from '@/components/modals/add_rent_modal';
import {mockAppliances} from '@/lib/mock/appliances';
import {
  Button,
  useDisclosure,
} from '@nextui-org/react';

import './page.css';
import React from 'react';

export default function Home() {
  const {onOpen, isOpen, onClose} = useDisclosure();

  return (
    <main className="main-container px-2 sm:px-6 lg:px-8">
      <div id="calendar">
        <ApplianceList appliances={mockAppliances}/>
        <Calendar />
      </div>
      <Button
        className="justify-self-end text-white"
        color="success"
        onPress={onOpen}
      >
        Добавить аренду
      </Button>
      <AddRentModal
        isOpen={isOpen}
        onClose={onClose}
      />
    </main>
  );
}
