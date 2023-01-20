import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import renderWithRouter from '../renderWithRouter';

test('Testes Not Found', () => {
  renderWithRouter(<NotFound />);
  const title = screen.getByRole('heading', {
    name: /Page requested not found/i,
    level: 2,
  });
  expect(title).toBeInTheDocument();
});

test('Testes img', () => {
  renderWithRouter(<NotFound />);
  const img = screen.getByRole('img', {
    name: /Pikachu crying because the page requested was not found/i,
  });
  expect(img).toBeInTheDocument();
  expect(img.src).toContain('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
