import styles from './index.module.css';

/* eslint-disable-next-line */
export interface SamplePageProps {}

export function SamplePage(props: SamplePageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SamplePage!</h1>
    </div>
  );
}

export default SamplePage;
