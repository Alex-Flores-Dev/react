import styled from "styled-components";
export const BoxMain = styled.div`
  width: 100%;
  height: 60px;
  background-color: #f8f8f8;
  display: flex;
`;
export const BoxLogo = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  justify-content: center;
`;
export const Logo = styled.img`
  width: 50px;
  cursor: pointer;
`;
export const BoxNav = styled.ul`
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const ListNav = styled.li`
  list-style: none;
  &:hover {
    background-color: blue;
  }
`;
export const LinkNav = styled.a`
  color: black;
  text-decoration: none;
`;
export const BoxButton = styled(BoxLogo)`
  width: 30%;
  justify-content: space-around;
`;
export const ButtonNav = styled.button`
  background-color: #f8f8f8;
  /* color: white; */
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #8c8c8c;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
  }
`;
