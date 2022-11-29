import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCoutner';

describe('getCounter', () => {
  test('have to return counter state', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10,
      },
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});
