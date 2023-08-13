import { useState } from "react";
import {
  BoxMain,
  ContainerTitle,
  ContainerForm,
  Parrafo,
  TextArea,
  TextInput,
  BtnEnviar,
} from "../styles/stayled-formulario";
import { saveData } from "../application/api";
import { useRef } from "react";

const Formulario = () => {
  const limpiarForm = useRef();
  const objeto = {
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  };
  const [datos, setDatos] = useState(objeto);
  const inpuntChange = (event) => {
    setDatos({ ...datos, [event.target.name]: event.target.value });
  };
  const enviarDatos = (event) => {
    event.preventDefault();
    saveData(datos);
    limpiarForm.current.reset();
  };
  return (
    <BoxMain>
      <ContainerTitle>
        <h3>Escribenos</h3>
      </ContainerTitle>
      <ContainerForm>
        <form onSubmit={enviarDatos} ref={limpiarForm}>
          <Parrafo>Tu Nombre</Parrafo>
          <label>
            <TextInput
              type=" text "
              placeholder="Tu Nombre"
              name="nombre"
              onChange={inpuntChange}
            ></TextInput>
          </label>
          <Parrafo>Tu Email</Parrafo>
          <label>
            <TextInput
              type="email"
              placeholder="Tu Email"
              name="email"
              onChange={inpuntChange}
            ></TextInput>
          </label>
          <Parrafo>Asunto</Parrafo>
          <label>
            <TextInput
              type="text"
              placeholder="Asunto"
              name="asunto"
              onChange={inpuntChange}
            ></TextInput>
          </label>
          <Parrafo>Tu Mensaje</Parrafo>
          <label>
            <TextArea
              placeholder="Tu Mensaje"
              name="mensaje"
              onChange={inpuntChange}
            ></TextArea>
          </label>
          <BtnEnviar type="submit">Enviar mensaje</BtnEnviar>
        </form>
      </ContainerForm>
    </BoxMain>
  );
};

export default Formulario;
