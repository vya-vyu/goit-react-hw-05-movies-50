import { useNavigate, useLocation } from 'react-router-dom';

const GoBack = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handlGoBack = () => {
    navigate(location.state);
  };
  return <button onClick={handlGoBack}>Go back</button>;
};

export default GoBack;
