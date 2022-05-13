import React from 'react';
import axios from 'axios';


export default class ListaCarros extends React.Component{
    state = {
        carros:[]
    }

    componentDidMount(){
        axios.get('https://GrossSlowRelationalmodel.lilianesoares.repl.co')
            .then(resp=>{
                const dadosCarros = resp.data
                this.setState({carros: dadosCarros})
            })

    }
    render(){
        return(
            <>
            <h2>Made by Liliane</h2>

            <div>
                {this.state.carros.map(
                    carro => <div key={carro.id}>{carro.marca} - {carro.modelo}</div>
                )}
            </div>
            </>
        )
    }
}