import { AiOutlineRocket } from 'react-icons/ai'
import Admin from '../enums/admin'

import styles from '../styles/Logo.module.scss'

interface Props {
    type: 'long' | 'short'
}

export default function Logo({ type }: Props) {
    return (
        <span className={styles.logo}>
            <AiOutlineRocket />
            {/* TODO: Define the font, font-size and font-weight of the logo. */}
            {/* {type === 'long' && <h2>{Admin.NAME}</h2>} */}
        </span>
    )
}