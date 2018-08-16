import ListPets from '../../views/Pets/ListPets'
import { connect } from 'react-redux';

const mapStateToProps = ({ pets }) => ({ pets });

const connectedStateAndProps = connect(mapStateToProps);

export default connectedStateAndProps(ListPets);