import './Rodape.css'

export default function Rodape() {
    return(
        <footer className='rodape'>
            <section>
                <ul>
                    <li>
                        <a href='facebook.com' target='_blank'>
                            <img src='imagens/fb.png' alt='' />    
                        </a>  
                    </li>

                    <li>
                        <a href='twitter.com' target='_blank'>
                            <img src='/imagens/tw.png' alt=''/>
                        </a>
                    </li>

                    <li>
                        <a href='instagram.com' target='_blank'>
                        <img src='imagens/ig.png' alt=''/>
                        </a>
                    </li>
                </ul>
            </section>
            
            <section>
                <img src='/imagens/logo.png' alt='logo organo'/>
            </section>
            
            <section>
                <p>Desenvolvido pela sua mãe</p>
            </section>
        </footer>
    )

}