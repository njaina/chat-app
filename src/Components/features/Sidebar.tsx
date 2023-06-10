import { useRouter } from 'next/router';
import Style from '../../styles/Primary.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComments, faEnvelope, faEdit } from '@fortawesome/free-solid-svg-icons';


export default function Sidebar() {
    const router = useRouter();
    const currentPath = router.pathname;

    return (
      <main className={Style.sidebar}>
        <h2 className={currentPath === '/profile' ? Style.active : ''}>
          <FontAwesomeIcon icon={faUser} />
          Profile
          {currentPath === '/profile' && (
            <ul className={Style.subOptions}>
              <li>
                <FontAwesomeIcon icon={faEdit} />
                Éditer
              </li>
            </ul>
          )}
        </h2>
        <h2 className={currentPath === '/channel' ? Style.active : ''}>
          <FontAwesomeIcon icon={faComments} />
          Channel
        </h2>
        <h2 className={currentPath === '/message' ? Style.active : ''}>
          <FontAwesomeIcon icon={faEnvelope} />
          Message
        </h2>
      </main>
    );
  }
  