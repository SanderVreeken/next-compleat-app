import { useState } from 'react'
import Styles from '../enums/styles'
import ButtonI from '../interfaces/Button'

export default function Button({ 
    backgroundColor = 'transparent', 
    borderColor = 'transparent', 
    color = 'black', 
    hoverBackgroundColor = backgroundColor,
    hoverBorderColor = borderColor,
    hoverColor = color,
    title, 
    type }: ButtonI) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{
            backgroundColor: isHovered ? hoverBackgroundColor : backgroundColor,
            borderColor: isHovered ? hoverBorderColor : borderColor,
            color: isHovered ? hoverColor : color,
            height: type === 'large' ? Styles.BUTTON_HEIGHT_LARGE : Styles.BUTTON_HEIGHT_SMALL,
            padding: type === 'large' ? Styles.BUTTON_PADDING_LARGE : Styles.BUTTON_PADDING_SMALL
        }}>
            <p style={{
                fontSize: type === 'large' ? Styles.BUTTON_FONT_SIZE_LARGE : Styles.BUTTON_FONT_SIZE_SMALL
            }}>
                {title}
            </p>
        </button>
    )
}