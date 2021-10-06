import { useSelector } from "react-redux";
import { BoxImg, BoxList, Container, BoxCard } from "./style";

function Digimons() {
  const { digimons } = useSelector((state) => state);

  return (
    <Container>
      <BoxList>
        <h3>Lista De Digimons</h3>
        <ol>
          {digimons.map((digimon, idx) => {
            return <li key={idx}>{digimon.name}</li>;
          })}
        </ol>
      </BoxList>
      <BoxCard>
        {digimons[0] === undefined ? (
          <p>Sem Digimon, Procure um digitando o nome logo acima!</p>
        ) : (
          <>
            <h2>Aqui está o {digimons[digimons.length - 1].name} </h2>
            <BoxImg>
              <img src={digimons[digimons.length - 1].img} />
            </BoxImg>
          </>
        )}
      </BoxCard>
    </Container>
  );
}

export default Digimons;
