import './stylesheet/index.css';
import Banner from "./components/partials/Banner";
import FormColab from './components/forms/FormColab';

import Programacao from './components/organizacao/Programacao';
import FrontEnd from './components/organizacao/FrontEnd';
import DataScience from './components/organizacao/DataScience';
import DevOps from './components/organizacao/DevOps';
import UxDesign from './components/organizacao/UxDesign';
import Mobile from './components/organizacao/Mobile';
import Inovacao from './components/organizacao/Inovacao';
import Footer from './components/partials/Footer';
import { useState } from 'react';

function App() {

  const [prog, setProg] = useState({});
  const [frontEnd, setFrontEnd] = useState({});
  const [dataS, setDataS] = useState({});
  const [devOps, setDevOps] = useState({});
  const [ux, setUx] = useState({});
  const [mobile, setMobile] = useState({});
  const [inovacao, setInovacao] = useState({});
 


  return (
    <div>
      <Banner />
      <div className='my-6'>
        <FormColab
          setProg={setProg}
          setFrontEnd={setFrontEnd}
          setDataS={setDataS}
          setDevOps={setDevOps}
          setUx={setUx}
          setMobile={setMobile}
          setInovacao={setInovacao}
        />
      </div>

      <div className='my-4 flex flex-col items-center justify-center'>
        <h1 className='text-2xl text-[#6278F7] text-center'>Minha Organização</h1>
        <span className='h-[3px] block w-[60px] mt-2 bg-[#6278F7]'> </span>
      </div>
      <Programacao prog={prog} />
      <FrontEnd frontEnd={frontEnd} />
      <DataScience dataS={dataS} />
      <DevOps devOps={devOps} />
      <UxDesign ux={ux} />
      <Mobile mobile={mobile} />
      <Inovacao inovacao={inovacao} />

      <Footer />
    </div>
  )
}

export default App
