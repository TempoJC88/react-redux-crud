import React, {Component} from 'react'

class Detail extends Component {
    constructor(props){
        super(props);
        
        this.state={
            pet:props.pets.pets.result.find( pet => pet.id === parseInt(props.match.params.id))
        }
    }

    getDateFormat(fecha){
        let date = new Date(fecha);
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        let dt = date.getDate();

        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }
        return year+'-' + month + '-'+dt;
    }

    render() {        
        const {raza, sexo, fechaNac, tamagno, observaciones, foto, nombre, especie, color, perdido, id, ficha} = this.state.pet;
        let dateFormat = this.getDateFormat(fechaNac);
        return (
            <section>                
                <div className="row">
                    <div className="col s12">
                        <div className="row">
                            <div className="col s4">                            
                                <img src={foto} alt={raza} />
                            </div>
                            <div className="input-field col s8">                            
                                <div className="input-field col s5"> 
                                    <div className="row">
                                        <label for={id+ficha+nombre}>Nombre:</label>
                                        <input disabled value={nombre} id={id+ficha+nombre} type="text" className="validate"/>
                                    </div>
                                </div>
                                <div className="input-field col s5 right">                            
                                    <div className="row">
                                        <label for={id+ficha+dateFormat}>Fecha nacimiento:</label>
                                        <input disabled value={dateFormat} id={id+ficha+dateFormat} type="text" className="validate"/>
                                    </div>
                                </div>
                                <div className="input-field col s5"> 
                                    <div className="row">
                                        <label for={id+ficha+raza}>Raza:</label>
                                        <input disabled value={raza} id={id+ficha+raza} type="text" className="validate"/>
                                    </div>
                                </div>
                                <div className="input-field col s5 right">                            
                                    <div className="row">
                                        <label for={id+ficha+especie}>Especia:</label>
                                        <input disabled value={especie} id={id+ficha+especie} type="text" className="validate"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s4"> 
                                <div className="row">
                                    <label for={id+ficha+sexo}>Sexo:</label>
                                    <input disabled value={sexo} id={id+ficha+sexo} type="text" className="validate"/>
                                </div>
                            </div>
                            <div className="input-field col s4"> 
                                <div className="row">
                                    <label for={id+ficha+tamagno}>Tamaño:</label>
                                    <input disabled value={tamagno} id={id+ficha+tamagno} type="text" className="validate"/>
                                </div>
                            </div>
                            <div className="input-field col s4"> 
                                <div className="row">
                                    <label for={id+ficha+color}>Color:</label>
                                    <input disabled value={color} id={id+ficha+color} type="text" className="validate"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">                                
                                <label htmlFor="textarea2">{observaciones}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>            
        );
    }
}

export default Detail;