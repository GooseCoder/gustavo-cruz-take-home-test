import type { ReactNode } from 'react';
import styles from './CardGrid.module.css';

function CardGrid({ children }: { children: ReactNode }) {
  return (
    <ul className={styles.grid} aria-label="Characters">
      {children}
    </ul>
  );
}

export default CardGrid;
