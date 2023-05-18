import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';
import calculate from '../components/logic/calculate';

describe('Testing calculate function', () => {
  const obj = {
    total: null,
    next: null,
    operation: null,
  };
  it('Testing plus opetaion', () => {
    render(<Calculator />);
    const three = screen.getByText('3');
    const sum = screen.getByText('+');
    const two = screen.getByText('2');
    const equals = screen.getByText('=');
    const output = screen.getByTestId('output');
    fireEvent.click(three);
    fireEvent.click(sum);
    fireEvent.click(two);
    fireEvent.click(equals);
    expect(output.innerHTML).toBe('5');
  });

  it('Testing minus operation', () => {
    render(<Calculator />);
    const nine = screen.getByText('9');
    const sub = screen.getByText('-');
    const six = screen.getByText('6');
    const equals = screen.getByText('=');
    const output = screen.getByTestId('output');
    fireEvent.click(nine);
    fireEvent.click(sub);
    fireEvent.click(six);
    fireEvent.click(equals);
    expect(output.innerHTML).toBe('3');
  });

  it('Testing divide operation', () => {
    render(<Calculator />);
    const nine = screen.getByText('9');
    const divide = screen.getByText('/');
    const three = screen.getByText('3');
    const equals = screen.getByText('=');
    const output = screen.getByTestId('output');
    fireEvent.click(nine);
    fireEvent.click(divide);
    fireEvent.click(three);
    fireEvent.click(equals);
    expect(output.innerHTML).toBe('3');
  });

  it('Testing multiply operation', () => {
    render(<Calculator />);
    const nine = screen.getByText('9');
    const multiply = screen.getByText('x');
    const three = screen.getByText('3');
    const equals = screen.getByText('=');
    const output = screen.getByTestId('output');
    fireEvent.click(nine);
    fireEvent.click(multiply);
    fireEvent.click(three);
    fireEvent.click(equals);
    expect(output.innerHTML).toBe('27');
  });

  it('Create snapshot for Calculator.js file', async () => {
    const { asFragment } = render(<Calculator />);
    expect(asFragment()).toMatchSnapshot();
  });

  obj.next = '1';
  test('Clicking button +/- and then button 1 renders -1', () => {
    expect(calculate(obj, '+/-')).toEqual({
      total: null,
      next: '-1',
      operation: null,
    });
  });

  test('Clicking the . button while next is 7 renders 7.', () => {
    const operate = { total: null, next: '7', operation: '.' };
    expect(calculate(operate, '.')).toEqual({
      total: null,
      next: '7.',
      operation: '.',
    });
  });

  test('Clicking on + button after clicking = button', () => {
    const operate = { total: '10', next: null, operation: '+' };
    expect(calculate(operate, '+')).toEqual({
      total: '10',
      next: null,
      operation: '+',
    });
  });

  test('Clicking + button and while x operation in on display', () => {
    const operate = { total: '10', next: null, operation: 'x' };
    expect(calculate(operate, '+')).toEqual({
      total: '10',
      next: null,
      operation: '+',
    });
  });
});
