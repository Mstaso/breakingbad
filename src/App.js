import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios' 
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharactarGrid'
import Search from './components/ui/Search'
import Pagination from './components/ui/Pagination'

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
    
  }, [query])
// query is now a dependancy and the useEffect fires off every time the query state is changed


// get current items
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

// Change Page
const paginate = (pageNumber) => setCurrentPage(pageNumber)
  return (
    <div className="container">
   <Header />
   <Search getQuery={(q) => setQuery(q)}/>
   <CharacterGrid isLoading={isLoading} items={currentItems}/>
   <Pagination itemsPerPage={itemsPerPage} totalItems={items.length} paginate={paginate}/>
    </div>
  );
}

export default App;
