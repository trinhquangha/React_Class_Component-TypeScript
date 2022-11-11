import React from 'react';
import partner1 from '../../../assets/images/partner-1.svg';
import partner2 from '../../../assets/images/partner-2.svg';
import partner3 from '../../../assets/images/partner-3.svg';
import partner4 from '../../../assets/images/partner-4.svg';
import partner5 from '../../../assets/images/partner-5.svg';
import styles from './partner-list.module.scss';

type PartnerListProps = {};

type PartnerListState = {
	partnerList: string[];
};

class PartnerList extends React.Component<PartnerListProps, PartnerListState> {
	state: PartnerListState = {
		partnerList: [partner1, partner2, partner3, partner4, partner5],
	};

	render() {
		return (
			<div className={styles['partner']}>
				<ul className={styles['partner__list']}>
					{this.state.partnerList.map((item) => (
						<li key={item.toString()} className={styles['partner__item']}>
							<img src={item} alt="Partner" />
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default PartnerList;
