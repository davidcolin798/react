import "./formulario.css"
import CampoTexto from "../campo_texto";
import ListaOpciones from "../../listaOpciones";
import Boton from "../boton/boton";
const Formulario = () => {
    return<section className="formulario">
        <form>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre"placeholder="Ingresar nombre de usuario"/>
            <CampoTexto titulo="Puesto" placeholder="Ingresar puesto"/>
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de la foto personal"/>
            <ListaOpciones/>
            <Boton>Crear</Boton>
        </form>

    
    </section>
}
export default Formulario;