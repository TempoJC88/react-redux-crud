import Create from '../../views/Pets/Create'
import { connect } from 'react-redux';
import {createPet} from '../../../actions/';

const mapDispatchToProps = dispatch => {
    return {
      Save: (e)  => {
        dispatch( createPet(e))
       }
    }
}

const mapStateToProps = ({ pets }) => ({ pets });

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(Create);