import React from 'react';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import {HiOutlineCalculator} from 'react-icons/hi'

import {AiFillDelete} from 'react-icons/ai'
import {FiEdit} from 'react-icons/fi';
import {BsCheckLg} from 'react-icons/bs';
import AddTodo from "./AddTodo"

const Main = () => {
  const [selectedId, setSelectedId] = useState(null)
  const [edit, setEdit] = useState("")
  const [data, setData] = useState([]);


  //! la fonction qui permet de soummetre ce qu'on a saisie
  const handleSubmit =(value)=> {
    if(value !== ''){
      setData(data => [...data, {
        id: uuidv4(),
        name: value
      }])
    }
  }

//! la fonction supprime

const handleDelete =({id})=> {
    const copy=[...data].filter((elm) => {
        return elm.id !== id;

    });
    setData(copy);
}

//! les fonction pour gérer l'edit: je me suis bloque sur ces fonction...
const onEdit=(e)=>{
  const {value} = e.target;
  setEdit(value)
}

const handleEdit =(id)=> {
  setSelectedId(id)
}

const onConfirm = () => {
  const findItemIndex = (item => item.id === selectedId)
  const itemIndex = data.findIndex(findItemIndex)
  const copyDataLeft = data.splice(0, itemIndex)
  const copyDataRight = data.splice(itemIndex+1)
  const newData = [...copyDataLeft,{id: selectedId, name: edit} ,...copyDataRight]
  setData([...newData])
  setSelectedId(null)

}



  return (
    <section className='mt-10 mx-4 p-4 '>
        <div className=' py-4'>
            <h1 className='flex items-center gap-2 justify-center font-bold text-xl text-center' >
                Organize-APK <HiOutlineCalculator size={40} className='text-cyan-500' /> 
             </h1>
        </div>

        <AddTodo handleSubmit={handleSubmit}/>

        {/* Dispay userInput */}
        <div className=' p-4 flex justify-center'>
        <ul className='ml-[45px]'>
            {
                data.map(({id, name}) =>(
                    <li key={id} className='flex items-center gap-6 mt-2 '>
                        <input type="text" defaultValue={name} key={id} readOnly={!(selectedId===id)}
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
                            onClick={()=> handleEdit(id)} 
                          />
                          </button>
                          <button onClick={()=> onConfirm(edit)}>
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