import Detail from '../../views/Pets/Detail'
import { connect } from 'react-redux';

const mapStateToProps = ({ pets }) => ({ pets });

const connectedStateAndProps = connect(mapStateToProps);

export default connectedStateAndProps(Detail);