import './Titulo.css'
export default function Titulo({title,open}) {
  return (
    <>
    {title == 'viernes 13' ? <div className={`transition-opacity ${open ? "opacity-100" : "opacity-0"} absolute bottom-0 left-5 w-[180px]  `}>
        <p className='viernes text-[30px]  text-start  '>FRIDAY THE 13TH</p>vs
        <p className='relative viernes2   text-start  '> ZOMBIES</p>
    </div> : ''}

    {title == 'freddy krueger' ? <div className={`transition-opacity ${open ? "opacity-100" : "opacity-0"} fredy-body py-5 absolute top-0 w-full  `}>
      <p className='fredy text-xl bg-black/80 max-w-max m-auto p-1  text-red-700 text-center'>-Lugar de pesadillas</p>
        <p className='fredy  w-36 text-5xl text-red-700 m-auto drop-shadow-lg 
         '>Freddy Krueger</p>
     
    </div> : ''}

    { title == 'dracula' ? <div className={`transition-opacity ${open ? "opacity-100" : "opacity-0"} text-red-600  py-5 absolute left-3 top-0 w-[100px] h-auto `}>
        <p className='dracula text-5xl  text-center drop-shadow-2xl'>Conde Dracula</p>
    </div> : ''}
    </>
    
  )
}
