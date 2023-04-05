import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import '../styles/Home.css'

export class Home extends Component {
    static displayName = Home.name;
    static renderProfile(User){
        return(
            <div className="App">
      <header className="App-header">
        <h1>Homepage</h1>
      </header>
      <Container fluid>
        <Row className="mt-4">
          <Col>
            <h2>Holds</h2>
            <hr />
            <div className="hold-list">
              <h4>Current Holds</h4>
              <ListGroup>
                <ListGroup.Item>Hold 1</ListGroup.Item>
                <ListGroup.Item>Hold 2</ListGroup.Item>
              </ListGroup>
            </div>
            <div className="todo-list">
              <h4>To-Do List</h4>
              <ListGroup>
                <ListGroup.Item>Task 1</ListGroup.Item>
                <ListGroup.Item>Task 2</ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
          <Col>
            <h2>User Information</h2>
            <hr />
            <div className="emergency-contact">
              <h4>Emergency Contact</h4>
              <p>Name: John Doe</p>
              <p>Phone: 123-456-7890</p>
            </div>
            <div className="home-address">
              <h4>Home Address</h4>
              <p>123 Main St.</p>
              <p>Anytown, USA 12345</p>
            </div>
            <div className="mailing-address">
              <h4>Mailing Address</h4>
              <p>PO Box 456</p>
              <p>Anytown, USA 12345</p>
            </div>
          </Col>
          <Col>
            <h2>Academics</h2>
            <hr />
            <Button className="see-schedule" href="#">See Schedule</Button>
            <Button className="see-transcript" href="#">See Transcript</Button>
          </Col>
        </Row>
      </Container>
    </div>
        // <td>
        //     <info_header>User Information</info_header>
        //     <hr></hr>
        //         <tr>
        //             <label for="Emergency Contact">Emergency Contact: </label>
        //         </tr>
        //         <br></br>
        //         <tr>
        //         <label for="Emergency Contact">Home Address: </label>
        //         </tr>
        //         <br></br>
        //         <tr>
        //         <label for="Emergency Contact">Mailing Address: </label>
        //         </tr>
        //         <br></br>
        // </td>
        )
    }
    static renderHolds(User){
        return(
            <td>
                <info_header>Holds</info_header>
                <hr></hr>
                <tr>
                    <label for="Holds">Holds: </label>
                    <label for="holdinfo">None</label>
                </tr>
                <br></br>
                <tr>
                    <label for="To Do">To Do: </label>
                    <label for="todoinfo">None</label>
                </tr>
                <br></br>
            </td>
        )
    }
    static renderAcademics(User){
        return(
            <td>
                <info_header>Academics</info_header>
                <hr></hr>
                <tr>
                    <label for="Schedule">See Schedule </label>
                </tr>
                <br></br>
                <tr>
                    <label for="transcript">See Transcript</label>
                </tr>
                <br></br>
            </td>
        )
    }
    render(){
        return(
            <div>{Home.renderProfile()}
            </div>
            
        )
    }
}