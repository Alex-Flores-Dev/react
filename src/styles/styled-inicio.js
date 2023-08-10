import styled, { css } from "styled-components";
const Formater = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;
//#region Caja Principal
export const BoxMain = styled.section`
  width: 100%;
  background: #34495e;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;
//#endregion

//#region Titulos
export const BoxTitle = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  align-items: center;
`;
export const TitleH1 = styled.h1`
  font-size: 60px;
  ${Formater}
  margin-top: 50px;
`;
export const TitleH3 = styled.h3`
  font-weight: 300;
  font-size: 30px;
  ${Formater}
  margin-top: 20px;
`;
export const SpanText = styled.span`
  font-weight: 200;
`;
//#endregion

//#region Contenido principal
export const BoxContentPrincipal = styled.div`
  display: flex;
  width: 80%;
  margin-top: 30px;
`;
export const BoxLeft = styled.div`
  width: 15%;
`;
export const BoxCenter = styled.div`
  width: 70%;
`;
export const ContentImg = styled.img`
  width: 100%;
`;
export const BoxRigth = styled.div`
  width: 15%;
  padding-top: 20px;
`;
//#endregion
