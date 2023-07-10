import React from 'react'
import { Tooltip } from 'react-tooltip'

const ToolTip = (props) => {
    return (
        <div className='row justify-content-between align-items-center'>
            <a href="facebook.com">
                {props.facebook}
            </a>
            <a href="facebook.com">
                {props.linkedin}
            </a>
            <a href="facebook.com">
                {props.github}
            </a>
            <a href="facebook.com">
                {props.twitter}
            </a>
            <Tooltip anchorId="facebook" place="top" content="facebook" />
            <Tooltip anchorId="linkedIn" place="top" content="linkedin" />
            <Tooltip anchorId="git" place="top" content="github" />
            <Tooltip anchorId="twitter" place="top" content="twitter" />
        </div>
    )
}

export default ToolTip
