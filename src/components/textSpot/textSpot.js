import "./textSpot.css"

const TextSpot = (props) => {
    const placeholderModificada = ``
    console.log(props)
    return( 
        <div className="text-spot">
            <label>{props.label}</label>
            <input placeholder={props.placeholder}/>
        </div>
    )
}

export default TextSpot