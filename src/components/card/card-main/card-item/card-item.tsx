import moment from 'moment';
import React from 'react';
import signalIcon from '../../../../assets/images/icon-signal.png';
import styles from './card-item.module.scss';

interface CardItemProps {
	color: string;
	absolute?: boolean;
	hasHeader?: boolean;
	id?: string;
	name?: string;
	expDate?: string;
	type?: string;
}

class CardItem extends React.Component<CardItemProps, {}> {
	render() {
		return (
			<div
				className={`${styles['card-item']} ${
					styles[`card-item--${this.props.color}`]
				} ${styles[`card-item--${this.props.absolute ? 'absolute' : ''}`]}`}
			>
				{this.props.type && (
					<span className={styles['card-item__type']}>{this.props.type}</span>
				)}
				{this.props.hasHeader && (
					<div className={styles['card-item__header']}>
						<div className={styles['card-item__logo']}>finely</div>
						<img
							src={signalIcon}
							alt="Icon signal"
							className={styles['card-item__icon']}
						/>
					</div>
				)}

				{this.props.id && (
					<div className={styles['card-item__id']}>
						{this.props.id.replace(/\d{4}(?=.)/g, '$& ')}
					</div>
				)}

				{this.props.name && (
					<div className={styles['card-item__footer']}>
						<div
							className={`${styles['card-item__icon']} ${styles['card-item__icon--circle']}`}
						>
							<div
								className={`${styles['circle']} ${styles['circle--dark']}`}
							></div>
							<div
								className={`${styles['circle']} ${styles['circle--light']} ${styles['circle--absolute']}`}
							></div>
						</div>
						<div className={styles['card-item__info']}>
							<span className={styles['card-item__name']}>
								{this.props.name}
							</span>
							<span className={styles['card-item__exp-date']}>
								{moment(this.props.expDate).format('MM/YY')}
							</span>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default CardItem;
