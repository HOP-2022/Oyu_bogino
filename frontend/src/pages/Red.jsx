import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const Red = () => {
    const {id} = useParams()
    const url = "http://localhost:8000/" + id;
    axios
    .get(url)
    .then((response) => {
        window.location.replace(response.data.data.link)
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <div>red</div>
  )
}


export default Red;