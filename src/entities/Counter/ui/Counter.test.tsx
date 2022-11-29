import {
  componentRender,
} from 'shared/lib/tests/componentRender/componentRender';
import { CounterSchema } from 'entities/Counter/model/types/CounterSchema';
import { fireEvent, screen } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter', () => {
  beforeEach(() => {
    const state: CounterSchema = {
      value: 10,
    };
    componentRender(<Counter />, {
      initialState: { counter: state },
    });
  });

  test('Have to display correct counter value', () => {
    const coutnerValueText = screen.getByTestId('value-title');

    expect(coutnerValueText).toHaveTextContent('10');
  });

  test('increment', () => {
    const coutnerValueText = screen.getByTestId('value-title');
    const incrementBtn = screen.getByTestId('increment-btn');
    fireEvent.click(incrementBtn);

    expect(coutnerValueText).toHaveTextContent('11');
  });

  test('decrement', () => {
    const coutnerValueText = screen.getByTestId('value-title');
    const decrementBtn = screen.getByTestId('decrement-btn');
    fireEvent.click(decrementBtn);

    expect(coutnerValueText).toHaveTextContent('9');
  });
});
