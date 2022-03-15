/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
    ErrorMensage,
    PageContainer,
    PageTitle,
} from "../../components/MainComponents";
import { doLogin } from "../../helpers/AuthHandler";
import OlxAPI from "../../helpers/OlxAPI";
import { PageArea } from "./styles";

export default function Page() {
    const api = OlxAPI();

    const [name, setName] = useState("");
    const [stateLoc, setStateLoc] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [stateList, setStateList] = useState([]);
    const [email, setEmail] = useState('')

    useEffect(() => {
        async function getStates() {
            const slist = await api.getStates();
            setStateList(slist);
        }
        getStates();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        setDisabled(true);
        setError('')

        if (password !== confirmPassword) {
            setError('Senhas não são iguais')
            setDisabled(false)
            return
        }

        const json = await api.register(name, password, stateLoc, email)

        if (json.error) {
            setError(json.error)
        } else {
            doLogin(json.token)
            window.location.href = '/'
        }

        setDisabled(false);
    }

    return (
        <PageContainer>
            <PageTitle>Cadastro</PageTitle>
            <PageArea>
                {error && <ErrorMensage>{error}</ErrorMensage>}
                <form onSubmit={handleSubmit}>
                    <label htmlFor="" className="area">
                        <div className="area--title">Nome completo</div>
                        <div className="area--input">
                            <input
                                type="text"
                                disabled={disabled}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label htmlFor="" className="area">
                        <div className="area--title">E-mail</div>
                        <div className="area--input">
                            <input
                                type="email"
                                disabled={disabled}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label htmlFor="" className="area">
                        <div className="area--title">Estado</div>
                        <div className="area--input">
                            <select
                                value={stateLoc}
                                onChange={(e) => setStateLoc(e.target.value)}
                                required
                            >
                                <option></option>
                                {stateList.map((i, k) => (
                                    <option key={k} value={i._id}>
                                        {i.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </label>
                    <label htmlFor="" className="area">
                        <div className="area--title">Senha</div>
                        <div className="area--input">
                            <input
                                type="password"
                                disabled={disabled}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label htmlFor="" className="area">
                        <div className="area--title">Confirmar senha</div>
                        <div className="area--input">
                            <input
                                type="password"
                                disabled={disabled}
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                required
                            />
                        </div>
                    </label>

                    <label htmlFor="" className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled}>Fazer cadastro</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    );
}
