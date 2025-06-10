import { useState } from "react"
import { FaRegSquarePlus, FaRegSquareMinus, FaTrash } from "react-icons/fa6"
const App = () => {
  let [count, setCount] = useState(0)


  return (
    <div className=" h-screen bg-black flex items-center justify-center">
      <div className=" h-60 w-50  bg-white shadow-2xl shadow-amber-500 rounded-lg border-r-4 border-amber-500 text-center items-center justify-center">
        <div className="text-7xl w-50 h1/2">{count} </div>
        <div className=" w-50 h1/2 flex justify-around pt-10 text-3xl">
          <FaRegSquarePlus onClick={() => setCount(count + 1)} />
          <FaRegSquareMinus onClick={()=> setCount(count ? count -1 : 0)}/>
          <FaTrash onClick={()=> setCount(0)}/>
        </div>
      </div>

    </div>
  )
}

export default App
