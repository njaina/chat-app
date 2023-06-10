import { useRouter } from 'next/router';
import Style from '../../styles/Primary.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComments, faEnvelope, faEdit } from '@fortawesome/free-solid-svg-icons';

interface SidebarProps {
  onEditClick: () => void;
}

export default function Sidebar({ onEditClick }: SidebarProps) {
  const router = useRouter();
  const currentPath = router.pathname;

  const handleProfileClick = () => {
    router.push('/profile');
  };

  const handleChannelClick = () => {
    router.push('/channel/create');
  };

  const handleMessageClick = () => {
    router.push('/message');
  };

  return (
    <main className={Style.sidebar}>
      <h2
        className={currentPath === '/profile' ? `${Style.active} ${Style.buttonPointer}` : `${Style.buttonPointer}`}
        onClick={handleProfileClick}
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
        onClick={handleChannelClick}
      >
        <FontAwesomeIcon icon={faComments} />
        Channel
      </h2>
      <h2
        className={currentPath.startsWith('/message/') ? `${Style.active} ${Style.buttonPointer}` : `${Style.buttonPointer}`}
        onClick={handleMessageClick}
      >
        <FontAwesomeIcon icon={faEnvelope} />
        Message
      </h2>
    </main>
  );
}
