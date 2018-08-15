import React, {Component} from 'react'
import PropTypes from 'prop-types';
import PetItem from "./PetItem";

class PetsList extends Component {
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
                <ul className="collection">                
                    {pets.map((item) => 
                        <PetItem key={item.id} raza={item.raza} nombre={item.nombre} fechaNac={item.fechaNac} onDetailpet={(e) => this.onDetailpet(item.id, this)}></PetItem>
                    )}                
                </ul>
            </section>            
        );
    }
}

export default PetsList;