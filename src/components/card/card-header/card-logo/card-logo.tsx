import styles from './card-logo.module.scss';

const CardLogo = () => {
	return (
		<div className={styles['logo']}>
			<div className={styles['logo__img']}>
				<div className={styles['logo__square']}></div>
				<div
					className={`${styles['logo__square']} ${styles['logo__square--red']}`}
				></div>
			</div>
			<span className={styles['logo__name']}>finely</span>
		</div>
	);
};

export default CardLogo;
