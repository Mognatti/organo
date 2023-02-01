import './Rodape.css'

export default function Rodape() {
    return(
        <footer className='rodape'>
            <section>
                <ul>
                    <li>
                        <a href='https://facebook.com' target='_blank' rel='noreferrer'>
                            <img src='imagens/fb.png' alt='' />    
                        </a>  
                    </li>

                    <li>
                        <a href='https://twitter.com' target='_blank' rel='noreferrer'>
                            <img src='/imagens/tw.png' alt=''/>
                        </a>
                    </li>

                    <li>
                        <a href='http://instagram.com' target='_blank' rel='noreferrer'>
                        <img src='imagens/ig.png' alt=''/>
                        </a>
                    </li>
                </ul>
            </section>
            
            <section>
                <img src='/imagens/logo.png' alt='logo organo' />
            </section>
            
            <section>
                <p>Desenvolvido por Caio Mognatti</p>
            </section>
        </footer>
    )

}