import React from 'react';
import classes from './Button.scss';

const
    Button = ({onClicker=null, title, areLink }) => {
    return (
        <li className="nav-li">
            {
                areLink ?
                    <a  href={`#${title}`}>{title}</a>
                :
                    <button  onClick={onClicker}>{title}</button>

            }
        </li>
    )
}



export default Button;