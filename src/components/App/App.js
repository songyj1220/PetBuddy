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
import Description from '../Description/Description';
import banner from "../images/banner.jpg";
import {Nav, Image, Button, InputGroup, FormControl} from 'react-bootstrap';

const App = () => {
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [pets, setPets] = useState([]);
  
 

  const getPetList = (petType, location) => 
  {
    PetFinder.searchPet(petType, location).then((animals) =>
    {
      setPets(animals);
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
        {/* <div className="navigation">
          <Nav>
            <Nav.Item>
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
          </Nav>
        </div> */}
        <div className="banner-container">
          <Image className="banner" src={banner} alt="banner" fluid/>
        </div>
        <div className="search-container">
          <InputGroup className="searchBar">
            <FormControl
              placeholder="Enter Zipcode (ex: 57018)"
              aria-label="Recipient's username with two button addons"
              onChange={handleChange}
            />
            <Link to="/petList">
            <Button variant="outline-secondary" onClick={() => {setType("dog"); search("dog");}}> Dogs </Button>
            <Button variant="outline-secondary" onClick={() => {setType("cat"); search("cat");}}>Cats</Button>
            <Button variant="outline-secondary" onClick={() => {setType("rabbit"); search("rabbit");}}>Rabbits</Button>
            {/* <Button variant="outline-secondary">Other</Button> */}
            </Link>
          </InputGroup>
        </div>

        {/* <div className = "petId">
          <PetList pets={pets} />    
        </div> */}

        <Switch>
          <Route exact path="/">
          </Route>
          <Route path="/petList">
          <PetList pets={pets} />    
          </Route>
          <Route path="/description" component={Description}>
          </Route>
        </Switch>

      </div>
      </Router>
    );
};

export default App;