import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

const name = 'pokemon-name';

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
  userEvent.click(btn1);
  const pokemonFire = screen.getByText(/Charmander/i);
  expect(pokemonFire).toBeInTheDocument();
});

it('é mostrado apenas um Pokémon por vez', () => {
  renderWithRouter(<App />);
  const pokemonName = screen.getAllByTestId(name);
  expect(pokemonName).toHaveLength(1);
});

test('filter buttons', () => {
  renderWithRouter(<App />);
  const nextBtn = screen.getByRole('button', { name: /Próximo Pokémon/i });
  const btn2 = screen.getAllByTestId('pokemon-type-button');
  expect(btn2).toHaveLength(7);
  const btnFire = screen.getByRole('button', { name: 'Fire' });
  expect(btnFire).toBeInTheDocument();
  const btnPsych = screen.getByRole('button', { name: 'Psychic' });
  expect(btnPsych).toBeInTheDocument();
  userEvent.click(btnFire);
  const pokemonFire = screen.getByText(/Charmander/i);
  expect(pokemonFire).toBeInTheDocument();
  userEvent.click(btnPsych);
  const pokemonPsych = screen.getByText(/Alakazam/i);
  expect(pokemonPsych).toBeInTheDocument();
  userEvent.click(nextBtn);
  expect(screen.getByTestId(name)).toHaveTextContent(/mew/i);
  const btn3 = screen.getByText(/All/i);
  expect(btn3).toBeInTheDocument();
  userEvent.click(btn3);
  const pokemonName = screen.getByTestId(name);
  expect(pokemonName).toHaveTextContent('Pikachu');
});
test('all button', () => {
  renderWithRouter(<App />);
  const btn3 = screen.getByText(/all/i);
  expect(btn3).toBeInTheDocument();
  userEvent.click(btn3);
  const pokemonName = screen.getByTestId(name);
  expect(pokemonName).toHaveTextContent('Pikachu');
});
