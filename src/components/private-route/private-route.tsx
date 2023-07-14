import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

export default function PrivateRout({ authorizationStatus, children }: PrivateRouteProps): JSX.Element {
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
