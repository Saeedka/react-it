import React from 'react'
import s from "./Preloader.module.css"


const Preloader=()=>{

    return(
        <div className={s.lds_dual_ring}></div>
    )
}

export default Preloader