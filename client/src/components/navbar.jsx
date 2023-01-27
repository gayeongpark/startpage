import React from 'react';
import styles from './navbar.css';
import { FiSearch } from 'react-icons/fi';

export default function navbar() {
  return (
    <div className={styles.nav}>
      <div className={styles.bookmarks}>Bookmarks</div>
      <div className={styles.search}>
        <FiSearch />
      </div>
    </div>
  );
}
