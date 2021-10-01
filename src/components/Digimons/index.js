import { useSelector } from "react-redux";

function Digimons() {
  const { digimons } = useSelector((state) => state);

  return (
    <div>
      <h3>Lista De Digimons</h3>
      <ul>
        {digimons.map((digimon, idx) => {
          return <li key={idx}>{digimon.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Digimons;
