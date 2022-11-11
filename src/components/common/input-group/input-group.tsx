import React from 'react';
import styles from './input-group.module.scss';

interface InputGroupProps {
	id: string;
	name: string;
	type?: string;
	labelName?: string;
	required?: boolean;
	className?: string;
	value: string;
	error?: string;
	onChange: (event: any) => void;
}

class InputGroup extends React.Component<InputGroupProps> {
	render() {
		return (
			<div className={styles['input-group']}>
				<input
					id={this.props.id}
					name={this.props.name}
					type={this.props.type}
					required={this.props.required}
					value={this.props.value}
					onChange={this.props.onChange}
					className={`${styles['input-group__input']} ${
						this.props.className ? this.props.className : ''
					} ${this.props.error ? `${styles['input-group__error']}` : ''}`}
				/>
				<label htmlFor={this.props.id} className={styles['input-group__label']}>
					{this.props.labelName}
					{this.props.required && ' *'}
				</label>
			</div>
		);
	}
}

export default InputGroup;
