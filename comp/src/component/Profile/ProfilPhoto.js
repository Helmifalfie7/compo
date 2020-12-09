import React from 'react'

function photo(props){
    return(
        <img class="avatar" src={props.imgSrc} alt={props.name}/>
    )
}
export default photo