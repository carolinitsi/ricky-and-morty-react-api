import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Personagens from './paginas/Personagens/Personagens';
import Personagem from './paginas/Personagem/Personagem';
import Episodios from './paginas/Episodios/Episodios';
import Home from './paginas/home/Home';

import Header from './components/Header/Header';
import Rodape from './components/Rodape/Rodape';

function MyRoutes() {
    
    return (
        <BrowserRouter> 
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>} exact />
                <Route path='/personagens' element={<Personagens/>} exact />
                <Route path='/episodios' element={<Episodios/>} exact />
                <Route path='/personagem/:id' element={<Personagem/>} exact />
            </Routes>
            <Rodape/>
        </BrowserRouter>
)}

export default MyRoutes;