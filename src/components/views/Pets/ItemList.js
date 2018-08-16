import React, {Component} from 'react'

class ItemList extends Component {
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
        let dateFormat = this.getDateFormat(this.props.birthdate);
        return (
            <li className="collection-item avatar" onClick={this.props.onDetail.bind( this)}> 
                <img src={this.props.photo} alt="" class="circle" />
                <span className="title">{this.props.firstName}</span>
                <p>{this.props.breed} <br/> {dateFormat} </p>
                <a href="#!" className="secondary-content"><i className="material-icons grey-text text-lighten-4">grade</i></a>
            </li>                  
        );
    }
}

export default ItemList;