import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import {v4 as uuidv4} from 'uuid';
import {HiOutlineCalculator} from 'react-icons/hi'
import {GrAddCircle} from 'react-icons/gr';
import {AiFillDelete} from 'react-icons/ai'
import {FiEdit} from 'react-icons/fi';
import {BsCheckLg} from 'react-icons/bs';

const Main = () => {
  const ref = useRef();
  const [userInput, setUserInput] = useState('');
  const [edit, setEdit] = useState('');
  const [data, setData] = useState([]);
  //! la fonction qui recupère de la valeur saisie par le user 
  const handleChange=(e)=> {
    setUserInput(e.target.value);
    // console.log(userInput);
  }

  //! la fonction qui permet de soummetre ce qu'on a saisie
  const handleSubmit =(e)=> {
    e.preventDefault();
    if(userInput !== ''){
        const copy = [...data];
        const id = uuidv4();
        const name = userInput;
        copy.push({name, id});
        setData(copy);
        e.target.reset();
        setUserInput('');
    }
    // console.log(userInput);
  }

//! la fonction supprime

const handleDelete =({id})=> {
    const copy=[...data].filter((elm) => {
        // console.log(id, elm.id);
        return elm.id !== id;

    });
    setData(copy);
}

//! les fonction pour gérer l'edit: je me suis bloque sur ces fonction...
const onEdit=(e)=>{
}
const handleEdit =({id})=> {
  
}

  return (
    <section className='mt-10 mx-4 p-4 '>
        <div className=' py-4'>
            <h1 className='flex items-center gap-2 justify-center font-bold text-xl text-center' >
                Organize-APK <HiOutlineCalculator size={40} className='text-cyan-500' /> 
             </h1>
        </div>

        {/* le Champ de saisie */}
        <div className=' py-4 '>
            <h1 className='text-center font-bold text-xl font-poppins'>Ajouter une tache</h1>
            <div className=' p-4 flex justify-center items-center gap-5'>
              <form action="" className='flex justify-center items-center gap-5'
               onSubmit={handleSubmit}>
                <input type="text" className='border-2 border-gray-500 outline-none '
                    onChange={handleChange}
                />
                <button type='submit' > 
                    <GrAddCircle size={30} className='cursor-pointer hover:scale-90 ' />
                </button>
              </form>
            </div>
        </div>

        {/* Dispay userInput */}
        <div className=' p-4 flex justify-center'>
        <ul className='ml-[45px]'>
            {
                data.map(({id, name}) =>(
                    <li key={id} className='flex items-center gap-6 mt-2 '>
                        <input type="text" ref={ref} defaultValue={name} key={id} readOnly={true}
                         onChange={onEdit} 
                         className='border-2 border-gray-800 bg-[#bbb] outline-none 
                         text-center'
                        />
                        <div className='flex items-center '>
                          <button><AiFillDelete size={30} className=' hover:scale-90' 
                            onClick={()=> handleDelete({id})}
                            />
                          </button>
                          <button  ><FiEdit size={25} className='hover:scale-90' 
                            onClick={()=> handleEdit({id})} 
                          />
                          </button>
                          <button >
                            <BsCheckLg size={25} className='hover:scale-90' 
                            />
                          </button>
    
                        </div>
                    </li>
                ))
            }
        </ul>
        </div>
    </section>
  )
}

export default Main