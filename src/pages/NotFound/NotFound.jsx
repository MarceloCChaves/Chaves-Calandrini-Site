import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NotFoundImg from "../../assets/Error-404.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return(
    <>
      <Header/>
       <main className="flex justify-center bg-primary-light bg-opacity-50 min-h-screen">
         <div className="flex flex-col items-center">
           <img className="w-1/2" src={NotFoundImg} alt="Página não encontrada" />
           <h1 className="text-primary-dark text-center text-2xl font-bold mb-4">Página não encontrada!</h1>
           <p className="text-primary-dark text-center mb-4">Verifique se o endereço está correto ou explore outras opções no nosso site.</p>
           <Link to="/" className='bg-primary-dark text-white py-2 px-6 rounded'>Voltar a Home</Link>
         </div>
       </main>
      <Footer/>
    </>
  )
}

export default NotFound;