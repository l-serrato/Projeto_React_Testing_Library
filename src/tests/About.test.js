import React from 'react';
import { screen } from '@testing-library/react';
import About from '../pages/About';
import renderWithRouter from '../renderWithRouter';

test('Testes About', () => {
  renderWithRouter(<About />);
  const aboutTitle = screen.getByRole('heading', {
    level: 2,
    name: 'About Pokédex',
  });
  expect(aboutTitle).toBeInTheDocument();
});

test('Verificando se há descrição', () => {
  renderWithRouter(<About />);
  const firstParagrah = screen.getByText('This application simulates a Pokédex, a digital encyclopedia containing all Pokémon');
  expect(firstParagrah).toBeInTheDocument();
  const secondParagrah = screen.getByText('One can filter Pokémon by type, and see more details for each one of them');
  expect(secondParagrah).toBeInTheDocument();
});

test('Testes img', () => {
  renderWithRouter(<About />);
  const img = screen.getByRole('img', { name: /pokédex/i });
  expect(img).toBeInTheDocument();
  expect(img.src).toContain('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
