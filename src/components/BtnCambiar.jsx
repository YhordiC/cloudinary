import { CloudinaryImage } from '@cloudinary/url-gen/index'
import  { useState } from 'react'
import { generativeReplace} from "@cloudinary/url-gen/actions/effect";
import { generativeBackgroundReplace } from "@cloudinary/url-gen/actions/effect";
import Titulo from './Titulo';
import LoadIcon from './icons/LoadIcon';

export default function BtnCambiar({config,setBtn,id_public}) {

  const miImagen = new CloudinaryImage(id_public, config,(error, result,status) =>{
   console.log(error,result,status);
  })

  const [valueEstilo, setValueEstilo] = useState('viernes 13')
  const [EstadoRemplasarFondo, setEstadoRemplasarFondo] = useState(false)
  const [errorLoad, setErrorLoad] = useState(false)
  const [loading, setLoading] = useState(false)
  const [open,setOpen] = useState(false)
  const  [urlimg, seturl] = useState(miImagen.toURL())

  console.log(miImagen)

 
  function handleOnClick(){
  
    console.log(miImagen.toURL())
    if(valueEstilo == 'viernes 13'){
      if(EstadoRemplasarFondo){
        miImagen.effect(
      //upscale(),
      generativeBackgroundReplace().prompt('A dark forest with a cabin  and zombies lurking both close and far ')
      
    )
      }
    
    miImagen.effect(
      generativeReplace()
      .from('face')
      .to('Jason Hockey Mask color white')
      .preserveGeometry()
      .detectMultiple()
    )
    miImagen.effect(
      generativeReplace()
      .from('T-shirt or shirt or sweatshirt')
      .to('leather jacket with pockets of halloween')
      .preserveGeometry()
      .detectMultiple()
    )
    .format('png') 
    }
       
    if(valueEstilo == 'freddy krueger'){
      
      if(EstadoRemplasarFondo){
        miImagen.effect( 
      //upscale(),
      generativeBackgroundReplace().prompt('Monsters of terror and creatures')
    )
      }
    
      
    miImagen.effect(
      generativeReplace()
      .from('hand')
      .to('Black leather glove')
      .preserveGeometry()
      .detectMultiple()
    )
    miImagen.effect(
      generativeReplace()
      .from('T-shirt or shirt or sweatshirt')
      .to('a long-sleeved sweater with horizontal stripes in red and dark green')
      .preserveGeometry()
      .detectMultiple()
    )
    .format('png') 
    }

    if(valueEstilo == 'dracula'){
      
      if(EstadoRemplasarFondo){
        miImagen.effect( 
        //upscale(),
        generativeBackgroundReplace().prompt("Dracula's room is decorated with dark walls and red or black tapestries featuring Gothic furniture like a four-poster bed and intricately carved tables In one corner there is an ancient coffin adding an air of mystery Dim chandeliers illuminate the room and there are large mirrors with ornate frames Heavy curtains block the light while unsettling paintings and ancient relics contribute to the atmosphere of terror")
      )
      }
      
      miImagen.effect(
        generativeReplace()
        .from('T-shirt or shirt or sweatshirt')
        .to('An elegant and dark suit He is commonly depicted wearing a black cape sometimes red on the inside a white shirt a dark vest and formal trousers')
        .detectMultiple()
      )
      .format('png') 
    }
    console.log('ok')
      setLoading(false)
      if(!errorLoad){
        seturl(miImagen.toURL())
      }
      
      
  }
  return (
    <>
         
       <div className='w-[100%] max-w-[400px] relative'
        style={{
          boxShadow: '0 0 10px black'
        }}>
         <img 
         onLoad={(event) => {
          console.log(event)
          setLoading(false)
          setErrorLoad(false)
          setOpen(true)
         }}
         
         
         onError={(event) =>{
          setLoading(false)
          console.log(event, 'error de carga')
          setErrorLoad(true)
         handleOnClick()
         }}
          id='img_cloud' src={urlimg} width={'100%'} height={'auto'}
          alt='mi imagen'/>
           <p className={`transition-opacity ${errorLoad ? "opacity-100" : "opacity-0"} w-[100%] max-w-[250px] absolute top-[50%] right-[20%] 
            py-1 px-4 text-red-500 font-medium bg-slate-900 flex
            items-center rounded-lg  m-auto`}><span className='mr-2 font-black bg-white  text-[13px] 
            rounded-full flex items-center justify-center w-10  '>¡</span>
            Error, por favor presione la imagen hasta que vuelva a cargar 
            </p> 
           
              <p className={`bg-black px-2 py-1 rounded-lg text-red-600 absolute left-[20%] top-[50%] flex gap-2 
              ${loading ? "transition-all opacity-100" : "transition-all opacity-0 scale-50"}`}
             >Cargando por <LoadIcon/> favor espere</p> 
        <Titulo title={valueEstilo} open={open}/>
        </div>
        <div className='flex flex-col gap-2'>
        <div className='flex gap-2 pl-2'>
          <label>Remplazar fondo de imagen</label>
          <input type='checkbox'  onChange={(e) => {
            setEstadoRemplasarFondo(e.target.checked)
          }}/>
        </div>
        
        <select name='estilos ' onChange={(e) => {
          setValueEstilo(e.target.value)
          setOpen(false)
        }} className='py-2 bg-purple-700 px-2 '>
          <option value={'viernes 13'} >Viernes 13</option>
          <option value={'freddy krueger'}>Freddy Krueger</option>
          <option value={'dracula'}>Dracula</option>
        </select>
        <button onClick={() => {handleOnClick(); 
         
          setOpen(false)
            setErrorLoad(false)
            setLoading(true)
          
          }}>Cambiar Imagen</button>
        </div>
    </>
  )
}
