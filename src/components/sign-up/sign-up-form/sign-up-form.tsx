import React, { FormEvent } from 'react';
import { Navigate } from 'react-router-dom';
import FacebookIcon from '../../../assets/images/facebook-icon.jpg';
import Button from '../../common/button/button';
import InputGroup from '../../common/input-group/input-group';
import styles from './sign-up-form.module.scss';

interface InputProps {
	name: string;
	value: string;
}

export interface SignUpFormData {
	userName: string;
	email: string;
	password: string;
	numberId: string;
	expDate: string;
}

interface SignUpFormProps {
	onSubmit?: (data: SignUpFormData) => void;
}

interface SignUpFormState {
	data: SignUpFormData;
	errors: SignUpFormData;
	submitted?: boolean;
}

const regEmail = /\S+@\S+\.\S+/;

class SignUpForm extends React.Component<SignUpFormProps, SignUpFormState> {
	constructor(props: SignUpFormProps) {
		super(props);
		const initialState = {
			data: {
				userName: '',
				email: '',
				password: '',
				numberId: '',
				expDate: '',
			},
			errors: {
				userName: '',
				email: '',
				password: '',
				numberId: '',
				expDate: '',
			},
			submitted: false,
		};
		this.state = initialState;
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (event: any) => {
		event.preventDefault();
		const { name, value }: InputProps = event.currentTarget;
		const newData: SignUpFormData = {
			...this.state.data,
			[name]: value,
		};
		this.setState({ data: newData });
	};

	handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// Validation
		const { data } = this.state;
		const newErrors = {
			userName: '',
			email: '',
			password: '',
			numberId: '',
			expDate: '',
		};
		let valid = true;

		if (data.email.match(regEmail)) {
			newErrors.email = 'Email is invalid';
			valid = false;
		}

		if (!Number.isInteger(+data.numberId) || data.numberId.length !== 16) {
			newErrors.numberId = 'Card ID is invalid. Cari ID must be 16 numbers';
			valid = false;
		}

		console.log(newErrors);

		if (!valid) {
			this.setState({ errors: newErrors });
		}

		if (this.props.onSubmit && valid) {
			this.setState({ submitted: true });
			this.props.onSubmit(this.state.data);
		}
	};

	render() {
		return (
			<form className={styles.form} onSubmit={this.handleSubmit}>
				{this.state.submitted && <Navigate to={'/card'} />}
				<InputGroup
					id="userName"
					name="userName"
					labelName="Your Name"
					required
					value={this.state.data.userName}
					onChange={this.handleChange}
					error={this.state.errors.userName}
				/>
				{this.state.errors.userName && (
					<p className={styles.error}>{this.state.errors.userName}</p>
				)}
				<InputGroup
					id="email"
					name="email"
					type="email"
					labelName="Email"
					required
					value={this.state.data.email}
					onChange={this.handleChange}
					error={this.state.errors.email}
				/>
				{this.state.errors.email && (
					<p className={styles.error}>{this.state.errors.email}</p>
				)}

				<InputGroup
					id="password"
					name="password"
					type="password"
					labelName="Password"
					required
					value={this.state.data.password}
					onChange={this.handleChange}
					error={this.state.errors.password}
				/>
				{this.state.errors.password && (
					<p className={styles.error}>{this.state.errors.password}</p>
				)}

				<InputGroup
					id="numberId"
					name="numberId"
					labelName="Number ID"
					required
					value={this.state.data.numberId}
					onChange={this.handleChange}
					error={this.state.errors.numberId}
				/>
				{this.state.errors.numberId && (
					<p className={styles.error}>{this.state.errors.numberId}</p>
				)}

				<InputGroup
					id="expDate"
					name="expDate"
					type="date"
					labelName="Expire Date"
					required
					value={this.state.data.expDate}
					onChange={this.handleChange}
					error={this.state.errors.expDate}
				/>
				{this.state.errors.expDate && (
					<p className={styles.error}>{this.state.errors.expDate}</p>
				)}

				<Button type="submit" level="primary" size="large">
					Sign up
				</Button>

				<Button
					level="facebook"
					size="large"
					leftIcon={<img src={FacebookIcon} alt="Facebook icon"></img>}
				>
					Connect with Facebook
				</Button>
			</form>
		);
	}
}

export default SignUpForm;
