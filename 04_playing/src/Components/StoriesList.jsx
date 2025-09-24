export default function StoriesList({ stories }) {
  return (
    <>
      <p>Stories List component</p>
      {stories.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </>
  );
}
