import React from 'react'

class PetsList extends React.Component {
    constructor(props) {
        super();
        this.state = {
            pets: JSON.stringify(props.pets)
        }
    }

    render() {

        return (
            <section>
            <h1>Listado de animales</h1>
            {this.state.pets}
            </section>
            
        );
    }
}

export default PetsList;