

function CardMobile() {

    const users = JSON.parse(localStorage.getItem("mobile"))

    return (
        <div className=" flex ml-6 gap-6">
            {
                users.map((user, i) => {

                    return (
                        <div key={i} className="relative w-[260px] h-[270px] bg-white flex flex-col items-center justify-around rounded-lg" >
                            <div className="h-[4rem] w-full bg-[#FFBA05] absolute top-0 rounded-t-lg"></div>
                            <img className="w-[100px] h-[100px] rounded-full relative " src={user.imagem} alt={user.nome} />
                            <div>
                                <h2 className="text-xl font-semibold text-[#6278F7]">{user.nome}</h2>
                                <p>{user.cargo}</p>
                            </div>
                        </div >
                    )
                })
            }
        </div>
    )
}


export default CardMobile;