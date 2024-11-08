import '@testing-library/jest-dom'
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import App from './App';

describe('App Component', () => {
  test('renderiza los logos de Vite y React', () => {
    render(<App />);
    
    const viteLogo = screen.getByAltText('Vite logo');
    const reactLogo = screen.getByAltText('React logo');
    
    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
  });

  test('renderiza el título correcto', () => {
    render(<App />);
    
    expect(screen.getByText('Vite + React')).toBeInTheDocument();
  });

  test('incrementa el contador cuando se hace clic en el botón', async () => {
    render(<App />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('count is 0');

    await fireEvent.click(button);
    expect(button).toHaveTextContent('count is 1');
    
    await fireEvent.click(button);
    expect(button).toHaveTextContent('count is 2');
  });

  test('renderiza el texto de ayuda', () => {
    render(<App />);
    
    expect(screen.getByText(/Edit/i)).toBeInTheDocument();
    expect(screen.getByText(/Click on the Vite and React logos to learn more/i)).toBeInTheDocument();
  });
});