import Card from '../Card'
import './Times.css'

const Times = (props) => {

    const css = {
        backgroundColor: props.corS,
    }

    return(
        props.colaboradores.length > 0 ? <section className='times' style={css}>
            
            <h3 style={{borderColor: props.corP}}> {props.nome} </h3>
            
            <div className='cards'>
            {props.colaboradores.map(colaborador => 
            <Card 
            corBg={props.corP}
            key={colaborador.nome} 
            nome={colaborador.nome} 
            cargo={colaborador.cargo}
            img={colaborador.imagem}
            ></Card>)}
            </div>
        </section>
        :''
    )

}

export default Times