import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { FavoritePokemon } from '../pages';
import renderWithRouter from '../renderWithRouter';

test('Mensagem de erro', () => {
  renderWithRouter(<FavoritePokemon />);
  const text = screen.getByText(/no favorite pokémon/i);
  expect(text).toBeInTheDocument();
});

test('É exibido todos os cards de pokémons favoritados.', () => {
  renderWithRouter(<App />);
  const maisDetalhes = screen.getByRole('link', { name: /more details/i });
  userEvent.click(maisDetalhes);
  const checkbox = screen.getByRole('checkbox');
  userEvent.click(checkbox);
  const linkFavorite = screen.getByRole('link', { name: /favorite pokémon/i });
  userEvent.click(linkFavorite);
  const pokemonName = screen.getByTestId('pokemon-name');
  expect(pokemonName).toBeInTheDocument();
});
