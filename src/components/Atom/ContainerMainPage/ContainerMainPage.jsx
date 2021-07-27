import React from 'react'

import './containerMainPage.scss'

const ContainerMainPage = (props)=>{
    return (
        <main className="containerMainPage">
            {props.children}
        </main>
    )
}


export default ContainerMainPage