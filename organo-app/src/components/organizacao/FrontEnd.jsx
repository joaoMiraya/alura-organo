

import { useEffect, useState } from "react";
import CardFront from "../cards/CardFront";




function FrontEnd() {

    const [nobody, setNobody] = useState(true);

    const user = JSON.parse(localStorage.getItem("frontend"))

    useEffect(() => {
        if (user) {
            setNobody(false)
        } else {
            return
        }

    }, [user])
    return (
        <div className="bg-[#E8F8FF] w-full min-h-[20rem] py-4">
            <div className='my-4 flex flex-col items-center justify-center'>
                <h1 className='text-2xl text-center'>FrontEnd</h1>
                <span className='h-[3px] block w-[40px] mt-2 bg-[#82CFFA]'> </span>
            </div>
            <div className={`flex pl-6 ${nobody ? '' : 'hidden'}`}>
                <p>Você ainda não possuí colaborador</p>
            </div>
            {nobody ? '' :    <CardFront />}   
        </div>
    )
}

export default FrontEnd;