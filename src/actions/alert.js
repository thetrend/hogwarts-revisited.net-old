import { alertalertTypes as alertType } from '../alertTypes';

export const alertActions = {
  success,
  error,
  clear
};

const success = (message) => {
  return {
    type: alertType.SUCCESS,
    message
  };
};

const error = (message) => {
  return {
    type: alertType.ERROR,
    message
  };
};

const clear = () => {
  return {
    type: alertType.CLEAR
  };
};