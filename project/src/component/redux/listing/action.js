import {ADD_ITEM, REMOVE_ITEM} from './actionType';

export const addItemToCart = data => ({
  type: ADD_ITEM,
  payload: data,
});
export const removeItemToCart = index => ({
  type: REMOVE_ITEM,
  payload: index,
});
