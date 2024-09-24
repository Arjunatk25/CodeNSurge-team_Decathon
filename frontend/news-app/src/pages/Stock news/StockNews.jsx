import React, {useState,useEffect} from 'react'
import Card from '../../components/Card'

const StockNews = () => {

 
  
      const [search,setSearch] = useState("")
      const [newsData,setNewsData] = useState(null)
  
      const API_KEY ="449964ddf51846fcaf9d8f42dc672c12"
  
      const getData =  async ()=>{
          const response = await fetch(`https://newsapi.org/v2/everything?q="stock market"&apiKey=${API_KEY}`)
  
          const data =  await response.json()
          console.log(data.articles)
          setNewsData(data.articles)
      }
      
      useEffect(()=>{
          getData()
      },[])
  
  
      const handleInput = (e)=>{
          setSearch(e.target.value)
      }
  
      const userInput = (e)=>{
          setSearch(e.target.value)
      }
    return (
      <div>
          <nav>
              <h1>Trendy News</h1>
                  <ul>
                      <a>All News</a>
                      <a>Trending</a>
                  </ul>
              
              <div>
                  <input 
                  type="text"
                  placeholder="Search News"
                  value={search}
                  onChange={handleInput}
                  />
                  <button onClick={getData}>Search</button>
              </div>
          </nav>
  
  
          <div>
              <p className="head">Stay Update With Treanding News</p>
          </div>
  
          <div className="categoryBtn">
              <button onClick={userInput} value="sports">Sports</button>
              <button onClick={userInput} value="politics">Politics</button>
              <button onClick={userInput} value="entertainment">EnterTainment</button>
              <button onClick={userInput} value="health">Health</button>
              <button onClick={userInput} value="fitness">Fitness</button>
          </div>
  
          <div>
              {newsData ? <Card  data={newsData}/> : null}
          </div>
      </div>
    )
  }
  



export default StockNews