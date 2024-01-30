import { useState } from "react"
import { Link } from "react-router-dom"

const Count = () => {
    const [arithmetic,setArithmetic] = useState(0)
    function addition(){
        setArithmetic(arithmetic + 1)
    }
    function subtraction(){
        setArithmetic(arithmetic - 1)
    }

    const [days,setDays] = useState(0)
    function addDay(){
        setDays(days + 1)
    }
    function subtractDay(){
        setDays(days - 1)
    }
  return (
    <div className="flex flex-col justify-center items-center gap-[2rem]">
          <div className="flex gap-[2rem]">
            <button onClick={addition} className="rounded-[2rem] h-[2rem] w-[5rem] bg-green-500">increase</button>
            <p>{arithmetic}</p>
            <button onClick={subtraction} className="rounded-[2rem] h-[2rem] w-[5rem] bg-red-500">decrease</button>

        </div>
        <div className="flex gap-[2rem]">
            <button onClick={addDay} className="rounded-[2rem] h-[2rem] w-[5rem] bg-green-500">+1 day</button>
            <p>{days} </p>
            <button onClick={subtractDay} className="rounded-[2rem] h-[2rem] w-[5rem] bg-red-500">-1 day</button>

        </div>        
        { days ==0 && "WHAT IS TODAY?" || days >=1 && `Today is Jan ${days} 2024` || days <=-1 && `${days} days from today was last year` }
         {/* <div>WHAT IS TODAY? {days}</div> */}
         
         <Link to="/">
          <button  className="font-bold rounded-[2rem] h-[4rem] w-[8rem] bg-green-500">BACK TO HOME</button>
      </Link>
    </div>
   
  )
}

export default Count