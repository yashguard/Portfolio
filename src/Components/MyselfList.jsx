import React from 'react'
import Button2 from './Button2'

const MyselfList = () => {
    return (
        <div><ul>
            <li style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>Name : <span>Yash Guard</span></li>
            <li style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>Email : <span style={{ color: "#20c997" }}>yashguard2002@gmail.com</span></li>
            <li style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>Age : <span>20</span></li>
            <li><span>From :</span> India, Gujarat</li>
        </ul>
        <Button2/>
        </div>
    )
}

export default MyselfList
