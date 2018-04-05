import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Randomgifholder extends Component {

  render() {
    console.log(this.props.randomData);
    if (!this.props.randomData) {
      return null;
    }
    return (
      <div className="Randomgifholder">
        <Row>
          {this.props.randomData.map( (item, index) =>
              <Col key={index}>
                <img src={item} alt="" key={index}/>
              </Col>
          )}
          </Row>
        </div>
    );
  }
}

export default Randomgifholder;
