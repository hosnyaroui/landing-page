import React from 'react'
import CategorieCard from './CategorieCard'
import {BsVectorPen,BsFiletypeHtml} from 'react-icons/bs'
import {FiCamera} from 'react-icons/fi'
import {FaBusinessTime,FaMoneyBillWave,FaMusic,FaChalkboardTeacher} from 'react-icons/fa'
import {GiMicrophone} from 'react-icons/gi'

const Categories = () => {
  return (
    <div className='w-full bg-[#F0FBF7] py-24'>
        <div className='md:max-w-[1480px] m-auto  max-w-[600px]  px-4 md:px-0'>
        <div className='flex flex-col justify-center'>
                
                <h1 className='md:leading-[72px] py-2  text-3xl font-bold'>Most<span className='text-[#20B486]'>Achievement</span>
                </h1>
                <p className='py-2 text-lg text-gray-600 font-poppins'>Various versions have evolved over the years, sometimes by accident.</p>
                <div className='grid lg:grid-cols-4 grid-cols-2 py-12 gap-4'>
<CategorieCard icons={<BsVectorPen 
size={30}/>}
    title={'Design'}
/>
<CategorieCard icons={<BsFiletypeHtml 
size={30}/>}
    title={'Development'}
/>
<CategorieCard icons={<FaBusinessTime 
size={30}/>}
    title={'Business'}
/>
<CategorieCard icons={<FiCamera 
size={30}/>}
    title={'Photography'}
/>
<CategorieCard icons={<FaMoneyBillWave 
size={30}/>}
    title={'Finance'}
/>
<CategorieCard icons={<GiMicrophone 
size={30}/>}
    title={'Marketing'}
/>
<CategorieCard icons={<FaMusic 
size={30}/>}
    title={'Music'}
/>
<CategorieCard icons={<FaChalkboardTeacher 
size={30}/>}
    title={'Teaching'}
/>
                </div>
        </div>


        </div>
        </div>
  )
}

export default Categories
