import React from 'react';

function TransItem(props) {
    return (
        
        <li className='trans-item' key={props.index} index={props.index}>
            <p className='translation'>
            {props.translation}
            </p>
            <p className='example-sentence'>
                
            </p>
            <p className='example-sentence-trans'>

            </p>
        </li>
    )
}
export default TransItem