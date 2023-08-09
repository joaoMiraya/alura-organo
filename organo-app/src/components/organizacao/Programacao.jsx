import { useEffect, useState } from "react";
import CardProg from "../cards/CardProg";


function Programacao() {

    const [nobody, setNobody] = useState(true);

    const user = JSON.parse(localStorage.getItem("programacao"));

    useEffect(() => {
        if (user) {
            setNobody(false)
        } else {
            return
        }

    }, [user])


    return (
        <div className="bg-[#D9F7E9] w-full min-h-[20rem] py-4">
            <div className='my-4 flex flex-col items-center justify-center'>
                <h1 className='text-2xl text-center'>Programação</h1>
                <span className='h-[3px] block w-[40px] mt-2 bg-[#57C278]'> </span>
            </div>
            <div className={`flex pl-6 ${nobody ? '' : 'hidden'}`}>
                <p>Você ainda não possuí colaborador</p>
            </div>
            {nobody ? '' : <CardProg />}
        </div>
    )
}

export default Programacao;