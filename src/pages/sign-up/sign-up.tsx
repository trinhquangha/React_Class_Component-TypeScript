import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm, {
	SignUpFormData,
} from '../../components/sign-up/sign-up-form/sign-up-form';

import styles from './sign-up.module.scss';

interface SignUpProps {
	submitData?: (data: SignUpFormData) => void;
}

class SignUp extends React.Component<SignUpProps, {}> {
	onSubmit = (data: SignUpFormData) => {
		if (this.props.submitData) {
			this.props.submitData(data);
		}
	};

	render() {
		return (
			<div className={styles['sign-up']}>
				<div className={styles['sign-up__container']}>
					<h2 className={styles['sign-up__heading']}>Create Account,</h2>
					<h3 className={styles['sign-up__subheading']}>
						Sign up to get started!
					</h3>

					<SignUpForm onSubmit={this.onSubmit} />

					<div className={styles['sign-up__sign-in-link']}>
						<span>
							I'm already a member. <Link to="/card">Sign In</Link>
						</span>
					</div>
				</div>
			</div>
		);
	}
}

export default SignUp;
