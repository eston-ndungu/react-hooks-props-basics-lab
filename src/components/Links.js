import React from "react"

function Links(props){
    return(
        <>
        <h3>Links</h3>
        <a href="https://github.com/liza">{props.github}</a>
        <a href="https://www.linkedin.com/in/liza">{props.linkedin}</a>
        </>
        )
        }

export default Links