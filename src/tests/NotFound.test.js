import React from 'react';
import { screen } from '@testing-library/react';
import About from '../pages/About';
import renderWithRouter from '../renderWithRouter';

test('Testes About', () => {
  renderWithRouter(<About />);
  const aboutTitle = screen.getByRole('heading', {
    level: 2,
    name: 'Page requested not found',
  });
  expect(aboutTitle).toBeInTheDocument();
});

test('Testes img', () => {
  renderWithRouter(<About />);
  const aboutTitle = screen.getByRole('img', {
    name: 'Pikachu crying because the page requested was not found',
    src: 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif',
  });
  expect(aboutTitle).toBeInTheDocument();
  expect(img.src).toContain('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
