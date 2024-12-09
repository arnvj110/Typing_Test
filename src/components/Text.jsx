import React, { useEffect, useState } from 'react'

const Text = ({text,light}) => {
    const [textCount,setTextCount]=useState(0);
  const [error,setError]=useState(0);
  const [color,setColor]=useState([]);
  const [correct,setCorrect]=useState(0);
  const [startTime,setStart]=useState(0);
  const [endTime,setEnd]=useState(0);
  const [TotalTime,setTotalTime]=useState(0);
  useEffect(() => {
    if (startTime && endTime) {
      const timeInMinutes = ((endTime - startTime) / 1000) / 60; 
      setTotalTime(timeInMinutes);
    }
  }, [startTime, endTime]);
  
  return (
    <div className={`flex flex-col justify-center items-center p-4 m-auto ${light?"bg-white":"bg-gray-600"} max-w-[80%] mt-[100px] rounded-xl`}>
      <span className={`font-mono ${light?'':'bg-gray-700'} border border-blue-500 rounded-xl p-3 bg-bg1 text-3xl leading-10`}
      tabIndex={0}
      onKeyDown={(e)=>{
        if(!startTime) setStart(performance.now())
        if(textCount==text.length-1 && !endTime){
          setEnd(performance.now());
          
        }
        e.preventDefault();
        const allowedKeys = /^[a-zA-Z0-9,.!?;:()\-_"'\s]$/;
        
        if (!allowedKeys.test(e.key)) {
          e.preventDefault(); 
          
          
        }
        
        else if(textCount<text.length){
          if(e.key==text[textCount]){
            setCorrect(prev=>prev+1);
            setColor((prev)=>[...prev,'bg-green-300']);
          }
          else{
            setError(prev=>prev+1);
            setColor((prev)=>[...prev,'bg-red-300']);
          
          }
          setTextCount(prev=>prev+1);
        }
        
        
      }}
      >{[...text].map((e,i)=>{
        
        
        return <span className={`m-[2px] ${color[i]?color[i]:''} p-[0.5px] rounded ${light?'':'text-white'} `} key={i}>{e}</span>
          
      })}</span>
      <p className={`${light?'':'text-white'}`}>Correct - <span className='font-mono'>{correct}</span></p>
      <p className={`${light?'':'text-white'}`}>Incorrect - <span className='font-mono'>{error}</span></p>
      {textCount==text.length && <p className={`${light?'':'text-white'}`}>WPM - {(((correct/5)/(TotalTime)).toFixed(2))?((correct/5)/(TotalTime)).toFixed(2):'calculating...'}</p>}
      {textCount==text.length && <p className={`${light?'':'text-white'}`}>Accuracy - {((correct / (correct+error)) * 100).toFixed(2)}%</p>}
      {textCount==text.length && <p className={`${light?'':'text-white'}`}>Thanks for Playing!</p>}
      
    </div>
  )
}

export default Text
