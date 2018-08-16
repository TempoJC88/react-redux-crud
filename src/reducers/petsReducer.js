import {GETLIST_PETS, CREATE_PETS} from '../constants/PetsConstans';
import PetsService from '../api/PetsService'

//Inicializamos los estados por defecto
const initialState = {
    pets: PetsService.pets
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GETLIST_PETS:
            return state;
        case CREATE_PETS:        
            const { raza, nombre } = action.payload;
            const newPet = {
                id: Math.floor((Math.random() * 100) +1),
                fechaNac: new Date(),
                nombre: raza,
                raza: nombre,
            }
            
            const petsNew = [...state.pets.result, newPet];
            
            return {...state, pets:{result:petsNew}};            
        default:
            return state;
    }
}   

