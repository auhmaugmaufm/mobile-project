import {createContext} from 'react'


const themeContext = createContext({darkMode : false, setDarkMode : () => {}});


export default themeContext;