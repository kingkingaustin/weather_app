import React from 'react'
import './description.css'
import { AiOutlineArrowDown, AiOutlineArrowUp, } from "react-icons/ai";
import { BsWind } from 'react-icons/bs';
import {  BiHappyBeaming,  } from "react-icons/bi";
import { MdOutlineCompress, MdWaterDrop } from "react-icons/md";


const Description = ({weather, units}) => {
  const tempUnit = units === 'metric' ? '°C' : '°F'
  const windUnit = units === 'metric' ? 'm/h' : 'm/h'

  const card = [
  {
    id:1,
    icon:<AiOutlineArrowDown/>,
    title: "min",
    data: weather.temp_min.toFixed(),
    unit: tempUnit,
  },
  {
    id:2,
    icon:<AiOutlineArrowUp/>,
    title: "max",
    data: weather.temp_min.toFixed(),
    unit: tempUnit,
  },
  {
    id:3,
    icon:<BiHappyBeaming/>,
    title: "feels_like",
    data: weather.temp_min.toFixed(),
    unit: tempUnit,
  },
  {
    id:4,
    icon:<MdOutlineCompress/>,
    title: "pressure",
    data: weather.pressure,
    unit: "hPa",
  },
  {
    id:5,
    icon:<MdWaterDrop/>,
    title: "humidity",
    data: weather.humidity,
    unit: "%",
  },
  {
    id:6,
    icon:<BsWind/>,
    title: "wind_speed",
    data: weather.temp_min,
    unit: windUnit,
  },
];
  return (
   <div className="section section__description">
    {card.map(({id,icon,title,data,unit}) => (
      <div key={id} className="card">
         <div className="description_card-icon">
           {icon}
           <small>{title}</small>
         </div>
         <h2>{`${data} ${unit}`}</h2>
      </div>
    ))}
      
   </div>
  )
}

export default Description