

import { useEffect, useState } from "react";
import CardInova from "../cards/CardInova";





function Inovacao() {

    const [nobody, setNobody] = useState(true);

    const user = JSON.parse(localStorage.getItem("inovacao"))

    useEffect(() => {
        if (user) {
            setNobody(false)
        } else {
            return
        }

    }, [user])
    return (
        <div className="bg-[#FFEEDF] w-full min-h-[20rem] py-4">
            <div className='my-4 flex flex-col items-center justify-center'>
                <h1 className='text-2xl text-center'>Inivação e Gestão</h1>
                <span className='h-[3px] block w-[40px] mt-2 bg-[#FF8A29]'> </span>
            </div>
            <div className={`flex pl-6 ${nobody ? '' : 'hidden'}`}>
                <p>Você ainda não possuí colaborador</p>
            </div>
            {nobody ? '' :    <CardInova />}    
        </div>
    )
}

export default Inovacao;