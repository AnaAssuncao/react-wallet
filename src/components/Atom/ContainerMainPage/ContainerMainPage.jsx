import React from 'react'

import './containerMainPage.scss'

const ContainerMainPage = (props)=>{
    return (
        <main className="container-main-page">
            {props.children}
        </main>
    )
}


export default ContainerMainPage