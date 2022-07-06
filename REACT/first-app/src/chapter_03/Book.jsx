import React from "react"

function Book(props){
    return(
        <div>
            <h1>{`book name is ${props.name}`}</h1>
            <h2>{`this book has ${props.numOfPage} pages`}</h2>
        </div>
    )
}

export default Book