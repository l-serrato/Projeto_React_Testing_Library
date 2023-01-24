import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('testes info', () => {
  renderWithRouter(<App />);
  const maisDetalhes = screen.getByRole('link', { name: /more details/i });
  userEvent.click(maisDetalhes);
  const deetsTitle = screen.getByRole('heading', {
    level: 2,
    name: 'Pikachu Details',
  });
  expect(deetsTitle).toBeInTheDocument();
  expect(maisDetalhes).not.toBeInTheDocument();
  const summary = screen.getByRole('heading', {
    level: 2,
    name: /summary/i,
  });
  expect(summary).toBeInTheDocument();
  const moreDeets = screen.getByText('This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.');
  expect(moreDeets).toBeInTheDocument();
});

test('testes mapa', () => {
  renderWithRouter(<App />);
  const maisDetalhes = screen.getByRole('link', { name: /more details/i });
  userEvent.click(maisDetalhes);
  const mapTitle = screen.getByRole('heading', {
    level: 2,
    name: /Game Locations of Pikachu/i,
  });
  expect(mapTitle).toBeInTheDocument();
  const mapsName1 = screen.getByText(/kanto viridian forest/i);
  const mapsName2 = screen.getByText(/kanto power plant/i);
  expect(mapsName1).toBeInTheDocument();
  expect(mapsName2).toBeInTheDocument();
  const maps = screen.getAllByRole('img', { name: /pikachu location/i });
  expect(maps).toHaveLength(2);
  expect((maps)[0].src).toContain('https://archives.bulbagarden.net/media/upload/0/08/Kanto_Route_2_Map.png');
  expect((maps)[1].src).toContain('https://archives.bulbagarden.net/media/upload/b/bd/Kanto_Celadon_City_Map.png');
});

test('testes favoritar', () => {
  renderWithRouter(<App />);
  const maisDetalhes = screen.getByRole('link', { name: /more details/i });
  userEvent.click(maisDetalhes);
  const fave = screen.getByLabelText('Pokémon favoritado?');
  // expect(fave).toHaveAttribute('label', { name: 'Pokémon favoritado?' });
  expect(fave).toBeInTheDocument();
  userEvent.click(fave);
  const img = screen.getByRole('img', {
    name: /Pikachu is marked as favorite/i,
  });
  expect(img).toBeInTheDocument();
});
