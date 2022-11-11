import { Link } from 'react-router-dom';
import styles from './navbar-list.module.scss';

const NavbarList = () => {
	return (
		<nav className={styles['navbar']}>
			<ul className={styles['navbar__list']}>
				<li className={styles['navbar__item']}>
					<Link to="/card" className={styles['navbar__link']}>
						Features
					</Link>
				</li>
				<li className={styles['navbar__item']}>
					<Link to="/card" className={styles['navbar__link']}>
						About
					</Link>
				</li>
				<li className={styles['navbar__item']}>
					<Link to="/card" className={styles['navbar__link']}>
						Cards
					</Link>
				</li>
				<li className={styles['navbar__item']}>
					<Link to="/card" className={styles['navbar__link']}>
						FAQ
					</Link>
				</li>
				<li className={styles['navbar__item']}>
					<Link to="/card" className={styles['navbar__link']}>
						Contact us
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavbarList;
