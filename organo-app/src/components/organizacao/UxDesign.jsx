import { useEffect, useState } from "react";
import CardUx from "../cards/CardUx";




function UxDesign() {

    const [nobody, setNobody] = useState(true);

    const user = JSON.parse(localStorage.getItem("uxdesign"));

    useEffect(() => {
        if (user) {
            setNobody(false)
        } else {
            return
        }

    }, [user])
    return (
        <div className="bg-[#FAE9F5] w-full min-h-[20rem] py-4">
            <div className='my-4 flex flex-col items-center justify-center'>
                <h1 className='text-2xl text-center'>UX Design</h1>
                <span className='h-[3px] block w-[40px] mt-2 bg-[#DB6EBF]'> </span>
            </div>
            <div className={`flex pl-6 ${nobody ? '' : 'hidden'}`}>
                <p>Você ainda não possuí colaborador</p>
            </div>
            {nobody ? '' : <CardUx />}
        </div>
    )
}

export default UxDesign;