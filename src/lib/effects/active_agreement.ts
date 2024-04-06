import {Agreement} from '@/lib/definitions';
import {
  createEvent,
  createStore,
} from 'effector';

export const selectAgreement =
    createEvent<Agreement>('select agreement');

export const unSelectAgreement =
    createEvent('unselect agreement');

export const activeAgreement = createStore<Agreement | null>(null)
  .on(
    selectAgreement,
    (state, agreement) => agreement,
  ).on(
    unSelectAgreement,
    () => null,
  );
