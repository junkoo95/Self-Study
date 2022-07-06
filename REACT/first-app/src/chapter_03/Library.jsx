import React from "react"
import Book from "./Book"

function Library(props){
    return(
        <div>
            <Book name ="book1" numOfPage={100}/>
            <Book name ="book2" numOfPage={200}/>
            <Book name ="book3" numOfPage={300}/>
        </div>
    )
}

export default Library