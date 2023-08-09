
import { useEffect, useState } from "react";

import CardData from "../cards/CardData";



function DataScience() {

    const [nobody, setNobody] = useState(true);

    const user = JSON.parse(localStorage.getItem("datascience"))

    useEffect(() => {
        if (user) {
            setNobody(false)
        } else {
            return
        }

    }, [user])
    return (
        <div className="bg-[#F0F8E2] w-full min-h-[20rem] py-4">
            <div className='my-4 flex flex-col items-center justify-center'>
                <h1 className='text-2xl text-center'>Data Science</h1>
                <span className='h-[3px] block w-[40px] mt-2 bg-[#A6D157]'> </span>
            </div>
            <div className={`flex pl-6 ${nobody ? '' : 'hidden'}`}>
                <p>Você ainda não possuí colaborador</p>
            </div>
            {nobody ? '' : <CardData />}
        </div>
    )
}

export default DataScience;