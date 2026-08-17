import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import GlobalActions from '../../../components/GlobalActions/GlobalActions';

describe('GlobalActions', () => {
  it('calls onAddCharacter when "Add Character" is clicked', async () => {
    const user = userEvent.setup();
    const onAddCharacter = vi.fn();
    render(<GlobalActions onAddCharacter={onAddCharacter} onAttackAll={vi.fn()} />);

    await user.click(screen.getByRole('button', { name: 'Add Character' }));

    expect(onAddCharacter).toHaveBeenCalledTimes(1);
  });

  it('calls onAttackAll when "Attack All Characters" is clicked', async () => {
    const user = userEvent.setup();
    const onAttackAll = vi.fn();
    render(<GlobalActions onAddCharacter={vi.fn()} onAttackAll={onAttackAll} />);

    await user.click(screen.getByRole('button', { name: 'Attack All Characters' }));

    expect(onAttackAll).toHaveBeenCalledTimes(1);
  });
});
