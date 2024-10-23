import { useNavigate } from 'react-router-dom'
import './Home.css'
import Calabaza from './icons/Calabaza'
import Fantasma from './icons/Fantasma'

export default function Home() {
    const navigate = useNavigate()
  return (
    <div>
    <div className='mb-14 relative'>
    <h1 style={{
       fontFamily: "Creepster, system-ui",
       fontWeight: 700,
       fontStyle: "normal"
    }} className='text-red-600 text-center text-8xl max-sm:text-5xl relative
    '>Outfit de Halloween<span className='fantasma'><Fantasma/></span></h1>
    
    </div>
    <div className='flex h-full justify-center max-md:items-center gap-2 max-md:flex-col'>
        <div className='rounded-lg bg-black/45 w-full max-w-[400px] px-3 py-6 '>
            <h4 className='text-3xl font-medium text-red-400 pb-4'>Que es Outfit de Halloween?</h4>
            <p>Outfit es una aplicación web utiliza cloudinary y inteligencia artificial</p>
            <p>El usuario puede ingresar una imagen y aplicar un outfit de Halloween, y tiene la opción 
                de remover el fondo, outfit aplicara a sus imágenes outfit de terror que los asustara en Halloween</p>
        </div>
        <div className='rounded-lg bg-black w-full max-w-[400px] px-3 py-6 relative flex flex-col items-center justify-center'>
            <span className='absolute opacity-20 '><Calabaza 
            className={'fill-green-200 w-[250px] h-[250px]'}/></span>
            <h4 className='text-3xl font-medium text-fuchsia-500 pb-4'>Como utilizar Outfit de Halloween?</h4>
            <p>Subes la imagen que deseas aplicar el efecto, eliges el tipo de Outfit que mas te guste, 
                seleccionas la opción remplazar fondo de imagen, y presiones el botón cambiar imagen.</p>
            <p>Aveces la aplicación suele tener inconvenientes, si la imagen con outfit no carga presione el botón
                cambiar imagen consecutivamente hasta que el icono de imagen no encontrada desaparezca.  </p>
        </div>
    </div>
    <button onClick={() =>{
      navigate("/aplicacion")
    }}
     className='mt-4 flex gap-3 items-center mx-auto'>Probar Outfit
         <Calabaza className={"fill-orange-500 hover:drop-shadow-[0_0_11px_#66efffe0]"}/></button>
    </div>
  )
}
