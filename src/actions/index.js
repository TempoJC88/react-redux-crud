import {CREATE_PETS} from '../constants/PetsConstans';

export const createPet = (pet) => ({
    type: CREATE_PETS,
    payload: pet
});