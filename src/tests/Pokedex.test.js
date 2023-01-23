import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import { act } from 'react-dom/test-utils';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('teste cabeçalho', () => {
  renderWithRouter(<App />);
  const header = screen.getByRole('heading', {
    level: 2,
    name: 'Encountered Pokémon',
  });
  expect(header).toBeDefined();
});

test('button 1', () => {
  renderWithRouter(<App />);
  const btn1 = screen.getByRole('button', { name: /próximo pokémon/i });
  expect(btn1).toBeInTheDocument();
});

it('é mostrado apenas um Pokémon por vez', () => {
  renderWithRouter(<App />);
  const pokemonName = screen.getAllByTestId('pokemon-name');
  expect(pokemonName).toHaveLength(1);
});

test('filter buttons', () => {
  renderWithRouter(<App />);
  const btn2 = screen.getAllByTestId('pokemon-type-button');
  expect(btn2).toHaveLength(7);
  const btnFire = screen.getByRole('button', { name: 'Fire' });
  expect(btnFire).toBeInTheDocument();
  userEvent.click(btnFire);
  const pokemonFire = screen.getByText('Charmander');
  expect(pokemonFire).toBeInTheDocument();
  const btn3 = screen.getByText(/All/i);
  expect(btn3).toBeInTheDocument();
});

test('all button', () => {
  renderWithRouter(<App />);
  const btn3 = screen.getByText(/All/i);
  expect(btn3).toBeInTheDocument();
  userEvent.click(btn3);
  const pokemonName = screen.getByTestId('pokemon-name');
  expect(pokemonName).toHaveTextContent('Pikachu');
});
