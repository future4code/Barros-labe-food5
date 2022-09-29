import React from 'react'
import { useNavigate } from 'react-router-dom'
import {goToHome} from "../../routes/cordinator"



function Header () {
    const navigate = useNavigate()
//criando a lógica do botão
    const leave = ()=>{



    goToHome(navigate)    
    }


    return (
        <div>
            <h1>FutureEats</h1>
            <button onClick={leave}>Sair</button>
        </div>
    );
}


export default Header