import { ReactElement } from 'react';
import styles from './Emoji.module.css';

export type EmojiProps = {
  readonly emoji: string,
  readonly label: string,
};

const Emoji = ({ emoji, label }: EmojiProps): ReactElement => (
  <span
    role='img'
    aria-label={label}
    className={styles.emoji}
  >
    {emoji}
  </span>
);

export default Emoji;
