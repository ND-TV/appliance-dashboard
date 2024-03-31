'use client';

import React from 'react';
import {Appliance} from '@/lib/definitions';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalProps,
} from '@nextui-org/react';

type InfoModalProps = Omit<ModalProps, 'children'> & {appliance: Appliance};

export default function InfoModal(props: InfoModalProps) {
  return (
    <Modal backdrop="blur" {...props}>
      <ModalContent>
        <ModalHeader>
          {props.appliance.title}
        </ModalHeader>
        <ModalBody className="flex flex-col gap-1">
          <p>{props.appliance.category}</p>
          <p>{props.appliance.price}</p>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
