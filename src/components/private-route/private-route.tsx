import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, AppRoute, SPINNER_COLOR } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/authorization-user-process/selectors';
import { store } from '../../store';
import { checkAuthAction } from '../../store/api-actions';
import { ClipLoader } from 'react-spinners';
import { CSSProperties } from 'react';

const override: CSSProperties = {
  display: 'block',
  margin: 'auto',
};

type PrivateRouteProps = {
  children: JSX.Element;
}

store.dispatch(checkAuthAction());

export default function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return (
      <ClipLoader
        color={ SPINNER_COLOR }
        cssOverride={ override }
        size={150}
        aria-label="Loading Spinner"
      />);
  }

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={ AppRoute.Login } />
  );
}
