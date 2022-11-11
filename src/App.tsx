import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import { SignUpFormData } from './components/sign-up/sign-up-form/sign-up-form';
import CardPage from './pages/card/card';
import SignUp from './pages/sign-up/sign-up';

interface AppState {
	formData: SignUpFormData;
}

class App extends React.Component<{}, AppState> {
	constructor(props = {}) {
		super(props);
		const initialState = {
			formData: {
				userName: 'NICK OHMY',
				email: '',
				password: '',
				numberId: '1234567890000000',
				expDate: '05/24',
			},
		};
		this.state = initialState;
	}

	onSubmitData = (data: SignUpFormData) => {
		const newFormData = { ...data };
		this.setState({ formData: newFormData });
	};

	render(): React.ReactNode {
		return (
			<div className={styles.wrapper}>
				<Routes>
					<Route
						path="sign-up"
						element={<SignUp submitData={(data) => this.onSubmitData(data)} />}
					/>
					<Route
						path="card"
						element={<CardPage data={this.state.formData} />}
					/>

					<Route path="/" element={<Navigate replace to="/sign-up" />} />
					<Route path="*" element={<>Not found</>} />
				</Routes>
			</div>
		);
	}
}

export default App;
