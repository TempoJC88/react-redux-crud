import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Create extends Component {
    constructor(props) {
        super();

        console.log(props.pets.pets.result);
        this.state = {
            pet: {
                raza: "",
                nombre: "",
                id: "",
                fechaNac: ""
            },
            fireRedirect: false,
            errors: {}
        }
    }

    handleInput(event) {
        let value = event.target.value;
        let nameInput = event.target.name;
        let pet = this.state.pet;
        pet[nameInput] = value;
        this.setState({ pet });
    }

    Crear() {
        this.props.Save(this.state.pet);
        this.setState({ fireRedirect: true });
    }

    render() {
        return (
            <section>
                <div className="row">
                    <div className="col s12">
                        <div className="col s4">
                            <div>
                                <img src={foto} className="responsive-image" alt={raza} />
                            </div>
                        </div>
                        <div className="input-field col s4">
                            <div>
                                <label htmlFor='nombre' className="orange-text text-lighten-2">Nombre:</label>
                                <input value={nombre} id='nombre' type="text" className="validate" />
                            </div>
                        </div>
                        <div className="input-field col s4">
                            <div>
                                <label htmlFor='fechaNacimiento' className="orange-text text-lighten-2">Fecha nacimiento:</label>
                                <input value={datehtmlFormat} id='fechaNacimiento' type="text" className="validate" />
                            </div>
                        </div>
                        <div className="input-field col s4">
                            <div>
                                <label htmlFor='raza' className="orange-text text-lighten-2">Raza:</label>
                                <input value={raza} id='raza' type="text" className="validate" />
                            </div>
                        </div>
                        <div className="input-field col s4">
                            <div>
                                <label htmlFor='especie' className="orange-text text-lighten-2">Especia:</label>
                                <input value={especie} id='especie' type="text" className="validate" />
                            </div>
                        </div>
                        <div className="input-field col s4">
                            <div>
                                <label htmlFor={id + ficha + sexo} className="orange-text text-lighten-2">Sexo:</label>
                                <input value={sexo} id={id + ficha + sexo} type="text" className="validate" />
                            </div>
                        </div>
                        <div className="input-field col s4">
                            <div>
                                <label htmlFor={id + ficha + tamagno} className="orange-text text-lighten-2">Tamaño:</label>
                                <input value={tamagno} id={id + ficha + tamagno} type="text" className="validate" />
                            </div>
                        </div>
                        <div className="input-field col s4">
                            <div>
                                <label htmlFor={id + ficha + color} className="orange-text text-lighten-2">Color:</label>
                                <input value={color} id={id + ficha + color} type="text" className="validate" />
                            </div>
                        </div>
                        <div className="input-field col s12">
                            <div>
                                <label className="orange-text text-lighten-2">Observaciones:</label>
                                <textarea rows="5" max-rows="20" className="materialize-textarea" style={{ 'borderBottom': '0px' }} >{observaciones}</textarea>
                            </div>
                        </div>
                        <button className="btn waves-effect waves-light" type="submit" onClick={this.Crear.bind(this)} name="action">Crear
                            <i className="material-icons right">send</i>
                        </button>

                        {this.state.fireRedirect && (<Redirect to="/listPets" />)}
                    </div>
                </div>
            </section>
        );
    }
}

export default Create;