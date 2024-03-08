import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectComponent = ({ to }) => {
  let history = useNavigate();
  useEffect(() => {
    history.push(to);
  }, [to, history]);

  return null; // This component does not render anything
};
export default RedirectComponent;