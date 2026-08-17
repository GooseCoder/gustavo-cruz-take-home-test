import styles from './GlobalActions.module.css';

interface GlobalActionsProps {
  onAddCharacter: () => void;
  onAttackAll: () => void;
}

function GlobalActions({ onAddCharacter, onAttackAll }: GlobalActionsProps) {
  return (
    <div className={styles.bar}>
      <button type="button" className={styles.action} onClick={onAddCharacter}>
        Add Character
      </button>
      <button type="button" className={styles.action} onClick={onAttackAll}>
        Attack All Characters
      </button>
    </div>
  );
}

export default GlobalActions;
