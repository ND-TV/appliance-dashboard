import {Agreement} from '@/lib/definitions';
import {mockAgreements} from '@/lib/mock';
import {
  createEvent,
  createStore,
} from 'effector';

export const addAgreement =
    createEvent<Agreement>('add agreement');

export const updateAgreement =
    createEvent<Agreement>('update agreement');

export const agreements = createStore<Agreement[]>(mockAgreements)
  .on(
    addAgreement,
    (state, agreement) => [...state, agreement],
  )
  .on(
    updateAgreement,
    (state, agreement) => {
      return state.map(item => {
        if (item.id === agreement.id) {
          return { ...item, ...agreement };
        }
        return item;
      });
    },
  );
