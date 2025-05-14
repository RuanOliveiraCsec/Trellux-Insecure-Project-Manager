
import { Waypoints } from 'lucide-react';
import { AlignJustify } from 'lucide-react';

import "./css/MenuDaPagina.css"

function TopoDaPagina() {

    return (
        <>
            <header id="cabecalho">
                <div id="menu"> 
                    <div id="menu__logo">
                        <div id="menu__logo-foto"> <Waypoints size={40} color="white" fill="white"/> </div>
                        <div id="menu__logo-texto"><h1>Trellux</h1></div>
                    </div>
                    <div id="menu__botao">
                        <AlignJustify color="#172B4D"/>
                    </div>
                </div>
            </header>
        </>
    )

}



export default TopoDaPagina
