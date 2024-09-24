import React from 'react'
import Banner from './Banner'

const NavBar = () => {


    

    return (
        <div >
        <nav className='bg--600 w-full object-contain '>
          <h1 className="text-3xl text-white hover:text-blue-500 font-bold font-mono ">Trendy News</h1>
          <div>
          <div class="flex items-center">
                    <input type="text" id="searchInput" placeholder="Search..." class="border border-gray-300 rounded-full px-4 py-2 mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150" onkeyup="filterNews()"
                     />
                    <a href="#" class="text-gray-600 hover:text-blue-500 px-4">Home</a>
                    <a href="#" class="text-gray-600 hover:text-blue-500 px-4">World</a>
                    <a href="#" class="text-gray-600 hover:text-blue-500 px-4">Technology</a>
                    <a href="#" class="text-gray-600 hover:text-blue-500 px-4">Sports</a>
                </div>
    
          </div>
        </nav>

        
        
        
       

      </div>
    )
}

export default NavBar

