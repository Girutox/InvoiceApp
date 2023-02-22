import Logo from '..//atoms/logo';
import { ReactComponent as Moon } from '../../assets/icon-moon.svg';
import avatar from '../../assets/image-avatar.jpg';

import styles from './LeftSideBar.module.scss';

const LeftSideBar = () => {
    return (
        <div className={styles['app-leftside']}>
            <div className={styles['app-leftside-complexLogo']}>
                <div style={{ zIndex: '1' }}>
                    <Logo className="fill-white" />
                </div>
                <div className={styles['app-lefside-backdrop']}></div>
            </div>
            <div className={styles['app-leftside-maincontent']}>
                <Moon className="" />
            </div>
            <div className={styles['app-leftside-avatarContent']}>
                <div className={styles['app-leftside-avatar']} onClick={() => navigate('/designSystem')}>
                    <img src={avatar} width={40} height={40} alt="" />
                </div>
            </div>
        </div>
    );
}

export default LeftSideBar;