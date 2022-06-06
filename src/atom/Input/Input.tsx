/**
 * 인풋 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.06.06 Mon 20:33:12
 */

import classNames from 'classnames/bind';
import React, { useState, useRef } from 'react';
import { IoClose } from 'react-icons/io5';

import styles from './Input.module.scss';

export type InputBorderType = 'flat' | 'round' | 'circle'
export type InputColorType = 'basic' | 'primary' | 'submit' | 'warn' | 'error'

export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
{
	border?: InputBorderType
	color?: InputColorType
}

const cn = classNames.bind(styles);

/**
 * 인풋 JSX 반환 메서드
 *
 * @param {InputProps} param0: InputProps 객체
 *
 * @returns {JSX.Element} JSX
 */
export default function Input({ border, color, className, ...props }: InputProps): JSX.Element
{
	const [ state, setState ] = useState(false);
	const ref = useRef<HTMLInputElement>(null);

	const handleInputEvent = (e: React.FormEvent<HTMLInputElement>) => setState(e.currentTarget.value.length > 0);
	const handleButtonClickEvent = () =>
	{
		// 인풋 태그가 유효할 경우
		if (ref.current)
		{
			ref.current.value = '';
			setState(false);
		}
	};

	return (
		<div className={cn('input-wrap', `border-${border}`, `color-${color}`, `disabled-${props.disabled}`, `required-${props.required}`)}>
			<input className={cn(className, 'input')} ref={ref} {...props} onInput={handleInputEvent} />
			<button className={cn('button')} disabled={!state} onClick={handleButtonClickEvent}><IoClose /></button>
		</div>
	);
}