import { createSelector } from '@reduxjs/toolkit';
import { CounterSchema } from '../../types/CounterSchema';
import { getCounter } from '../getCounter/getCoutner';

export const getCounterValue = createSelector(
  getCounter,
  (counterState: CounterSchema) => counterState.value,
);
