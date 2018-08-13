import PetsList from '../../views/Pets/PetsList'
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
    return {
        pets: state.pets
    };
}

const connectedStateAndProps = connect(mapStateToProps);
export default connectedStateAndProps(PetsList);