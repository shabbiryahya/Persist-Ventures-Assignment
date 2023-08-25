import React,{useState,useEffect} from 'react'
import { AiOutlinePlus} from 'react-icons/ai';
import "./AddList.css";

const AddList = () => {
const [text,setText]=useState({
  note:"",
});
const [list,setList]=useState([]);
const [showSuggestion,setShowSuggestion]=useState(false);
const[suggesttedData,setSuggestedData]=useState([]);

useEffect(()=>{

 console.log(suggesttedData);
},[showSuggestion])


const onChange=(e)=>{

    setText(
      {...text,[e.target.name]: e.target.value}
    )

}

const addList=(e)=>{
    e.preventDefault();
    setList(prev=>[...prev,text]);
    console.log(list);
    setText({
      note:""
    })
  
}

const onchangeInput=(ind)=>{
  
const value=event.target.value;

  const updatedList=list.map((element,index)=>{

   return ind===index?{...element,note:value}:element;

  })
console.log(updatedList);
  setList([...updatedList]);
  if(updatedList[ind].note.includes("<>"))
  {
    setShowSuggestion(true);
    // console.log("Yes");
    // const data=
    
    
  }
  else
  {
    setShowSuggestion(false);
    // console.log("No");
  }
  
}
  return (
    <>
    <div className='flex justify-center items-center gap-2'>
    <input  
    className='placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 sm:text-sm ' 
      type="text"
      name="note"  
      placeholder='Enter a List...' 
      onChange={onChange}
      value={text.note}
     />
    <div className='flex bg-emerald-200 rounded-full py-2 pl-3 pr-3  justify-center items-center cursor-pointer' 
    onClick={addList} >
        <AiOutlinePlus size={18}/>
        <button  >Add</button>
    </div>
   </div>
 <div >
 {showSuggestion && (
          <ul className='m-auto'>
              {suggesttedData.map((suggestion, index) => (
               
               <li
                  key={index}
                  className="text-blue-900 cursor-pointer transition-colors duration-300 hover:text-blue-600"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
 </div>
   

   <div className="m-20 mx-auto max-w-screen-md ">
  <div className={`block max-w-md mx-auto p-10 rounded-md ${list.length>0&&`shadow-md`} overflow-y-auto max-h-60 custom-scrollbar`}>
   
    {

      list.map((element,index)=>{

      return (
      <div key={index+1}>
       <input  type="text" className="peer h-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" value={element.note} onChange={()=>{

        onchangeInput(index);
       }}/> 
       
       <br />

      </div>
      

       
      )


      })
    }
    
   

    
  </div>
</div>

    </>
    
  )
}

export default AddList