import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ItemList from "./ItemList";

class ListPets extends Component {
    constructor(props) {
        super();
        
        this.state = {
            pets: props.pets.pets.result
        }

        this.onDetailpet = this.onDetailpet.bind(this);
    }       

    onDetailpet(id, event){
        console.log(event);
        console.log(id);
        console.log(this.context.router);
        //this.context.router.history.push("/")
    }   

    static contextTypes={
        router: PropTypes.object
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

export default ListPets;