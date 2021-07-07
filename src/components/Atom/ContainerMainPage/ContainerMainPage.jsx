import React from 'react'

import './containerMainPage.scss'

const ContainerMainPage = (props)=>{
    return (
        <div className="containerMainPage">
            {props.children}
        </div>
    )
}


export default ContainerMainPage