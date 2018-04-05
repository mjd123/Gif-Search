import React, { Component } from 'react';
import {  Row, Col } from 'reactstrap';
import './Gifholder.css';

class Gifholder extends Component {
  
  render() {
    if (!this.props.data[0]) {
      return null;
    }
    console.log(this.props.data);
    return (
      <div className="Gifholder">
        <Row>
          {this.props.data[0].map( (item, index) =>
            <Col key={index}>
              <img src={item} key={index} alt="" download={item}/>
            </Col>
          )}
          </Row>
      </div>
    );
  }
}

export default Gifholder;
