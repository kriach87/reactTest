import React, { Component } from 'react'
import axios from 'axios';
import './App.css';

import List from "./components/List.js";


class App extends Component {
  constructor () {
    super();
    this.state = {responseData: []}  
  }

  componentWillMount(){
    axios.get('https://thewirecutter.com/wp-json/wp/v2/posts').then(response => {
      this.setState({responseData: response.data});
    });  
  }
  
  render () {
    return (
      <div>
        <List data={this.state.responseData}/>
      </div>
    )
  }
}
export default App
