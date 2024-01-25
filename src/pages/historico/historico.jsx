import Navbar from "../../components/navbar/navbar.jsx";
import "./historico.css";
import {pedidos} from"../../dados.js";

function Historico(){

    const pedidos = [
        {id_pedido: 541561, dt:"14/01/2024", total: 150.30},
        {id_pedido: 841562, dt:"15/01/2024", total: 99},
        {id_pedido: 887453, dt:"18/01/2024", total: 119.90},
        {id_pedido: 985417, dt:"19/01/2024", total: 37.20},
        {id_pedido: 995411, dt:"19/01/2024", total: 49.90},
        {id_pedido: 985852, dt:"19/01/2024", total: 78.80},
        {id_pedido: 998524, dt:"19/01/2024", total: 50.00},
    ]
    return <>
        <Navbar showMenu={true}/>

        <div className="container">
            <div className="titulo text-center">
                <h1>Histórico de Pedidos</h1>
                
            </div>
            <div className="box-pedido">
                <table className="table">
                    {
                        pedidos.map( function(ped){
                            return <tr key={ped.id_pedido}>
                                <td> <strong>Pedido {ped.id_pedido}</strong></td>
                                <td className="text-light"> {ped.dt}</td>
                                <td className="text-red">{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: "BRL"}).format(ped.total)}</td>
                                </tr>
                        })
                   
                    }
                </table>
            </div>
        </div>


</>
}

export default Historico;