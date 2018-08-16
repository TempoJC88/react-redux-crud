import CreatePet from '../../views/Pets/CreatePet'
import { connect } from 'react-redux';
import {createPet} from '../../../actions/';

const mapDispatchToProps = dispatch => {
    return {
      Save: (e)  => {
        dispatch( createPet(e))
       }
    }
}

function mapStateToProps(state, ownProps){
    return{
        pets: state.pets
    };
}

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(CreatePet);