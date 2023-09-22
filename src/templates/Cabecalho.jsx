import { Alert } from "react-bootstrap";
//Componente que deve receber um prooriedade conteúdo
//
export default function Cabecalho(props) {

    return (
        <header>
            <Alert variant="light" className={'text-center'}>
                {props.conteudo || "sistema"}
            </Alert>
        </header>
    );
}