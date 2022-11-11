import React from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined
	level?: 'normal' | 'primary' | 'secondary' | 'facebook';
	size?: 'large' | 'small';
	children: React.ReactNode;
	leftIcon?: React.ReactNode;
	className?: string;
}

class Button extends React.Component<ButtonProps> {
	render() {
		return (
			<button
        type={this.props.type}
				className={`${styles['button']}
        ${styles[`button--${this.props.level}`]}
        ${styles[`button--${this.props.size}`]}
        ${this.props.className ? this.props.className : ''}`}
			>
				{this.props.leftIcon && (
					<span className={styles['button__left-icon']}>
						{this.props.leftIcon}
					</span>
				)}
				<span>{this.props.children}</span>
			</button>
		);
	}
}

export default Button;
