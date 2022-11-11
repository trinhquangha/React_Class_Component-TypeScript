import React from 'react';
import arrow from '../../../assets/images/arrow.png';
import Button from '../../common/button/button';
import { SignUpFormData } from '../../sign-up/sign-up-form/sign-up-form';
import CardItem from './card-item/card-item';
import styles from './card-main.module.scss';

interface CardMainProps {
	cardData: SignUpFormData;
};

class CardMain extends React.Component<CardMainProps, {}> {

	render() {
		return (
			<div className={styles['card']}>
				<div className={styles['card__content']}>
					<img src={arrow} alt="arrow" className={styles['card__arrow']} />
					<div className={styles['card__body']}>
						<h3 className={styles['card__subtitle']}>
							Your finances in your pocket
						</h3>
						<h1 className={styles['card__title']}>
							Get your personal Credit Card now
						</h1>
						<p className={styles['card__description']}>
							Rewards and benefits without the downmobiles of a credit card.
							Simplicity and transparency built right in. Leave money issue with
							us and focus on your core business.
						</p>
						<Button level="normal">Learn more</Button>
					</div>
				</div>
				<div className={styles['card__image']}>
					<CardItem color="red" type="Universal Card" />
					<CardItem
						color="white"
						absolute
						hasHeader
						id={this.props.cardData?.numberId}
						name={this.props.cardData?.userName}
						expDate={this.props.cardData?.expDate}
					/>
				</div>
			</div>
		);
	}
}

export default CardMain;
