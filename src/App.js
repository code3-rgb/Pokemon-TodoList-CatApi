import './App.css'
import { Json } from './JSON/json';
import { Todo } from './Todo/Todo';
import { Search } from './SearchBar/search';
import {  BrowserRouter, Route, Routes } from "react-router-dom";
import { Invoice } from './Invoices/invoice';
import { Links } from './Links/Links';
import { Pokemon } from './Pokemon/PokemonState';
import { SearchState } from './SearchPokimon/searchState';
import { Upload } from './UploadProducts/upload';




function App() {



return (


      <BrowserRouter>
        <div className='App'>
        <Routes>
          <Route path='/' element={<Links />} />
          <Route path='/searchPokemon' element={<SearchState />} />
          <Route path='/pokemon' element={<Pokemon />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/json" element={<Json />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/invoice" element={<Invoice />} />
        </Routes>





        </div>
      </BrowserRouter>


);

}

export default App;
