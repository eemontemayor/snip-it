import React,{Component} from 'react';
import './Translations.css'


class Translations extends Component{
  render(){
      console.log(this.props.results)

      const resultItem = this.props.results.map((item,index)=>{
          return <li className='trans-item' key={index}>{item.translation}</li> })
      return (
          <div><h2>TRANSLATIONS</h2><ul>{resultItem}</ul></div>
      )
  }
}
export default Translations