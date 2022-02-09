export default function Clearbutton({ funcioClicar }) {
  return (
    <button className="clear_btn" onClick={() => funcioClicar()}>
      Clear
    </button>
  );
}
