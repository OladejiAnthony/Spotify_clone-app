import React from 'react'
import './SidebarOption.css';

function SidebarOption({title, Icon}) {
    //passing title and icon as our props
    return (
        <div className='sidebarOption'>
            {Icon && <Icon className='sidebarOption__icon' />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SidebarOption;
