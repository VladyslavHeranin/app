import React from "react"
import "../index.css"


const Button = (props) => {

    const num = props.lodCount - (props.lodCount % 12) + 12

    const buttonActive = () => {
        return props.lodItems.length <= num
    }

    console.log("button", buttonActive())

    return <div className="button__block">
        {buttonActive() ? <button onClick={props.button} className="button">
            LODE MORE
             </button> : <div>All characters are loaded...</div>}

    </div>
}

export default Button;
