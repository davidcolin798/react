import "./listaOpciones.css"

const ListaOpciones=()=>{
    const equipos=[
        "programacion",
        "Font end",
        "Data Science",
        "Devops",
        "UX y Diseno",
        "Movil",
        "Inovacion y gestion"
    ]
    return <div className="lista-opciones">
        <label>Equipos
        </label>
        <select>
            { equipos.map((equipo,index)=> <option key={index}>{equipo}</option> ) }
        </select> 
    </div>
}
export default ListaOpciones;