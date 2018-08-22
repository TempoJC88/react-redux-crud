import React, { Component } from 'react'

class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pet: props.pets.pets.result.find(pet => pet.id === parseInt(props.match.params.id))
        }
    }

    getDatehtmlFormat(fecha) {
        let date = new Date(fecha);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let dt = date.getDate();

        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }
        return year + '-' + month + '-' + dt;
    }

    render() {
        const { raza, sexo, fechaNac, tamagno, observaciones, foto, nombre, especie, color, perdido, id, ficha } = this.state.pet;
        let datehtmlFormat = this.getDatehtmlFormat(fechaNac);
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
                                <label htmlFor={id + ficha + nombre} className="orange-text text-lighten-2">Nombre:</label>
                                <input disabled value={nombre} id={id + ficha + nombre} type="text" className="validate" />
                            </div>
                        </div>
                        <div className="input-field col s4">
                            <div>
                                <label htmlFor={id + ficha + datehtmlFormat} className="orange-text text-lighten-2">Fecha nacimiento:</label>
                                <input disabled value={datehtmlFormat} id={id + ficha + datehtmlFormat} type="text" className="validate" />
                            </div>
                        </div>
                        <div className="input-field col s4">
                            <div>
                                <label htmlFor={id + ficha + raza} className="orange-text text-lighten-2">Raza:</label>
                                <input disabled value={raza} id={id + ficha + raza} type="text" className="validate" />
                            </div>
                        </div>
                        <div className="input-field col s4">
                            <div>
                                <label htmlFor={id + ficha + especie} className="orange-text text-lighten-2">Especia:</label>
                                <input disabled value={especie} id={id + ficha + especie} type="text" className="validate" />
                            </div>
                        </div>
                        <div className="input-field col s4">
                            <div>
                                <label htmlFor={id + ficha + sexo} className="orange-text text-lighten-2">Sexo:</label>
                                <input disabled value={sexo} id={id + ficha + sexo} type="text" className="validate" />
                            </div>
                        </div>
                        <div className="input-field col s4">
                            <div>
                                <label htmlFor={id + ficha + tamagno} className="orange-text text-lighten-2">Tamaño:</label>
                                <input disabled value={tamagno} id={id + ficha + tamagno} type="text" className="validate" />
                            </div>
                        </div>
                        <div className="input-field col s4">
                            <div>
                                <label htmlFor={id + ficha + color} className="orange-text text-lighten-2">Color:</label>
                                <input disabled value={color} id={id + ficha + color} type="text" className="validate" />
                            </div>
                        </div>
                        <div className="input-field col s12">
                            <div>
                                <label className="orange-text text-lighten-2">Observaciones:</label>
                                <textarea rows="5" max-rows="20" className="materialize-textarea" style={{ 'borderBottom': '0px' }} disabled>{observaciones}</textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Detail;