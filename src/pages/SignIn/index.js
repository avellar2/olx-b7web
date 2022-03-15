import { useState } from "react";
import { ErrorMensage, PageContainer, PageTitle } from "../../components/MainComponents";
import { doLogin } from "../../helpers/AuthHandler";
import OlxAPI from "../../helpers/OlxAPI";
import {PageArea} from './styles'

export default function Page() {
    const api = OlxAPI()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberPassword, setRememberPassword] = useState(false)
    const [error, setError] = useState('')
    const [disabled, setDisabled] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        setDisabled(true)
        setError('')

        const json = await api.login(email, password)

        if (json.error) { 
            setError(json.error)    
        } else {
            doLogin(json.token, rememberPassword)
            window.location.href = '/'
        }

        setDisabled(false)
    }

    return (
        <PageContainer>
            <PageTitle>Login</PageTitle>
            <PageArea>
                {error && <ErrorMensage>{error}</ErrorMensage>}
                <form onSubmit={handleSubmit}>
                    <label htmlFor="" className="area">
                        <div className="area--title">E-mail</div>
                        <div className="area--input">
                            <input
                              type="email"
                              disabled={disabled}
                              value={email}
                              onChange={e => setEmail(e.target.value)}
                              required
                            />
                        </div>
                    </label>
                    <label htmlFor="" className="area">
                        <div className="area--title">Senha</div>
                        <div className="area--input">
                            <input
                              type="password"
                              disabled={disabled}
                              value={password}
                              onChange={e=> setPassword(e.target.value)}
                              required
                            />
                        </div>
                    </label>
                    <label htmlFor="" className="area">
                        <div className="area--title">Lembrar senha</div>
                        <div className="area--input">
                            <input
                              type="checkbox"
                              disabled={disabled}
                              checked={rememberPassword}
                              onChange={()=> setRememberPassword(!rememberPassword)}
                            />
                        </div>
                    </label>
                    <label htmlFor="" className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled}>Fazer login</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    )
}
