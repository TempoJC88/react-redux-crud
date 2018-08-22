import React, { Component } from 'react'

class ItemList extends Component {
    render() {
        const { onDetail, photo, firstName, breed } = this.props;
        return (
            <div className="col s12 m6 xl4">
                <div className="card medium">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src={photo} alt={breed} />
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">{firstName}<i className="material-icons grey-text text-lighten-4 right">grade</i></span>
                        <p>{breed}</p>
                    </div>
                    <div className="card-action">
                        <a onClick={onDetail.bind(this)}>Detalle</a>
                        <a>Eliminar</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemList;