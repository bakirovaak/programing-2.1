import {useDispatch} from "react-redux";
import { toggleTheme }  from "../features/counter/uiSlice";
import { useSelector } from "react-redux";


const Header = () => {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.ui.theme)


    return (

        <header style={ {
            padding: '20px',
            background: theme === 'light' ? "white" : "black",
            color: theme === 'light' ? "black" : "white",
        } }>


            <h1> Сайт </h1>
            <button onClick={() => dispatch (toggleTheme())}>
                Изменить тему </button>



            



        </header>
    )
}


export default Header