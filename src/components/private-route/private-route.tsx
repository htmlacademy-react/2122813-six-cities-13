import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/authorization-user-process/selectors';
import { store } from '../../store';
import { checkAuthAction } from '../../store/api-actions';

type PrivateRouteProps = {
  children: JSX.Element;
}

store.dispatch(checkAuthAction());

export default function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={ AppRoute.Login } />
  );
}
