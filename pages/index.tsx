import Head from 'next/head'

import Anchor from '../components/Anchor'
import Button from '../components/Button'
import Header from '../components/Header'
import Logo from '../components/Logo'
import styles from '../styles/Home.module.scss'

import { headerAuthButtons } from '../elements/buttons'
import Links from '../enums/links'
import ButtonI from '../interfaces/Button'

export default function Home() {
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
        
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
