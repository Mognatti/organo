import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto/CampoTexto';
import Lista from '../Lista';
import './formulario.css';

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('https://github.com/(seu_perfil).png')
    const [time, setTime] = useState(props.time[0])

    const aoSalvar = (evento) => 
        {
        evento.preventDefault()
        props.aoAddColab({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('https://github.com/(seu_perfil).png')
        setTime(props.time[0])
        }

    return(
        <>
            <section className='formulario'>
                <form onSubmit={aoSalvar}>
                    <h2>Preencha os dados para criar o card do colaborador</h2>
                    <CampoTexto obrigatorio={true} label='Nome' placeholder="Digite o seu nome" valor={nome} aoAlterado = {valor => setNome(valor)}/>
                    <CampoTexto obrigatorio={true} label='Cargo' placeholder="Digite o seu cargo" valor={cargo} aoAlterado = {valor => setCargo(valor)}/>
                    <CampoTexto label='Imagem' placeholder="https://github.com/(seu_perfil).png" valor={imagem} aoAlterado = {valor => setImagem(valor)}/>
                    <Lista obrigatorio={true} label="Time" itens={props.time} valor={time} aoAlterado={valor => setTime(valor)}/>
                    <Botao> 
                        Criar card            
                    </Botao>
                </form> 
            </section>

            <section className='titulo'>
                <p>Minha Equipe:</p>
            </section>
         </>
    )
}

export default Formulario