import { userConstants as userType } from '../constants';
import { userService } from '../services';
import { alertActions } from './';
import { history } from '../helpers';

export const userActions = {
  login,
  logout,
  getAll
};

const login = (email, password) => {
  const request = (user) => {
    return {
      type: userType.LOGIN_REQUEST,
      user
    }
  };

  const success = (user) => ({
    type: userType.LOGIN_SUCCESS,
    user
  });

  const failure = (error) => ({
    type: userType.LOGIN_FAILURE,
    error
  });

  return dispatch => {
    dispatch(request({ email }));

    userService.login(email, password)
      .then(
        (user) => {
          dispatch(success(user));
          history.push('/');
        },
        (error) => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        }
      )
  };
};

const logout = () => {
  userService.logout();
  return {
    type: userType.LOGOUT
  }
};

const getAll = () => {
  const request = () => ({
    type: userType.GETALL_REQUEST
  });
  const success = (users) => ({
    type: userType.GETALL_SUCCESS,
    users
  });
  const failure = (error) => ({
    type: userType.GETALL_FAILURE,
    error
  });
  return dispatch => {
    dispatch(request());

    userService.getAll()
      .then(
        users => dispatch(success(users)),
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        }
      );
  };
};