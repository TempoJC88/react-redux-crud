import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'

class CreatePet extends Component {
    constructor(props){
        super();

        console.log( props.pets.pets.result );
        this.state={
            pet:{
                raza: "",
                nombre: "",
                id: "",
                fechaNac:"" 
            },
            fireRedirect: false,
            errors: {}
        }
    }

    handleInput(event){
        let value = event.target.value;
        let nameInput = event.target.name;
        let pet = this.state.pet;
        pet[nameInput] = value;
        this.setState({pet});
    }

    Crear(){
        this.props.Save(this.state.pet); 
        this.setState({fireRedirect:true});
    }

    render() {        
        return (
            <section>                
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input placeholder="Raza" name="raza" type="text" className="validate" value={this.state.pet.raza} onChange={this.handleInput.bind(this)} />                                
                            </div>
                                <div className="input-field col s6">                                
                                <input placeholder="Nombre" name="nombre" type="text" className="validate" value={this.state.pet.nombre} onChange={this.handleInput.bind(this)} />                                
                            </div>                            
                        </div>        
                        
                        <input type="button" value='Crear' onClick={this.Crear.bind(this)} />                        
              
                        {this.state.fireRedirect && ( <Redirect to="/pets" /> )}
                    </form>
                </div>
            </section>            
        );
    }
}

export default CreatePet;