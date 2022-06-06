/**
 * 버튼 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.06.06 Mon 17:45:00
 */

import classNames from 'classnames/bind';
import React from 'react';

import styles from './Button.module.scss';

export type ButtonBorderType = 'flat' | 'round' | 'circle'
export type ButtonColorType = 'basic' | 'primary' | 'submit' | 'warn' | 'error' | 'reverse'

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
{
	border?: ButtonBorderType
	color?: ButtonColorType
}

const cn = classNames.bind(styles);

/**
 * 버튼 JSX 반환 메서드
 *
 * @param {ButtonProps} param0: ButtonProps 객체
 *
 * @returns {JSX.Element} JSX
 */
export default function Button({ border = 'flat', color = 'basic', className, ...props }: ButtonProps): JSX.Element
{
	return (
		<button className={cn(className, 'button', `border-${border}`, `color-${color}`)} {...props} />
	);
}