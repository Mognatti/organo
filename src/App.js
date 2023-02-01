import { useEffect, useState } from 'react';
import Banner from './Components/Banner/Banner';
import Formulario from './Components/Formulario';
import Rodape from './Components/Rodape';
import Times from './Components/Times';

function App() {

  useEffect(() => {
    document.title = 'Organo'
  });

  const times = [ 
    {
    nome:'Programação',
    corP:'#57C278',
    corS:'#D9F7E9',
    },

    {nome:'Front-End',
    corP:'#82CFFA',
    corS:'#E8F8FF',
    },

    {nome:'Data Science',
    corP:'#A6D157',
    corS:'#F0F8E2',
   },

    {nome:'DevOps',
    corP:'#E06B69',
    corS:'#FDE7E8',
    },

    {nome:'UX desgin',
    corP:'#DB6EBF',
    corS:'#FAE9F5',
    },

    {nome:'Mobile',
    corP:'#FFBA05',
    corS:'#FFF5D9',
    },

    {nome:'Inovação e Gestão',
    corP:'#FF8A29',
    corS:'#FFEEDF',
    },
]
  const [colaboradores, setColaboradores] = useState([])

  const aoDefColab = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario time={times.map(i => i.nome)} aoAddColab={colaborador => aoDefColab(colaborador)}/>
      
      {times.map(time => 
      <Times 
      key={time.nome} 
      nome={time.nome} 
      corP={time.corP} 
      corS={time.corS}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
       <Rodape/>
    </div>
   
    
  );
}

export default App;
