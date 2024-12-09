
import { useState } from 'react';
import './App.css'
import Text from './components/Text';


function App() {
  const [light,setLight]=useState(true);
  const text=`In a small, sleepy town tucked between the hills, the winter days were long, and the nights were even longer. It had always snowed every year without fail. Thick layers of snow would blanket the streets, the trees, the rooftops. But this year, something was different. Emma, a young girl with bright eyes and a mind full of wonder, woke up one cold morning to find no snow.`;
  
  
  return (
    <div className={`${light?'bg-bg1':'bg-gray-900'} w-full min-h-screen m-0 p-0  overflow-hidden`}>
      <div className={`mt-10 flex gap-2 border border-black justify-center  ${light?'bg-white':'text-white bg-gray-700'} w-fit m-auto p-3 rounded-xl`}>
        <span>Light</span>
        <div className={`${light?'bg-gray-300':'bg-gray-600 '} w-[50px] rounded-xl flex items-center p-1 cursor-pointer`}
        onClick={()=>setLight(prev=>!prev)}
        >
  <span className={`bg-blue-600 w-[20px] h-[20px] rounded-xl  ${light?'':'translate-x-6'} transition-all duration-300 ease-in-out scale-105 inline-block`}></span>
</div>

        <span>Dark</span>
      </div>
      <Text text={text} light={light} />
    </div>
  )
}

export default App
