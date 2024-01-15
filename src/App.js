import React from 'react';

import './App.css';

import { useState } from 'react';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {IngresarComponent} from './components/login.component';
import {Publicaciones} from './components/Listam.component'

function App() {

  const[usuarioSesion, setSesion] = useState([]);
  console.log(usuarioSesion);
  

  return (
  <div className="App">
  <div className="datos">
    {
      usuarioSesion.length == 0 ?<IngresarComponent setSesion={setSesion} /> :<Publicaciones />
    }

</div>
</div>
  );
 /*  const [nombre, setNombre] = useState('');
  const [img, setImg] = useState('');
  const [descripcion, setDescripcion] = useState('');


  const add = () => {
    Axios.post("http://localhost:3001/create", {
      nombre: nombre,
      img: img,
      descripcion: descripcion
    }).then(() => {

      alert('Meme Registrado');
    });
  }


  return (
    <div className="App">
      <div className="datos">
        <label>Nombre:<input
          onChange={(event) => {
            setNombre(event.target.value);
          }}
          type='text' /> </label>
        <label>Imagen:<input
          onChange={(event) => {
            setImg(event.target.value);
          }}
          type='text' /> </label>
        <label>Descripción:<input
          onChange={(event) => {
            setDescripcion(event.target.value);
          }}
          type='text' /> </label>
        <button onClick={add} className='btn btn-success' >Registrar</button>
      </div>
     
    </div>
  ); */
}


/* function publicaciones() {

  const [memeList, setMemes] = useState([]);
  getmemes();
  const getmemes = () => {
    Axios.get("http://localhost:3001/meme").then((response) => {
      setMemes(response.data);
      alert('wiiinn');
    });
  }

  return (
    <div className="lista">
    {
      memeList.map((val, key) => {
        return (

          <>

            <Card className="bg-dark text-white">
              <Card.Img src={`${val.imagen}`} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>{val.nombre}</Card.Title>

              </Card.ImgOverlay>
            </Card>
          </>
        )
      })
    }
  </div>
);

} */






export default App;
