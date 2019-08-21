import React,{Component} from 'react';
import './Translations.css'


class Translations extends Component{

handleClick=()=>{
    const strArr = this.props.string.split(' ')
    console.log(strArr)
    //  fetch(`api.datamuse.com/words?v=es&ml=${this.props.string}`)
     fetch(`api.datamuse.com/words?ml=trumpet`)
     .then(res=>{
         console.log(res)
     })
}

  render(){
      console.log(this.props.results)

      const resultItem = this.props.results.map((item,index)=>{
          return <li className='trans-item' key={index}>{item.translation}<button onClick={this.handleClick}>see more</button></li> })
      return (
          <ul>{resultItem}</ul>
      )
  }
}
export default Translations