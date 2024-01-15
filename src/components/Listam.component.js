import React from 'react';

import '../App.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Pagination from "react-bootstrap/Pagination";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';

export const Publicaciones = () => {

  /*  const [memeList, setMemes] = useState([]); */
  const [pagee, setPage] = useState(1);
  const [limit, setLimit] = useState(2);
  const [memeData, setData] = useState({
    data: [],
    page: 1,
    pageSize: 2,
    totalPages: 5,
    count: 7
  });
  const [memeinfo, setInfo] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  useEffect(() => {
    Axios.post("http://localhost:3001/memedata", {
      page: pagee,
      limit: limit
    })
      .then((res) => {
        setData((prev) => ({
          ...prev,
          data: res.data
        }));
      })
      .catch((error) => console.log(error));
  }, [memeData.totalPages]);

  const handlePageChange = (pageNumber) => {
    setData((prev) => ({ ...prev, page: pageNumber }));

    Axios.post("http://localhost:3001/memedata", {
      page: pageNumber,
      limit: limit
    })
      .then((res) => {
        setData((prev) => ({
          ...prev,
          data: res.data
        }));

      })
      .catch((error) => console.log(error));
  };
  const memedataInfo = (e, id) => {
    Axios.post("http://localhost:3001/meme", {
      id: id

    }).then((response) => {
      setInfo(response.data);
      /* console.log(memeinfo); */
      handleShow();
      alert('show');
    });
  };

  return (

    <div className="lista">

      {
        memeData.data.map((val, key) => {
          return (

            <div className='col-12 pt-2' id={`${val.id}`} key={val.id}>
              <button onClick={(ev) => memedataInfo(ev, val.id)}>
                <Card className="bg-dark text-white">
                  <Card.Img src={`${val.imagen}`} alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title >{val.nombre}</Card.Title>

                  </Card.ImgOverlay>
                </Card>
              </button>
            </div>




          )
        })
      }
      <Pagination className="px-4">
        {memeData.data.map((_, index) => {
          return (
            <Pagination.Item
              onClick={() => handlePageChange(index + 1)}
              key={index + 1}
              active={index + 1 === memeData.page}
            >
              {index + 1}
            </Pagination.Item>
          );
        })}
      </Pagination>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}

       
      >
        <Modal.Header closeButton>
          <Modal.Title> {memeinfo.length === 0 ? '' : memeinfo[0].nombre } </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container'>
            <div className='root' >
              <div className='col-12'>
                <Image src={`${memeinfo.length === 0 ? '' : memeinfo[0].imagen}`} rounded />
              </div>
              <div className='col-12'>

                <label>{memeinfo.length === 0 ? '' : memeinfo[0].descrimeme}</label>

              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )

}