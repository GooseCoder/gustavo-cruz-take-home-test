import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from '../App';

describe('App', () => {
  it('increments a stat when its + button is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);

    const firstCard = screen.getAllByRole('listitem')[0];
    const attackPlus = within(firstCard).getByRole('button', {
      name: 'Increase Attack',
    });

    await user.click(attackPlus);
    await user.click(attackPlus);

    expect(within(firstCard).getByTestId('stat-value-Attack')).toHaveTextContent('2');
  });

  it('adds a character with all stats at zero via "Add Character"', async () => {
    const user = userEvent.setup();
    render(<App />);

    const before = screen.getAllByRole('listitem').length;
    await user.click(screen.getByRole('button', { name: 'Add Character' }));

    const cards = screen.getAllByRole('listitem');
    expect(cards).toHaveLength(before + 1);
    const newCard = cards[cards.length - 1];
    expect(within(newCard).getByTestId('stat-value-Health')).toHaveTextContent('0');
    expect(within(newCard).getByTestId('stat-value-Attack')).toHaveTextContent('0');
    expect(within(newCard).getByTestId('stat-value-Defense')).toHaveTextContent('0');
  });

  it('zeroes every character\'s Health via "Attack All Characters"', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(
      screen.getByRole('button', { name: 'Attack All Characters' }),
    );

    for (const card of screen.getAllByRole('listitem')) {
      expect(within(card).getByTestId('stat-value-Health')).toHaveTextContent('0');
    }
  });
});
