import { useSelector } from "react-redux";

const Home = () => {
    const theme = useSelector(state => state.ui.theme)

    return(
        <main style={{
            padding:"20px",
            minHeight: "60px",
            background: theme === 'light' ? "white" : "black",
            color: theme === 'light' ? "black" : "white",

        }}>

            <h2>Главная страница</h2>
            <p>Добро пожаловать на главную страницу приложения!</p>
        </main>
    )
}

export default Home
