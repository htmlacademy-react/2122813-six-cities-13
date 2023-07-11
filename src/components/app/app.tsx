import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  adCount: number;
}

export default function App({adCount}: AppScreenProps): JSX.Element {
  return (
    <MainScreen adCount={adCount} />
  );
}
