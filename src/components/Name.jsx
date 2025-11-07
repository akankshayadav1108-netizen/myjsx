
import React, { useState } from 'react'

function Name() {
    const [list, setlist] = useState(["Ram", "Syam", "Ravi", "Sita", "Gita"])
    const [name, setname] = useState();
    function handleset() {
        setlist((predata) => ([...predata, name]))
    }
    return (
        <div className='bg-amber-100 justify-center py-20 text-center border-2 m-20'>
            <input onChange={(e) => (setname(e.target.value))} className='border  mt-15 mb-5 px-10 py-3 rounded-2xl' />
            <button onClick={handleset} className='rounded-xl px-5 py-2 bg-green-500 text-white font-bold text-xl ml-10'>add</button>
            <ul>
                {
                    list.map((value) => { return (<li>{value}</li>) })
                }
            </ul>
        </div>
    )
}

export default Name;