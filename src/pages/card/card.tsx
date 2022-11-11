import React from 'react';
import CardHeader from '../../components/card/card-header/card-header';
import CardMain from '../../components/card/card-main/card-main';
import PartnerList from '../../components/card/partner-list/partner-list';
import { SignUpFormData } from '../../components/sign-up/sign-up-form/sign-up-form';
import styles from './card.module.scss';

interface CardPageProps {
	data: SignUpFormData;
}

class CardPage extends React.Component<CardPageProps, {}> {
	render() {
		return (
			<div className={styles['card-page']}>
				<div className={styles['card-page__container']}>
					<CardHeader />
					<CardMain cardData={this.props.data} />
					<PartnerList />
				</div>
			</div>
		);
	}
}

export default CardPage;
