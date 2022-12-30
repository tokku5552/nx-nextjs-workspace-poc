import styles from './SampleComponent.module.css';

/* eslint-disable-next-line */
export interface SampleComponentProps {
  title: string;
}

export function SampleComponent(props: SampleComponentProps) {
  return (
    <div className={styles['container']}>
      <h1>{props.title}</h1>
    </div>
  );
}

export default SampleComponent;
