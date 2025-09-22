// in props here, we use the names that we use while sending props from parent component, not what is inside the {}
export default function ButtonWithoutState({ handleLifted, lifted }) {
  return <button onClick={handleLifted}>Clicked me: {lifted}</button>;
}
