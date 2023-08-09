import { useState } from "react";
import CriarCard from "../buttons/CriarCard";

function FormColab({ setProg, setFrontEnd, setDataS, setDevOps, setUx, setMobile, setInovacao }) {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const resetForm = () => {
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const qualTime = time;
        const values = {
            nome: nome,
            cargo: cargo,
            imagem: imagem,
        }
        const existingData = JSON.parse(localStorage.getItem(qualTime)) || [];
        const newData = [...existingData, values];
        localStorage.setItem(qualTime, JSON.stringify(newData));
        if (qualTime == "programacao") {
            setProg(newData)
        } if (qualTime == "frontend") {
            setFrontEnd(newData)
        } if (qualTime == "datascience") {
            setDataS(newData)
        } if (qualTime == "devops") {
            setDevOps(newData)
        } if (qualTime == "uxdesign") {
            setUx(newData)
        } if (qualTime == "mobile") {
            setMobile(newData)
        } if (qualTime == "inovacao") {
            setInovacao(newData)
        }
        resetForm()
    };

    return (
        <div className="flex justify-center items-center py-6">
            <div className="bg-[#F6F6F690] w-1/2 py-4 px-[6rem] rounded-2xl shadow-2xl">
                <h1 className="text-xl whitespace-nowrap ">Preencha os dados para criar o card do colaborador.</h1>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col ">
                        <label htmlFor="nome">Nome</label>
                        <input value={nome} onChange={(e) => setNome(e.target.value)} className="bg-white text-sm pl-4 h-[3rem] shadow-xl" placeholder="Digite seu nome" type="text" name="nome" id="nome" />

                        <label htmlFor="cargo">Cargo</label>
                        <input value={cargo} onChange={(e) => setCargo(e.target.value)} className="bg-white text-sm pl-4 h-[3rem] shadow-xl" placeholder="Digite seu cargo" type="text" name="cargo" id="cargo" />

                        <label htmlFor="imagem">Imagem</label>
                        <input value={imagem} onChange={(e) => setImagem(e.target.value)} className="bg-white text-sm pl-4 h-[3rem] shadow-xl" placeholder="Informe o endereço da sua imagem" type="text" name="imagem" id="imagem" />

                        <label htmlFor="time">Time</label>
                        <select value={time} onChange={(e) => setTime(e.target.value)} className="bg-white text-sm pl-4 h-[3rem] shadow-xl" name="time" id="time">
                            <option value=""></option>
                            <option value="programacao">Programação</option>
                            <option value="frontend">FrontEnd</option>
                            <option value="datascience">Data Science</option>
                            <option value="devops">Devops</option>
                            <option value="uxdesign">UX e Design</option>
                            <option value="mobile">Mobile</option>
                            <option value="inovacao">Inovação e Gestão</option>
                        </select>
                        <div className="my-4">
                            <CriarCard />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormColab;