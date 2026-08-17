import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import Card from '../../../components/Card/Card';
import type { Character } from '../../../types';

const character: Character = {
  id: 'test-id',
  image: { url: '/img/knight.jpg', dimensions: { width: 500, height: 300 } },
  health: 100,
  attack: 0,
  defense: 50,
};

// Card renders inside a list per the CardGrid contract (a bare <li> is
// invalid HTML outside a list container).
function renderCard(props: Partial<Parameters<typeof Card>[0]> = {}) {
  return render(
    <ul>
      <Card
        character={character}
        onChangeStat={vi.fn()}
        onRemove={vi.fn()}
        {...props}
      />
    </ul>,
  );
}

describe('Card', () => {
  it('renders the header image and all three stats', () => {
    // alt="" is intentional (Step 6: decorative image), which also
    // removes it from the "img" accessibility role — so it's queried
    // via the DOM directly rather than getByRole/getByAltText.
    const { container } = renderCard();

    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      '/img/knight.jpg',
    );
    expect(screen.getByTestId('stat-value-Health')).toHaveTextContent('100');
    expect(screen.getByTestId('stat-value-Attack')).toHaveTextContent('0');
    expect(screen.getByTestId('stat-value-Defense')).toHaveTextContent('50');
  });

  it('calls onChangeStat with the stat name and +1/-1 delta', async () => {
    const user = userEvent.setup();
    const onChangeStat = vi.fn();
    renderCard({ onChangeStat });

    await user.click(screen.getByRole('button', { name: 'Increase Attack' }));
    await user.click(screen.getByRole('button', { name: 'Decrease Health' }));

    expect(onChangeStat).toHaveBeenNthCalledWith(1, 'attack', 1);
    expect(onChangeStat).toHaveBeenNthCalledWith(2, 'health', -1);
  });

  it('calls onRemove when the remove button is clicked', async () => {
    const user = userEvent.setup();
    const onRemove = vi.fn();
    renderCard({ onRemove });

    await user.click(screen.getByRole('button', { name: 'Remove character' }));

    expect(onRemove).toHaveBeenCalledTimes(1);
  });
});
