import React from 'react';
import Button from '../../common/button/button';
import styles from './card-header.module.scss';
import CardLogo from './card-logo/card-logo';
import NavbarList from './navbar-list/navbar-list';

class CardHeader extends React.Component {
	render() {
		return (
			<div className={styles['header']}>
				<div className={styles['header__navbar']}>
					<CardLogo />
					<NavbarList />
				</div>

				<div className={styles['header__actions']}>
					<Button size="small" level="secondary">
						Get a Card
					</Button>
				</div>
			</div>
		);
	}
}

export default CardHeader;
