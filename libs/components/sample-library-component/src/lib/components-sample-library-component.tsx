import styles from './components-sample-library-component.module.css';

/* eslint-disable-next-line */
export interface ComponentsSampleLibraryComponentProps {}

export function ComponentsSampleLibraryComponent(
  props: ComponentsSampleLibraryComponentProps
) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ComponentsSampleLibraryComponent!</h1>
    </div>
  );
}

export default ComponentsSampleLibraryComponent;
