import React,{Component} from 'react';
import { Button, Input, Textarea } from '../Utils/Utils';
import './App.css';

class App extends Component {
  state={
    searchString:''
  }
  handleChange = (e) => {
    this.setState({
    [e.target.name]:e.target.value
    },()=>{
        console.log(this.state)
    })

  }
  render(){

    return (
      <div className="App">
      <header className="App-header">
    
      </header>
      <div className='search-box'>
              <label htmlFor='search-string'>
                Search
              </label>
              <Input
                type="text"
                name='search-string'
                onChange={this.handleChange}
                required
                >
              </Input>
            </div>
    </div>
  );
}
}

export default App;
