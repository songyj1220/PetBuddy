import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import DefaultImage from '../images/paw.jpg';
import './Pet.css';

const Pet = (props) =>
{
    return(
        <div className="Pet">
        <Link to={{
            pathname: "/description",
            state: props.pet
        }}>
           <Card className="petCard">
               <div className="cardImage" style={{height: '20rem' }}>
               {
                   (props.pet.photos.length > 0) ?
                   <Card.Img variant="top" src={props.pet.photos[0].large} alt="petImage" style={{ height: '254px'}}/>

                   :

                   <Card.Img variant="top" src={DefaultImage} alt="petNoImage"/>

               }
               </div>
               <Card.Body>
                   <Card.Title>{props.pet.name}</Card.Title>
                   <Card.Text>
                       {props.pet.breeds.primary}
                   </Card.Text>
               </Card.Body>
           </Card>
        </Link>
        </div>
    );

};

export default Pet;