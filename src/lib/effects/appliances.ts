import {Appliance} from '@/lib/definitions';
import {mockAppliances} from '@/lib/mock';
import {
  createEvent,
  createStore,
} from 'effector';

export const addAppliance = createEvent<Appliance>('add appliance');

export const appliances = createStore<Appliance[]>(mockAppliances)
  .on(
    addAppliance, 
    (state, appliance) => [...state, appliance],
  );
