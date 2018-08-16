import List from '../../views/Pets/List'
import { connect } from 'react-redux';

const mapStateToProps = ({ pets }) => ({ pets });

const connectedStateAndProps = connect(mapStateToProps);

export default connectedStateAndProps(List);