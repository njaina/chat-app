import { useRouter } from 'next/router';
import Style from '../../styles/Primary.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComments, faEnvelope, faEdit } from '@fortawesome/free-solid-svg-icons';
import Logout from '../logout/LogOut';

interface SidebarProps {
  onEditClick: () => void;
}

export default function Sidebar({ onEditClick }: SidebarProps) {
  const router = useRouter();
  const currentPath = router.pathname;

  const handleClick = (path) => {
    router.push(path);
  };

  return (
    <main className={Style.sidebar}>
      <h2
        className={currentPath === '/profile' ? `${Style.active} ${Style.buttonPointer}` : `${Style.buttonPointer}`}
        onClick={()=>handleClick('/profile')}
      >
        <FontAwesomeIcon icon={faUser} />
        Profile
        {currentPath === '/profile' && (
          <ul className={Style.subOptions}>
            <li onClick={onEditClick} className={Style.buttonPointer}>
              <FontAwesomeIcon icon={faEdit} />
              Éditer
            </li>
          </ul>
        )}
      </h2>
      <h2
        className={currentPath.startsWith('/channel/') ? `${Style.active} ${Style.buttonPointer}` : `${Style.buttonPointer}`}
        onClick={()=>handleClick('/channel/create')}
      >
        <FontAwesomeIcon icon={faComments} />
        Channel
      </h2>
      <h2
        className={currentPath.startsWith('/message/') ? `${Style.active} ${Style.buttonPointer}` : `${Style.buttonPointer}`}
        onClick={()=>handleClick('/message')}
      >
        <FontAwesomeIcon icon={faEnvelope} />
        Message
      </h2>
      <Logout onLogout={()=>handleClick('/login')} />
    </main>
  );
}
