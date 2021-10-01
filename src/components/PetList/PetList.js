import React, { useState, useEffect } from 'react';
import './PetList.css';
import Pet from "../Pet/Pet";

const PetList = (props) =>
{
    return(
        <div className="PetList">
           {
          (props.pets !== undefined) ?

          props.pets.map((pet) => {
              return <Pet key={pet.id} pet={pet}/>;
            })


            :

            <p>There was an error. Please try again.</p>
        }
        </div>
    );

};

export default PetList;