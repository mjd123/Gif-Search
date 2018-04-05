import React, { Component } from 'react';
import './Searchbar.css';
import Gifholder from '../Gifholder/Gifholder.js';
import Randomgifholder from '../Randomgifholder/Randomgifholder.js';
import { Button, Form, FormGroup, Label } from 'reactstrap';
import { Row, Col } from 'reactstrap';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      randomData: [],
    };

    this.searchInput = this.searchInput.bind(this);
    this.fetchRandomGif = this.fetchRandomGif.bind(this);
    this.fetchSearchGif = this.fetchSearchGif.bind(this);
  }

  fetchRandomGif() {
    this.state.data = []; //reset gifs on page
    fetch('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag')
     .then(res => res.json())
     .then(data => {
      console.log(data.data);
      let newData = [data.data.fixed_height_downsampled_url];
      this.setState({
        randomData: newData,
      });
    })
     .catch(err => {
      console.log('Error happened during fetching!', err);
    });
  }

  searchInput(e) {
    console.log(e.target.value);
    this.setState({value: e.target.value});
  }

  fetchSearchGif() {
    this.state.randomData = []; //reset gifs on page
    fetch('http://api.giphy.com/v1/gifs/search?q='+ this.state.value + '&api_key=dc6zaTOxFJmzC&tag')
     .then(res => res.json())
     .then(data => {
       console.log(data.data);
        let newData = [];
        for (var i = 0; i < data.data.length; i++) {
          newData.push(data.data[i].images.downsized_medium.url); //add urls to newData array before adding to state
        }
        this.setState({
          data: [newData]
        });
    })
     .catch(err => {
      console.log('Error happened during fetching!', err);
    });
  }

  render() {
    return (
      <div className="Searchbar">
        <Form>
          <FormGroup>
            <Label>
              Search:
                <input className="form-control"
                 type="text" placeholder="Search"
                 spellCheck="false"
                 required value={this.state.value}
                 onChange={this.searchInput}
                 />
            </Label>
          </FormGroup>
        </Form>
        <Row>
          <Col xs="6" sm={{ size: 'auto'}}>
            <Button outline color="primary" onClick={this.fetchSearchGif}>Search</Button>
          </Col>
          <Col xs="6" sm={{ size: 'auto'}}>
            <Button outline color="primary" onClick={this.fetchRandomGif}>Feeling Lucky</Button>
          </Col>
        </Row>
        <Gifholder data={this.state.data}/>
        <Randomgifholder randomData={this.state.randomData}/>
      </div>
    );
  }
}

export default Searchbar;
