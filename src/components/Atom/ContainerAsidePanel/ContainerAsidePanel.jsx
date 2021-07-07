import React from 'react'

import './containerAsidePanel.scss'

const ContainerAsidePanel = (props)=>{
    return (
        <div className="containerAsidePanel">
            {props.children}
        </div>
    )
}

export default ContainerAsidePanel