import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('testes card', () => {
  renderWithRouter(<App />);
  const pokeName = screen.getByTestId('pokemon-name');
  expect(pokeName).toHaveTextContent(/Pikachu/i);
  const pokeType = screen.getByTestId('pokemon-type');
  expect(pokeType).toHaveTextContent(/Electric/i);
  const pokeWeight = screen.getByTestId('pokemon-weight');
  expect(pokeWeight).toHaveTextContent(/Average weight: 6.0 kg/i);
  const img = screen.getByRole('img', {
    name: /Pikachu sprite/i,
  });
  expect(img).toBeInTheDocument();
  expect(img.src).toContain('https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
});

test('testes link', () => {
  renderWithRouter(<App />);
  const maisDetalhes = screen.getByRole('link', { name: /more details/i });
  expect(maisDetalhes).toBeInTheDocument();
  userEvent.click(maisDetalhes);
});

test('testes estrela', () => {
  renderWithRouter(<App />);
  const maisDetalhes = screen.getByRole('link', { name: /more details/i });
  expect(maisDetalhes).toBeInTheDocument();
  userEvent.click(maisDetalhes);
  const fave = screen.getByRole('checkbox');
  userEvent.click(fave);
  const img = screen.getByRole('img', {
    name: /Pikachu is marked as favorite/i,
  });
  expect(img).toBeInTheDocument();
  expect(img.src).toContain('/star-icon.svg');
});
