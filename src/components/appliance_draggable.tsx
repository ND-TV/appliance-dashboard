import React from 'react';
import {Appliance} from '@/lib/definitions';
import {Chip} from '@nextui-org/react';

export default function ApplianceItem(props: Appliance) {
  return (
    <Chip
      className="fc-event"
      color="default"
      variant="light"
    >
      {props.title}
    </Chip>
  );
}
