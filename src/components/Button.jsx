export default function Button({ funcioClicar, value }) {
  return (
    <button className="botones" onClick={() => funcioClicar(value)}>
      {value}
    </button>
  );
}
