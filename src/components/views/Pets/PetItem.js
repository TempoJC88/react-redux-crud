import React from 'react'

class PetItem extends React.Component {
    getDateFormat(fecha){        
        return fecha;
    }

    render() {
        let dateFormat = this.getDateFormat(this.props.fechaNac);        
        return (
            <li className="collection-item avatar" onClick={this.props.onDetailpet.bind( this)}> 
                <i className="material-icons circle red">play_arrow</i>
                <span className="title">{this.props.nombre}</span>
                <p>{this.props.raza} <br/>
                 {dateFormat}
                </p>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
            </li>                  
        );
    }
}

export default PetItem;