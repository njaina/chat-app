import { useEffect } from 'react';

interface LogoutProps {
  onLogout: () => void;
}

const Logout: React.FC<LogoutProps> = ({ onLogout }) => {
  useEffect(() => {

    onLogout();
  }, [onLogout]);

  const handleLogout = () => {
    onLogout();
  };

  return (
    <button className="logoutButton" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
