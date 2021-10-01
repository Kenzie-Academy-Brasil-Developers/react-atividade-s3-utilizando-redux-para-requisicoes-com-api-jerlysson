import { useState } from "react";
import { useDispatch } from "react-redux";
import addDigimonsThunk from "../../store/modules/digimons/thunk";

function Search() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleSearch = () => {
    setError(false);
    dispatch(addDigimonsThunk(input, setError));
    setInput("");
  };

  return (
    <>
      <h2>Procure pelo seu Digimon!</h2>
      <div>
        <input
          value={input}
          onChange={(evt) => setInput(evt.target.value)}
          placeholder="Procure seu Digimon"
        />
        <button onClick={handleSearch}>Pesquisar</button>
      </div>
      {error && <span>Digimon não Encontrado!</span>}
    </>
  );
}

export default Search;
