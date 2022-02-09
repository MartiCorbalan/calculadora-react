export default function Clearbutton({ funcioClicar, value }) {
  return (
    <button className="clear_btn" onClick={() => funcioClicar(value)}>
      Clear
    </button>
  );
}
