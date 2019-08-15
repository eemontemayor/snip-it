import React,{Component} from 'react';
import { Button, Input } from './Utils/Utils';
import './App.css';
import Translations from './Component/Translations'
import TranslationServices from './services/TranslationServices'
class App extends Component {
  state={
    searchString:'',
    results:[]
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
    .then(res => {
      console.log('from App.js', res.body)
      this.setState({
        results:res.body.matches
      },()=>{
        console.log(this.state)
      })
      
  })
} 
  render(){

    return (
      <div className="App">
      <header className="App-header">
      Snip It
      </header>
      <div className='search-box'>
      <form onSubmit={this.handleSubmit}>
              <label htmlFor='search'>
                
              </label>
              <Input
                type="text"
                name='searchString'
                onChange={this.handleChange}
                required
                >
              </Input>
              <div className='btn-holder'>

              <Button className='search-btn'type='submit' >
                Search
              </Button>
              </div>
            </form>
            </div>
{    this.state.results  &&  <Translations results={this.state.results}/>}
    </div>
  );
}
}

export default App;
