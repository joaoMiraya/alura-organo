


import { useEffect, useState } from "react";
import CardDevOps from "../cards/CardDevOps";




function DevOps() {

    const [nobody, setNobody] = useState(true);

    const user = JSON.parse(localStorage.getItem("devops"))

    useEffect(() => {
        if (user) {
            setNobody(false)
        } else {
            return
        }

    }, [user])
    return (
        <div className="bg-[#FDE7E8] w-full min-h-[20rem] py-4">
            <div className='my-4 flex flex-col items-center justify-center'>
                <h1 className='text-2xl text-center'>DevOps</h1>
                <span className='h-[3px] block w-[40px] mt-2 bg-[#E06B69]'> </span>
            </div>
            <div className={`flex pl-6 ${nobody ? '' : 'hidden'}`}>
                <p>Você ainda não possuí colaborador</p>
            </div>
          {nobody ? '' :    <CardDevOps />}   
        </div>
    )
}

export default DevOps;