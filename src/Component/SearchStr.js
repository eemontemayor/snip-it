import React from 'react';

function SearchStr(props){
    console.log(props , 'from SearchStr comp')

if(props.string === ''){
    return(
        <div>
            search for a snippet in spanish to see translation
        </div>
    )
}
    else{

    
    return(
        <div>
            {props.string}
        </div>
    )
    }
}
export default SearchStr