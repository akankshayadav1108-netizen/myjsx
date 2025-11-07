function App() {
  const[count,setcount]=useState(10)
  const[name,setname]=useState("user")
  
  function changename(){
    setname("akanksha ")
  }
  

  function increment(){
  setcount(count+1)
  }
  function decrement(){
    setcount(count-1)
  }
  function inputhandler(e){
 
  setname(e.target.value)
  
 }
  var present=false;
  return (
    <div>
      {present?<>
      <h1 className='m-4'>count {count}</h1>
      <button onClick={increment} className='border rounded-xl px-4 py-0.5 ml-2 mr-2 bg-sky-800 text-white'>increment</button>
      <button onClick={decrement} className='border rounded-xl px-4 py-0.5 ml-2 mr-2 bg-green-400 text-white'>decrement</button>

      
      <h1 className='m-4'>hello {name}</h1>
      <input type="text" onChange={(e)=>{setname(e.target.value)}} className='border rounded-xl m-4' />
            <button onClick={changename} className='border rounded-xl px-4 py-0.5 ml-7 mr-2 bg-green-400 text-white'>changename</button>
    </>:<Signup/>}
    </div>
    
  )
}

export default App