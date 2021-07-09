import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import Input2 from './components/basicos/Input2'
import Button from './components/basicos/Button'
import Card from './components/layout/Card'

export default function Teste() {
    return (
        <div className="App">
            <Primeiro />
            <p>_________________________________________________________________</p>

            <div className='Cards'>
                <Card titulo="#01 - Input 1" color="#588C73">
                    <Input2 />
                </Card>

                <Card titulo="#02 - Contador/Botão" color="#3A9AD9">
                    <Button numeroInicial={0} />
                </Card>
            </div>
        </div>
    )
}