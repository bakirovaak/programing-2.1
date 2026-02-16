import { useSelector } from "react-redux";

const Footer = () => {
    const theme = useSelector(state => state.ui.theme)


    return(
        <footer style={{
            padding: "20px",
            background: theme === 'light'? "white" : "black",
            color: theme === 'light'? "black" : "white",
            marginTop: "40px",

        }}>

        <p>Copyright &copy; 2024</p>

        </footer>

    )
}

export default Footer