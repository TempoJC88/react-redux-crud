import {GETLIST_PETS} from '../constants/PetsConstans';
import PetsService from '../api/PetsService'

//Inicializamos los estados por defecto
const initialState = {
    pets: PetsService.pets
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GETLIST_PETS:
            return state;
        default:
            return state;
    }
}   