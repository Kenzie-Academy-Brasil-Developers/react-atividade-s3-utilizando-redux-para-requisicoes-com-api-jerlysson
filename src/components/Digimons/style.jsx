import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const BoxList = styled.div`
  border: 1px solid;
  width: 30vw;
  ol {
    max-height: 200px;
    overflow: auto;
    text-align: start;
    padding-left: 17px;
    margin: 0;
  }
`;
export const BoxCard = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
  border: 1px solid;
`;
export const BoxImg = styled.div`
  img {
    width: 100%;
  }
`;
