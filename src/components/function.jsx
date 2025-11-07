
 function App() {
   const [count,setcount]=useState(10)
   const [name,setname]=useState("user")


    var data = [{
     id: 1,
     title: "boAt Lunar Discovery",
     image: "https://via.placeholder.com/300x180",
     rating: "5.0",
     feature: "BT Calling",
     price: "₹1,099",
     oldPrice: "₹8,499",
     discount: "87% off",
     colors: 4
   },
   {
     id: 2,
     title: "NoiseFit Pulse 3",
     image: "https://via.placeholder.com/300x180",
     rating: "4.8",
     feature: "AMOLED Display",
     price: "₹1,499",
     oldPrice: "₹7,999",
discount: "81% off",
     colors: 3
  },
  {
    id: 3,
    title: "Fire-Boltt Visionary",
    image: "https://via.placeholder.com/300x180",
    rating: "4.9",
    feature: "BT Calling",
    price: "₹2,299",
    oldPrice: "₹9,999",
    discount: "77% off",
    colors: 5
  },
  {
    id: 4,
    title: "Pebble Cosmos Endure",
    image: "https://via.placeholder.com/300x180",
    rating: "4.7",
    feature: "1.46-inch AMOLED",
    price: "₹3,499",
    oldPrice: "₹12,999",
    discount: "73% off",
    colors: 2
  },
  {
     id: 5,
     title: "Fastrack Reflex Play",
     image: "https://via.placeholder.com/300x180",
    rating: "4.6",
    feature: "BT Calling",
   price: "₹2,999",
    oldPrice: "₹10,999",
     discount: "72% off",
     colors: 4
   }
 ];
function increment(){
  setcount(count+1)
  console.log(count)
}
function decrement(){
  setcount(count-1)
  console.log(count)
  
}
function changename(){
  setname("akanskha")
}
function inputhandler(e){
  // console.log(e.target.value)
  setname(e.target.value)
  
}
  return (
    <>
    <input type="text" className='border' onChange={(e)=>{inputhandler(e)}} />
    <h1>hello,{name}</h1>
     <div className='flex gap-4'>
      <h1>count {count}</h1>
      <button onClick={increment} className='border rounded bg-sky-600 px-4 py-1 text-white'>increment</button>
      <button onClick={decrement} className='border rounded bg-green-600 px-4 py-1 text-white'>decrement</button>
      <button onClick={changename} className='border rounded bg-green-600 px-4 py-1 text-white'>changename</button>
     </div>

        
    </>
  
  )
}

export default App;
