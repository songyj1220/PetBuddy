import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import PetFinder from "../../util/PetFinder.js";
import PetList from "../PetList/PetList";
import Navigation from "../Navigation/Navigation";
import Description from '../Description/Description';
import banner from "../images/banner_gray.jpg";
import {Nav, Image, ButtonGroup, Button, InputGroup, FormControl, Row, Col} from 'react-bootstrap';

const App = () => {
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [pets, setPets] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  
 

  const getPetList = (petType, location, currentPage) => 
  {
    PetFinder.searchPet(petType, location, currentPage).then((animals) =>
    {
      setPets(animals);
      if(animals !== null && animals !== undefined)
      {
        console.log("animals", animals);
        if(animals[0].totalPage < 5)
        {
          setTotalPage(animals[0].totalPage);
        }
        else
        {
          setTotalPage(5);
        }

      }

    });
  }

  const handleChange = (event) =>
  {
    setLocation(event.target.value);
  }

  const search = (petType) =>
  {
    getPetList(petType, location);
  }

    return (
      <Router>
      <div className='main'>
        <Navigation/>


        <div className="search-container">
            <Row className="searchBar">
              <Col>
              <FormControl
                placeholder="Enter Zipcode (ex: 57018)"
                aria-label="Recipient's username with two button addons"
                onChange={handleChange}
              />
              </Col>
              <Col>
              <Link to="/petList">
                {/* <ButtonGroup></ButtonGroup> */}
              <Button variant="outline-secondary" onClick={() => {setType("dog"); search("dog");}}> Dogs </Button>
              <Button variant="outline-secondary" onClick={() => {setType("cat"); search("cat");}}>Cats</Button>
              <Button variant="outline-secondary" onClick={() => {setType("rabbit"); search("rabbit");}}>Rabbits</Button>
              {/* <Button variant="outline-secondary">Other</Button> */}
              </Link>
              </Col>
            </Row>
          </div>

        {/* <div className = "petId">
          <PetList pets={pets} />    
        </div> */}

          <Switch>
            <Route exact path="/">
            </Route>
            <Route path="/petList">
            <PetList pets={pets} totalPage={totalPage}/>    
            </Route>
            <Route path="/description" component={Description}>
            </Route>
          </Switch>

        </div>
      </Router>
    );
};

export default App;