import React from 'react'

const NavBar = () => {

    

    return (
        <div >
        <nav className='bg--600 w-full object-contain '>
          <h1 className="text-3xl text-white hover:text-blue-500 font-bold font-mono ">Trendy News</h1>
          <div>
            <input
              className="px-4 py-2 rounded-md "
              type="text"
              placeholder="Search News"
              
            />
            <button className="mx-2 rounded-xl hover:text-white text-lg">Search</button>
          </div>
        </nav>

      </div>
    )
}

export default NavBar