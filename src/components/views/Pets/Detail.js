import React, {Component} from 'react'

class Detail extends Component {
    constructor(props){
        super();
        console.log( "Detail");        
        //this.context.router.history.push('/detailPet/'+id);
        //props.match.params.id

        this.state={
            pet:{
                raza: "",
                nombre: "",
                id: "",
                fechaNac:"" 
            }
        }
    }

    render() {        
        return (
            <section>                
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                            <i className="material-icons prefix">account_circle</i>                            
                            <label>First Name</label>
                            </div>
                            <div className="input-field col s6">
                            <i className="material-icons prefix">phone</i>                            
                            <label>Telephone</label>
                            </div>
                        </div>
                    </form>
                </div>
            </section>            
        );
    }
}

export default Detail;