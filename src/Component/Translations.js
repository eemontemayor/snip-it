import React,{Component} from 'react';
import './Translations.css'
import TransItem from './TransItem'

class Translations extends Component{

handleSeeMoreClick=()=>{
    const strArr = this.props.string.split(' ')
    console.log(strArr)
     fetch(`api.datamuse.com/words?v=es&ml=${this.props.string}`)
    //  fetch(`api.datamuse.com/words?ml=trumpet`)
     .then(res=>{
         console.log(res)
     })
}

  render(){
      console.log(this.props.results)

      const resultItems = this.props.results.map((item,index)=>{
          return <TransItem translation={item.translation} key={index} index={index}/> })
      return (
          <ul className='result-list'>{resultItems}</ul>
      )
  }
}
export default Translations