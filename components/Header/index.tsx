import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1 className="font-bold text-gray-300 transition duration-700  hover:text-gray-600">
          Dev Docs
        </h1>
      </Link>
    </header>
  );
}
