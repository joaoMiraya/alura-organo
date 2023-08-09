import { useEffect, useState } from "react";
import CardMobile from "../cards/CardMobile";




function Mobile() {

    const [nobody, setNobody] = useState(true);

    const user =  JSON.parse(localStorage.getItem("mobile"))

    useEffect(() => {
        if (user) {
            setNobody(false)
        } else {
            return
        }

    }, [user])
    return (
        <div className="bg-[#FFF5D9] w-full min-h-[20rem] py-4">
            <div className='my-4 flex flex-col items-center justify-center'>
                <h1 className='text-2xl text-center'>Mobile</h1>
                <span className='h-[3px] block w-[40px] mt-2 bg-[#FFBA05]'> </span>
            </div>
            <div className={`flex pl-6 ${nobody ? '' : 'hidden'}`}>
                <p>Você ainda não possuí colaborador</p>
            </div>
            {nobody ? '' : <CardMobile />}  
        </div>
    )
}

export default Mobile;