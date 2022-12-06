import './Spinner.css';
import CovidVirusIcon from '~/assets/CovidVirusIcon';

type SpinnerProps = {
  fullScreen?: boolean;
};

export default function Spinner({fullScreen = false}: SpinnerProps) {
  return (
    <div className={fullScreen ? 'spinner spinner--full' : 'spinner'}>
      <CovidVirusIcon width={50} fill="rgb(255, 0, 0)" />
    </div>
  );
}
