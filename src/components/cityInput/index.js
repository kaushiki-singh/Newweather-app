import React from 'react';
import {Form, Button, Container} from "react-bootstrap";

const CityInput = ({city, setCity, fetchCityWeather}) => {
    // const [city, setCity] = React.useState("");
    const [error, setError] = React.useState("");

    const handleInputChange=(event)=>{
        setCity(event.target.value);

    };

    const handleSubmit=()=>{
        //if city is empty
        if(!city){
            // alert("Field is empty");
           setError("City should not be empty");
        }
        //otherwise making an API call with setting the error as empty now
        else{
            setError("");
            fetchCityWeather();
            
          
        }
    }

    return (
        <Container>
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>City</Form.Label>
    <Form.Control
    value = {city}
     type="text"
     placeholder="Enter city"
     onChange={handleInputChange}
      />
      <p className="text-danger">{error}</p>
    
  </Form.Group>

  <Button variant="primary" onClick={handleSubmit} >
    Submit
  </Button>
</Form>
</Container>
    );
};

export default CityInput;