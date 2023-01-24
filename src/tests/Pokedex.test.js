import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

const name = 'pokemon-name';
const btn1 = () => screen.getByRole('button', { name: /Próximo Pokémon/i });
const btn2 = () => screen.getAllByTestId('pokemon-type-button');
const btnFire = () => screen.getByRole('button', { name: 'Fire' });
const btnPsych = () => screen.getByRole('button', { name: 'Psychic' });
const btn3 = () => screen.getByText(/All/i);

test('teste cabeçalho', () => {
  renderWithRouter(<App />);
  const header = screen.getByRole('heading', {
    level: 2,
    name: 'Encountered Pokémon',
  });
  expect(header).toBeInTheDocument();
});

test('button 1', () => {
  renderWithRouter(<App />);
  expect(btn1()).toBeInTheDocument();
});

it('é mostrado apenas um Pokémon por vez', () => {
  renderWithRouter(<App />);
  const pokemonName = screen.getAllByTestId(name);
  expect(pokemonName).toHaveLength(1);
});

test('filter buttons', () => {
  renderWithRouter(<App />);
  expect(btn2()).toHaveLength(7);
  expect(btnFire()).toBeInTheDocument();
  expect(btnPsych()).toBeInTheDocument();
  userEvent.click(btnFire());
  const pokemonFire = screen.getByText(/Charmander/i);
  expect(pokemonFire).toBeInTheDocument();
  userEvent.click(btnPsych());
  const pokemonPsych = screen.getByText(/Alakazam/i);
  expect(pokemonPsych).toBeInTheDocument();
  userEvent.click(btn1());
  expect(screen.getByTestId(name)).toHaveTextContent(/mew/i);
  expect(btn3()).toBeInTheDocument();
});

test('all button', () => {
  renderWithRouter(<App />);
  expect(btn3()).toBeInTheDocument();
  expect(btn3()).toHaveTextContent(/All/i);
  userEvent.click(btn3());
  expect(screen.getByText(/pikachu/i)).toBeInTheDocument();
});
