import React from 'react';
import { screen } from '@testing-library/react';
import About from '../pages/About';
import renderWithRouter from '../renderWithRouter';

test('Testes About', () => {
  renderWithRouter(<About />);
  const aboutTitle = screen.getByRole('heading', {
    name: /About Pokédex/i,
    level: 2,
  });
  expect(aboutTitle).toBeInTheDocument();
});

test('Testes img', () => {
  const { getByAltText } = renderWithRouter(<About />);
  const img = getByAltText(
    /Pokédex/i,
  );
  expect(img).toHaveAttribute(
    'src',
    'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png',
  );
});
