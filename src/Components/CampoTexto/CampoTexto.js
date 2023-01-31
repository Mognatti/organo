import './CampoTexto.css'

const CampoTexto = (props) => {

    const complementoPlaceholder = `${props.placeholder}...` 

    const armazenamentoDoInput = (evento) => {
        props.aoAlterado(evento.target.value)
        
   }

    return(
        <div className='campo-texto'>
            <label> {props.label} </label>
            <input 
            value={props.valor} 
            onChange={armazenamentoDoInput} 
            required={props.obrigatorio} 
            placeholder = {complementoPlaceholder}
            />
        </div>

    )

}

export default CampoTexto

