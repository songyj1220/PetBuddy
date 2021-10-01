import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {Image, Card} from 'react-bootstrap';
import DefaultImage from '../images/paw.jpg';
import './Description.css';

const Description = (props) =>
{
    let Location = useLocation();
    console.log("description props" + props);
    console.log("location" + Location.state.name);
    return(
        <div className="Description">
            <div className="image-container">
            {
                (Location.state.photos.length > 0) ?
                <Image src={Location.state.photos[0].large} alt="petImage" />

                :

                <Image src={DefaultImage} alt="petNoImage" />

            }
            </div>
            <div className="description-container">
            <Card>
                <Card.Body>
                    <Card.Title style={{fontSize:'30px', fontWeight:'bolder'}}>{Location.state.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{Location.state.breeds.primary}</Card.Subtitle>
                    <Card.Text> 
                        {Location.state.age} | {Location.state.gender} | {Location.state.size}
                    </Card.Text>

                    <Card.Text >
                        <b>About</b>
                        <p>{Location.state.description}</p>
                    </Card.Text>

                    {/* <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
            </Card>
            </div>

        </div>
    );

};

export default Description;