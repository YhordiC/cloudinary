
import { Link, Outlet } from 'react-router-dom';
import BtnEnviar from './components/Btnrnviar';

const App = () => {

  return (
  <div className='w-full min-h-screen flex flex-col  items-center'>
    <header className='w-full h-[80px] flex'>
      <nav  className='mr-0  ml-auto my-auto w-full max-w-[600px] text-2xl'
       style={{
        fontFamily: "Covered By Your Grace",
        fontWeight: 700,
        fontStyle: "normal"
       }}>
        <ul className='  flex justify-evenly'>
          <li><Link className=' text-white' to={'/'}>HOME</Link></li>
          <li> <Link className=' text-white' to={'/aplicacion'}>APLICACIÓN</Link></li>
          <li ><a className='text-white' href="#contactos">CONTACTOS</a></li>
        </ul>
      </nav>
    
    </header>
    <main className='min-h-screen'>
    <Outlet></Outlet>
    </main>
  
  <footer className='bg-black py-3 w-full text-center'>
    <div>
      <h6 id='contactos'>Contactos</h6>
      <ul className='text-2xs flex gap-4 justify-center items-center'>
        <li>
          <a href='https://www.linkedin.com/in/yhordi-code/' target='_blank' className='hover:text-sky-400 '>LinkedIn</a>
        </li>
        <li>
          <a href='https://github.com/YhordiC' target='_blank' className='hover:text-white'>Github</a>
        </li>
        <li>
          <a  href='https://x.com/yhordidev' target='_blank' className='hover:text-white'>Twitter</a>
        </li>
        <li>
          <a href='https://www.youtube.com/@YhordiDev' target='_blank' className='hover:text-red-400'>YouTube</a>
        </li>
      </ul>
    </div>
    <p>&#169; 2024 <strong>Yhordidev</strong>. Todos los derechos reservados.</p>
  </footer>
  </div>);
};

export default App