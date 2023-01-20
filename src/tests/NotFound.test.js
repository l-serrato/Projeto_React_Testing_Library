import React from 'react';
import { screen } from '@testing-library/react';
import About from '../pages/About';
import renderWithRouter from '../renderWithRouter';

test('Testes About', () => {
  renderWithRouter(<About />);
  const aboutTitle = screen.getByRole('heading', {
    level: 2,
    name: /page requested not found/i,
  });
  expect(aboutTitle).toBeInTheDocument();
});

test('Testes img', () => {
  const { getByAltText } = renderWithRouter(<About />);
  const img = getByAltText(
    /Pikachu crying because the page requested was not found/i,
  );
  expect(img).toHaveAttribute(
    'src',
    'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif',
  );
});
