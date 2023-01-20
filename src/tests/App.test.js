import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../components/renderWithRouter';
import App from '../App';

it('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
  renderWithRouter(<App />);
  const homeTitle = screen.getByRole('heading', {
    name: 'Pokédex',
  });
  expect(homeTitle).toBeInTheDocument();
  const link1 = screen.getByRole('link', { name: /Home/i });
  expect(link1).toBeInTheDocument();
  const link2 = screen.getByRole('link', { name: /About/i });
  expect(link2).toBeInTheDocument();
  const link3 = screen.getByRole('link', { name: /Favorite Pokémon/i });
  expect(link3).toBeInTheDocument();
});

it('teste link home', () => {
  renderWithRouter(<App />);
  const link1 = screen.getByRole('link', { name: /Home/i });
  userEvent.click(link1);
  const aboutTitle = screen.getByRole('heading', {
    name: 'Encountered Pokémon',
  });
  expect(aboutTitle).toBeDefined();
});

it('teste link about', () => {
  renderWithRouter(<App />);
  const link2 = screen.getByRole('link', { name: /About/i });
  userEvent.click(link2);
  const aboutTitle = screen.getByRole('heading', {
    name: 'About Pokédex',
  });
  expect(aboutTitle).toBeDefined();
});

it('teste link favorite pokemon', () => {
  renderWithRouter(<App />);
  const link3 = screen.getByRole('link', { name: /Favorite Pokémon/i });
  userEvent.click(link3);
  const aboutTitle = screen.getByRole('heading', {
    name: 'Favorite Pokémon',
  });
  expect(aboutTitle).toBeDefined();
});

it('teste rota not found', () => {
  const { history } = renderWithRouter(<App />);
  act(() => {
    history.push('/notfound/');
  });
  const notFoundTitle = screen.getByRole('heading', {
    name: 'Page requested not found',
  });
  expect(notFoundTitle).toBeDefined();
});
// test
