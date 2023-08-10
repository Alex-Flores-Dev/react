import React from 'react'
import first from "../../img/1.png"
import second from "../../img/2.png"
import third from "../../img/3.png"
import "./Description.css";

export default function Description() {
  return (
    <>
        <h1 className='title__description'>Servicio en la nube</h1>
        <div className='description'>
            <div className='description__card'>
                <img src={first} alt="1.png" />
                <h2>Tiempo Real</h2>
                <p>Kronos muestra información en tiempo real de todas la operaciones que se realizan en su empresa.</p>
            </div>
            <div className='description__card'>
                <img src={second} alt="2.png" />
                <h2>Actualizaciones</h2>
                <p>Kronos trabaja con actualizaciones periódicas que estarán disponibles sin costos extras.</p>
            </div>
            <div className='description__card'>
                <img src={third} alt="3.png" />
                <h2>Soporte Técnico</h2>
                <p>El equipo técnico de Kronos está a disposición para resolver cualquier duda o problema que se presente.</p>
            </div>
        </div>
        <div className='description'>
            <div className='description__card'>
                <img src="https://www.ticketsbolivia.com/images/assets/logo.svg" alt="tickets_bolivia" />
                <h2>Ventas en línea</h2>
                <p>Kronos se conecta con ticketsbolivia para realizar ventas en línea, con selección de asientos incluido.</p>
            </div>
        </div>
    </>
  )
}
