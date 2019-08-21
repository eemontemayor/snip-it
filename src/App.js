import React,{Component} from 'react';
import { Button, Input,Section } from './Utils/Utils';
import './App.css';
import Translations from './Component/Translations'
import TranslationServices from './services/TranslationServices'
import SearchStr from './Component/SearchStr';
class App extends Component {
  state={
    searchString:'',
    searchStr:'',
  
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
        let string= this.state.searchString
        TranslationServices.getTranslations(this.state.searchString)
        .then(res => {
          console.log('from App.js', res.body)
          this.setState({
            results:res.body.matches,
            searchString:'',
            searchStr:string
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
                value={this.state.searchString}
                onChange={this.handleChange}
                required>
              </Input>
              <div className='btn-holder'>
              <Button className='search-btn'type='submit' >Search</Button>
              </div>
          </form>
        </div>
        <Section >
          {this.state.results && <SearchStr className='search-str' string={this.state.searchStr}/>}
          {this.state.results && <Translations className='search-trans'results={this.state.results}string={this.state.searchStr}/> }
        </Section>
       
      </div>
      );
    }
}

export default App;
