import Fundo from '/imagens/fundo.png';
import Logo from '/imagens/logo.png';
import Face from '/imagens/fb.png';
import Twiter from '/imagens/tw.png';
import Insta from '/imagens/ig.png';

function Footer() {
    return (
        <footer className="bg-[#6278F7] ">
            <div className='flex relative justify-center '>
                <div className=''>
                    <div className='flex items-center h-full gap-8'>
                        <img src={Face} alt="face" />
                        <img src={Insta} alt="insta" />
                        <img src={Twiter} alt="twiter" />
                    </div>
                </div>
                <img className='z-20 absolute top-1/2 left-1/2' src={Logo} alt="fundo" />
                <img className=' h-[16rem]' src={Fundo} alt="fundo" />
            </div>
        </footer>
    )
}

export default Footer;