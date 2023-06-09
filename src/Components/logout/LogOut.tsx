import { useEffect } from 'react';

interface LogoutProps {
  onLogout: () => void;
}

const Logout: React.FC<LogoutProps> = ({ onLogout }) => {
  useEffect(() => {
    // Effectuer les opérations de déconnexion ici
    // par exemple, supprimer le jeton d'authentification du local storage, etc.
    onLogout();
  }, [onLogout]);

  const handleLogout = () => {
    // Appeler la fonction de déconnexion lorsque le bouton est cliqué
    onLogout();
  };

  return (
    <button className="logoutButton" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
