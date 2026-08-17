import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import StatRow from '../../../components/StatRow/StatRow';

describe('StatRow', () => {
  it('renders the label and value', () => {
    render(
      <StatRow label="Attack" value={7} onIncrement={vi.fn()} onDecrement={vi.fn()} />,
    );

    expect(screen.getByTestId('stat-value-Attack')).toHaveTextContent('7');
  });

  it('calls onIncrement when the + button is clicked', async () => {
    const user = userEvent.setup();
    const onIncrement = vi.fn();
    render(
      <StatRow
        label="Health"
        value={100}
        onIncrement={onIncrement}
        onDecrement={vi.fn()}
      />,
    );

    await user.click(screen.getByRole('button', { name: 'Increase Health' }));

    expect(onIncrement).toHaveBeenCalledTimes(1);
  });

  it('calls onDecrement when the − button is clicked', async () => {
    const user = userEvent.setup();
    const onDecrement = vi.fn();
    render(
      <StatRow
        label="Defense"
        value={50}
        onIncrement={vi.fn()}
        onDecrement={onDecrement}
      />,
    );

    await user.click(screen.getByRole('button', { name: 'Decrease Defense' }));

    expect(onDecrement).toHaveBeenCalledTimes(1);
  });
});
