import './App.css'
import React from "react";

import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import ComFilhos from './components/basics/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basics/Repeticao';
import Condicional from './components/basics/Condicional';
import CondicionalComIf from './components/basics/CondicionalComIf';
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';

export default (props) => (
    <div className="App">
        <Card titulo='#08 - Comunicação Indireta'>
            <Super/>
        </Card>
        <Card titulo='#07 - Comunicação direta'>
            <Pai sobrenome='Freitas'></Pai>
        </Card>
        <Card titulo='#6 - Condicional versão 2'>
            <CondicionalComIf numero={12}/>
        </Card>
        <Card titulo='#5 - Condicional versão 1'>
            <Condicional numero={11}/>
        </Card>
        <Card titulo='#04 - Repetição'>
            <Repeticao/>
        </Card>
        <Card titulo='#03 - Componente com filhos'>
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo='#02 - Componente Com Parâmetro'>
            <ComParametro titulo='Esse é o título' 
            subtitulo='Esse é o subtítulo' />
        </Card>
        <Card titulo='#01 - Primeiro Componente'>
            <Primeiro/>
        </Card>
    </div>
)