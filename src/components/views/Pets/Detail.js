import React, {Component} from 'react'

class Detail extends Component {
    constructor(props){
        super();
        
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
        let dateFormat = this.getDateFormat(this.state.pet.fechaNac);
        return (
            <section>                
                <div className="row">
                    <div className="col s12">
                        <div className="row">
                            <div className="input-field col s6">                            
                                <label>{this.state.pet.Nombre}</label>
                            </div>
                            <div className="input-field col s6">                            
                                <label>{dateFormat}</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">                            
                                <label>{this.state.pet.raza}</label>
                            </div>
                            <div className="input-field col s6">                            
                                <label>{this.state.pet.sexo}</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s3">                            
                                <label>{this.state.pet.tamagno}</label>
                            </div>
                            <div className="input-field col s3">                            
                                <label>{this.state.pet.especie}</label>
                            </div>
                            <div className="input-field col s3">                            
                                <label>{this.state.pet.Color}</label>
                            </div>     
                        </div>                        
                       
                        <div className="row">
                            <div className="input-field col s12">                                
                                <label htmlFor="textarea2">{this.state.pet.observaciones}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>            
        );
    }
}

export default Detail;