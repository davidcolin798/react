import "./CampoTexto.css"
const CampoTexto =(props) =>{
    const PlaceholderMOdificado = `${props.placeholder}...`
    return<div className="campo-texto">
        <label>{props.titulo}</label>
        <input placeholder={PlaceholderMOdificado}/>
    </div>
}

export default CampoTexto;