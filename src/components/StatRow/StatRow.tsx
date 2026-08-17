import styles from './StatRow.module.css';

interface StatRowProps {
  label: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

function StatRow({ label, value, onIncrement, onDecrement }: StatRowProps) {
  return (
    <div className={styles.row}>
      <span className={styles.label}>
        {label}{' '}
        <span className={styles.value} data-testid={`stat-value-${label}`}>
          {value}
        </span>
      </span>
      <span className={styles.buttons}>
        <button
          type="button"
          className={styles.decrement}
          aria-label={`Decrease ${label}`}
          onClick={onDecrement}
        >
          −
        </button>
        <button
          type="button"
          className={styles.increment}
          aria-label={`Increase ${label}`}
          onClick={onIncrement}
        >
          +
        </button>
      </span>
    </div>
  );
}

export default StatRow;
