import React from 'react'

import './containerAsidePanel.scss'

const ContainerAsidePanel = (props)=>{
    return (
        <aside className="containerAsidePanel">
            {props.children}
        </aside>
    )
}

export default ContainerAsidePanel