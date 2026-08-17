import type { Character, StatName } from '../../types';
import StatRow from '../StatRow/StatRow';
import styles from './Card.module.css';

interface CardProps {
  character: Character;
  onChangeStat: (stat: StatName, delta: number) => void;
  onRemove: () => void;
}

const STAT_ROWS: { stat: StatName; label: string }[] = [
  { stat: 'health', label: 'Health' },
  { stat: 'attack', label: 'Attack' },
  { stat: 'defense', label: 'Defense' },
];

function Card({ character, onChangeStat, onRemove }: CardProps) {
  return (
    <li className={styles.card}>
      <button
        type="button"
        className={styles.remove}
        aria-label="Remove character"
        onClick={onRemove}
      >
        ×
      </button>
      <img
        className={styles.image}
        src={character.image.url}
        alt=""
        width={character.image.dimensions.width}
        height={character.image.dimensions.height}
      />
      <div className={styles.content}>
        {STAT_ROWS.map(({ stat, label }) => (
          <StatRow
            key={stat}
            label={label}
            value={character[stat]}
            onIncrement={() => onChangeStat(stat, 1)}
            onDecrement={() => onChangeStat(stat, -1)}
          />
        ))}
      </div>
    </li>
  );
}

export default Card;
