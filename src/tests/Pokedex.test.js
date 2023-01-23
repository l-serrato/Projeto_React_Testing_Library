import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import { act } from 'react-dom/test-utils';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('teste cabeçalho', () => {
  renderWithRouter(<App />);
  const header = screen.getByRole('heading', {
    name: 'Encountered Pokémon',
    level: 2,
  });
  expect(header).toBeDefined();
});

test('button 1', () => {
  renderWithRouter(<App />);
  const btn1 = screen.getByTestId('next-pokemon');
  expect(btn1).toBeInTheDocument();
});

test('filter buttons', () => {
  renderWithRouter(<App />);
  const btn2 = screen.getAllByTestId('pokemon-type-button');
  expect(btn2).toHaveLength(7);
});

test('all button', () => {
  renderWithRouter(<App />);
  const btn3 = screen.getByText(/All/i);
  expect(btn3).toBeInTheDocument();
});
