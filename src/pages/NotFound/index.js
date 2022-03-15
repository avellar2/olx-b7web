import { Link } from "react-router-dom"
import { NotFoundArea } from "./styles"

const Page = () => {
    return (
        <NotFoundArea>
            <h1>Página não encontrada</h1>
            <Link to='/'>
                Voltar pra Home
            </Link>
        </NotFoundArea>
    )
}

export default Page