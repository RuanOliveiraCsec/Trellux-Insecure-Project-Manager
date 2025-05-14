
import { useState } from "react"

import { AlignEndHorizontal } from 'lucide-react';

import "./css/TopoDaPagina.css"

function TopoDaPagina() {

    return (
        <>
            <header>
                <div id="menu-topo"> 
                    <div id="logo"> <AlignEndHorizontal size={70} color="white"/> </div>
                    TrelluxInseguro
                </div>
            </header>
        </>
    )

}



export default TopoDaPagina
