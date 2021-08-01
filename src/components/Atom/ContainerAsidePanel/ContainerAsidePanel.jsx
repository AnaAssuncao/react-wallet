import React from 'react'

import './containerAsidePanel.scss'

const ContainerAsidePanel = (props)=>{
    return (
        <aside className="container-aside-panel">
            {props.children}
        </aside>
    )
}

export default ContainerAsidePanel