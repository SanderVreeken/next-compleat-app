import styles from '../styles/Header.module.scss'

interface Props {
    children: JSX.Element
}

export default function Header({ children }: Props) {
    return (
        <header className={styles.header}>
            {children}
        </header>
    )
}