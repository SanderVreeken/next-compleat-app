import Head from 'next/head'

import Anchor from './Anchor'
import AuthForm from './AuthForm'
import Button from './Button'
import Header from './Header'
import Logo from './Logo'
import styles from '../styles/AuthPage.module.scss'

import { headerAuthButtons } from '../elements/buttons'
import Links from '../enums/links'
import ButtonI from '../interfaces/Button'

interface Props {
    type: 'login' | 'register'
}

export default function AuthPage({ type }: Props) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Compleat</title>
                <link rel="icon" href='/favicon.ico' />
            </Head>

            <main className={styles.main}>
                <Header>
                    <>
                    <span role='left'>
                        <Anchor href={Links.INDEX}>
                            <Logo type='long' />
                        </Anchor>
                    </span>
                    <span role='right'>
                        {headerAuthButtons.map((button: ButtonI) => (
                        <Anchor href={button.href!}>
                            <Button 
                            backgroundColor={button.backgroundColor}
                            borderColor={button.borderColor}
                            color={button.color}
                            hoverBackgroundColor={button.hoverBackgroundColor}
                            hoverColor={button.hoverColor}
                            title={button.title} 
                            type={button.type} 
                            />
                        </Anchor>
                        ))}
                    </span>
                    </>
                </Header>
                <div>
                    <AuthForm type={type} />
                </div>              
            </main>

            <footer className={styles.footer}>
            </footer>
        </div>
    )
}