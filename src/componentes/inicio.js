import {
  BoxMain,
  BoxTitle,
  TitleH1,
  TitleH3,
  SpanText,
  BoxContentPrincipal,
  ContentImg,
} from "../styles/styled-inicio";
import { BoxCenter, BoxLeft, BoxRigth } from "../styles/styled-inicio";
import arrow1 from "../img/arrow1.png";
import arrow2 from "../img/arrow2.png";
import Logo2small from "../img/Logo2small.png";

const Inicio = () => {
  return (
    <BoxMain>
      <BoxTitle>
        <TitleH1>
          <SpanText>Bienvenido a</SpanText> kronos
        </TitleH1>
        <TitleH3>
          Gestiona tu Empresa de venta de Pasajes y envío de Paquetes.
        </TitleH3>
      </BoxTitle>
      <BoxContentPrincipal>
        <BoxLeft>
          <h5>Contorla tus ventas</h5>
          <p>Accede en tiempo real al movimiento de tu empresa.</p>
          <ContentImg src={arrow1}></ContentImg>
        </BoxLeft>
        <BoxCenter>
          <ContentImg src={Logo2small}></ContentImg>
        </BoxCenter>
        <BoxRigth>
          <ContentImg src={arrow2}></ContentImg>
          <h4>Seguimiento de Paquetes</h4>
          <p>Verifica el movimiento de los paquetes y encomiendas enviadas.</p>
        </BoxRigth>
      </BoxContentPrincipal>
    </BoxMain>
  );
};
export default Inicio;
