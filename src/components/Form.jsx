import React from 'react'

function Signup() {
    return (
        // <div>
        //     <form action="">
        //         <table>
        //             <caption className='text-green-500'>Sign up</caption>
        //             <tr>
        //                 <td>
        //                     <label htmlFor="Name" className='ml-2'>Name : </label>
        //                 </td>
        //                 <td>
        //                     <input className='border rounded-xl px-2 m-2' type="text" name="name" id="Name" />
        //                 </td>
        //             </tr>
        //             <tr>
        //                 <td>
        //                     <label htmlFor="Email" className='ml-2'>Email : </label>
        //                 </td>
        //                 <td>
        //                     <input className='border rounded-xl px-2 m-2' type="email" name="Email" id="Email" />
        //                 </td>
        //             </tr>

        //             <tr>
        //                 <td>
        //                     <label htmlFor="Contact" className='ml-2'>contact no : </label>
        //                 </td>
        //                 <td>
        //                     <input className='border rounded-xl px-2 m-4' type="tel" name="Contact" id="Contact" />
        //                 </td>
        //             </tr>

        //             <tr>
        //                 <td>
        //                     <label htmlFor="Password" className='ml-2'>password : </label>
        //                 </td>
        //                 <td>
        //                     <input className='border rounded-xl px-2 m-4' type="password" name="Password" id="Password" />
        //                 </td>
        //             </tr>


        //             <tr>
        //                 <td></td>
        //                 <td>
        //                     <input className='border bg-sky-900 text-white px-2 rounded-xl' type="submit" value="submit" />
        //                 </td>
        //             </tr>
        //         </table>
        //     </form>
        // </div>
        <div className='h-60 w-80 bg-amber-100'>
            <h1>signup</h1>
            Name: <input type="text" className='border rounded'/>
            Email: <input type="text" className='border rounded' />
        </div>
    )
}

export default Signup
