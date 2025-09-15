import React, { useState } from 'react'

const AskQuestion = () => {
    const [question,setQuestion]=useState('')
    const hanleForm=(e)=>{
    e.preventDefault();
    if(question==''){
        return ;
    }
    console.log(question)
    alert('question sended successfully')
    setQuestion(' ');

}
  return (
    
    <form onSubmit={hanleForm} className='flex flex-col gap-4 bg-black h-[200px] p-8 rounded-[12px] mt-24'>
        <input type='text' placeholder='Ask a question' onChange={(e)=>setQuestion(e.target.value)} className='p-2 w-full md:w-[600px] h-[60px] bg-[#1E1E1E] rounded-[10px]'></input>
        <button type='submit' className='bg-red-600 rounded-[10px] w-[170px] px-4 py-2'>Send a Question</button>
    </form>
  )
}

export default AskQuestion