import Colors from '../enums/colors'
import Links from '../enums/links'
import ButtonI from '../interfaces/Button'

export const headerAuthButtons: ButtonI[] = [{
    color: Colors.COLOR_GRAY,
    hoverColor: Colors.BLACK,
    href: Links.LOGIN,
    title: 'Login',
    type: 'small',
}, {
    backgroundColor: Colors.BLACK,
    borderColor: Colors.BLACK,
    color: Colors.WHITE,
    hoverBackgroundColor: Colors.WHITE,
    hoverColor: Colors.BLACK,
    href: Links.REGISTER,
    title: 'Sign up',
    type: 'small',
}]