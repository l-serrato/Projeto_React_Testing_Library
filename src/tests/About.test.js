import React from 'react';
import { screen } from '@testing-library/react';
import About from '../pages/About';

test('Testes About', () => {
  render(<About />);
  const aboutTitle = screen.getByRole('heading', {
    level: 2,
    name: 'About Pokédex',
  });
  expect(aboutTitle).toBeInTheDocument();
});

test('Verificando se há descrição', () => {
  render(<About />);
  const btn = screen.getAllByRole('paragraph');
  expect(btn).toHaveLength(2);
});

test('Testes img', () => {
  render(<About />);
  const aboutTitle = screen.getByRole('img', {
    name: 'Pokédex',
  });
  expect(aboutTitle).toBeInTheDocument();
  expect(img.src).toContain('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
