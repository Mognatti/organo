import './Card.css'

const Card = (props) => {
    
    return( 
    <div className='card'>    
        <div className='cabecalho' style={{backgroundColor: props.corBg}}>
            <img src={props.img} alt={`Imagem não enviada de: ${props.nome}`} />
        </div>
        <div className='rodape'> 
            <h4>Nome: {props.nome}</h4>
            <h5>Cargo: {props.cargo}</h5>   
        </div>
    </div>
    
    )

}

export default Card