import React,{Component} from 'react';
import { Button, Input, Textarea } from './Utils/Utils';
import './App.css';
import config from './config';
import Translations from './Component/Translations'
import TranslationServices from './services/TranslationServices'
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

  handleSubmit=(e)=>{
    e.preventDefault()
    TranslationServices.getTranslations(this.state.searchString)
    .then(res => console.log('from App.js', res))
  }
   
  render(){

    return (
      <div className="App">
      <header className="App-header">
      Snip It
      </header>
      <form onSubmit={this.handleSubmit}>
      <div className='search-box'>
              <label htmlFor='search'>
                Search
              </label>
              <Input
                type="text"
                name='searchString'
                onChange={this.handleChange}
                required
                >
              </Input>
              <Button type='submit' >

              </Button>
            </div>
            </form>
    </div>
  );
}
}

export default App;
