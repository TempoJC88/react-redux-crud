import React, {Component} from 'react'
import PropTypes from 'prop-types';
import ItemList from "./ItemList";

class List extends Component {
    constructor(props) {
        super();
        
        this.state = {
            pets: props.pets.pets.result
        }

        this.onDetail = this.onDetail.bind(this);
    }       

    static contextTypes={
        router: PropTypes.object
    }
    
    onDetail(id, event){                
        this.context.router.history.push('/detailPet/'+id);
    }   

    render() {
        let pets = this.state.pets;
        
        return (
            <section>                  
                 <div className="row">
                    {pets.map((item) => 
                        <ItemList 
                            key={item.id} 
                            photo={item.foto}
                            breed={item.raza} 
                            firstName={item.nombre} 
                            onDetail={(e) => this.onDetail(item.id, this)}>
                        </ItemList>
                    )}                
                </div>
            </section>            
        );
    }
}

export default List;