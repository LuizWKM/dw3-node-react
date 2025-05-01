import {useState} from "react"
const Form = () => {
    // Estados
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // Função para evitar o compartamento padrão do formulário.
    const handleSubmit = (event) => {
        event.preventDefault()

        // Aqui iria o código para enviar os dados para o back-end (API)
        console.log(name, email)
    }

    return(
        <>
            <h1 style={{display: "flex", flexDirection: "column", alignItems: "center"}}>Formulário de cadastro:</h1>
            <br />
            <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <input 
                type="text" 
                placeholder="Digite seu nome"
                // Quando o valor do input mudar, pegue o novo valor e atualize o estado
                onChange={(e) => setName(e.target.value)}
                />
                <br />
                <input 
                type="email" 
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
                />
                <br /><br />
                <button type="submit">Cadastrar</button>
                <br /><br />
                {name}<br />
                {email}
            </form>
        </>
    )
}

export default Form;