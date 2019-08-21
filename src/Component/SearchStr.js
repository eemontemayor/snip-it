import React from 'react';
import './SearchStr.css'
function SearchStr(props){
    console.log(props , 'from SearchStr comp')

if(props.string === ''){
    return(
    <div className='container'>
    <div className='text'>
    search for a snippet in spanish to see translation
        </div>
  </div>
        
    )
}
    else{

    
    return(
        <div className='container'>
          <div className='text'>
          Translations for: <br/>
          {props.string}
              </div>
        </div>
    )
    }
}
export default SearchStr