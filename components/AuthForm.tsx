import Button from './Button'
import styles from '../styles/AuthForm.module.scss'
import Admin from '../enums/admin'
import Colors from '../enums/colors'
import { loginInputs, registerInputs } from '../elements/inputs'

interface Props {
    type: 'login' | 'register'
}

export default function AuthForm({ type }: Props) {
    const inputs = type === 'login' ? loginInputs : registerInputs
    const title = type === 'login' ? 'Login to' : 'Register for'

    return (
        <form className={styles.authForm}>
            {inputs.map(input => (
                <input name={input.name} placeholder={input.placeholder} type={input.type}></input>
            ))}
            <Button 
            backgroundColor={Colors.MAIN_HIGHLIGHT_COLOR}
            borderColor={Colors.MAIN_HIGHLIGHT_COLOR}
            color={Colors.WHITE}
            hoverBackgroundColor={Colors.WHITE}
            hoverColor={Colors.MAIN_HIGHLIGHT_COLOR}
            title={`${title} ${Admin.NAME}`} 
            type='large' 
            />
        </form>
    )
}