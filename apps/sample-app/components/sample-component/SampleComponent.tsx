/* eslint-disable-next-line */
export interface SampleComponentProps {
  title: string;
}

export function SampleComponent(props: SampleComponentProps) {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
}

export default SampleComponent;
