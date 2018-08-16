import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ItemList from "./ItemList";

class List extends Component {
    constructor(props) {
        super();
        
        this.state = {
            pets: props.pets.pets.result
        }

        this.onDetailpet = this.onDetailpet.bind(this);
    }       

    static contextTypes={
        router: PropTypes.object
    }
    
    onDetailpet(id, event){
        console.log(event);
        console.log(id);
        console.log(this.context.router);
        this.context.router.history.push("/detailPet")
    }   

    render() {
        let pets = this.state.pets;
        return (
            <section>                  
                <Link to='/createPet'>
                <button type="button">Crear</button>
                </Link>
                <ul className="collection">                
                    {pets.map((item) => 
                        <ItemList key={item.id} raza={item.raza} nombre={item.nombre} fechaNac={item.fechaNac} onDetailpet={(e) => this.onDetailpet(item.id, this)}></ItemList>
                    )}                
                </ul>
            </section>            
        );
    }
}

export default List;