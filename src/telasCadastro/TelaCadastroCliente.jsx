import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadCliente from "./formularios/FormCadCliente";
import TabelaClientes from "./tabelas/TabelaClientes";
import { useState } from "react";

export default function TelaCadastroCliente(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [listaClientes, setListaClientes] = useState([]);
    const [clienteparaEdicao, setClienteParaEdicao] = useState({
        cpf: '',
        nome: '',
        endereco: '',
        bairro: '',
        numero: '',
        cidade: '',
        uf: 'AC',
        cep: ''
    });
    const [modoEdicao, setModoEdicao] = useState(false);
    /*
    function inserirCliente(novoCliente){
        setListaClientes([...listaClientes, novoCliente]);
    }
    */
    return (
        <Container>
            <Pagina>
                {
                    //Dinâmica em que o usuário irá alternar entre o formulario de cadastro e a visualização dos registros já cadastrados.
                    exibirFormulario ? <FormCadCliente listaClientes={listaClientes}
                        exibirFormulario={setExibirFormulario}
                        setListaClientes={setListaClientes}
                        clienteparaEdicao={clienteparaEdicao}
                        setClienteParaEdicao={setClienteParaEdicao}
                        modoEdicao={modoEdicao}
                        setModoEdicao={setModoEdicao}
                    />
                        :
                        <TabelaClientes listaClientes={listaClientes}
                            exibirFormulario={setExibirFormulario}
                            setListaClientes={setListaClientes}
                            clienteparaEdicao={clienteparaEdicao}
                            setClienteParaEdicao={setClienteParaEdicao}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                        />
                    /*
                        <FormCadCliente listaClientes={listaClientes} //minha resolução: inserirCliente={inserirCliente} setListaClientes = {setListaClientes}/> : <TabelaClientes listaClientes={listaClientes} setListaClientes = {setListaClientes}/>//setListaClientes precisa ser colocado, pois precisamos alterar o estado da lista
                    */
                }

            </Pagina>
        </Container>
    );
}