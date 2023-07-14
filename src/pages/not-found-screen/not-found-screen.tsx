import { Link } from 'react-router-dom';

import styles from './not-found-screen.module.css';

export default function NotFoundScreen(): JSX.Element {
  return (
    <div className = {`page ${styles.notFoundScreen}`}>
      <h1 className = {styles.title}>404 Not Found</h1>
      <p className = {styles.text}>
        Return to {' '}
        <Link to={'/'} className = {styles.link}>main page</Link>
      </p>
    </div>
  );
}
