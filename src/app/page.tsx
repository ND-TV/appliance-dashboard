'use client';

import AddRentModal from '@/components/modals/add_rent_modal';
import {
  Button,
  useDisclosure,
} from '@nextui-org/react';

import './page.css';

export default function Home() {
  const {onOpen, isOpen, onClose} = useDisclosure();

  return (
    <main className="main-container px-2 sm:px-6 lg:px-8">
      <div className="w-full h-full bg-gray-400 rounded-lg grid place-items-center">
        Календарь
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
