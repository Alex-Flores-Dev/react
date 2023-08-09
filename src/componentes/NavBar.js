import {
  BoxMain,
  BoxLogo,
  Logo,
  BoxNav,
  ListNav,
  LinkNav,
  ButtonNav,
  BoxButton,
} from "../styled-NavBar";
import robot from "../img/robots.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <BoxMain>
        <BoxLogo>
          <LinkNav href="http://www.google.com">
            <Logo src={robot} alt="logotipo"></Logo>
          </LinkNav>
        </BoxLogo>
        <BoxNav>
          <ListNav>
            <LinkNav href={`/`}> Inicio</LinkNav>
          </ListNav>
          <ListNav>
            <LinkNav href={`/`}>Descripcion</LinkNav>
          </ListNav>
          <ListNav>
            <LinkNav href={`/`}> Capturas</LinkNav>
          </ListNav>
          <ListNav>
            <LinkNav href={`/`}>Precios</LinkNav>
          </ListNav>
          <ListNav>
            <LinkNav href={`/`}>Contacto</LinkNav>
          </ListNav>
        </BoxNav>
        <BoxButton>
          <ButtonNav>Rastreo de Carga</ButtonNav>
          <ButtonNav>Acceso Clientes</ButtonNav>
        </BoxButton>
      </BoxMain>
    </div>
  );
};
export default NavBar;
