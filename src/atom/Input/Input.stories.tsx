/**
 * 인풋 Storybook 모듈
 *
 * @author RWB
 * @since 2022.06.06 Mon 20:51:23
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React from 'react';

import Input, { InputProps } from './Input';

import styles from '../../stories.module.scss';

export default {
	component: Input,
	title: 'Atom/Input'
} as ComponentMeta<typeof Input>;

const cn = classNames.bind(styles);

/**
 * 템플릿 반환 메서드
 *
 * @param {InputProps} args: InputProps 객체
 *
 * @returns {ComponentStory<typeof Input>} ComponentStory 객체
 */
function getTemplate(args: InputProps): ComponentStory<typeof Input>
{
	return (
		<section className={cn('root')}>
			<div className={cn('row')}>
				<Input {...args} />
			</div>
		</section>
	);
}

export const Sandbox = getTemplate.bind({});
Sandbox.args = {
	border: 'flat',
	disabled: false,
	placeholder: 'here',
	required: false
} as InputProps;

/**
 * 테두리 예시 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export function Border(): JSX.Element
{
	return (
		<section className={cn('root')}>
			<div className={cn('row')}>
				<Input border='flat' placeholder='flat' />
			</div>

			<div className={cn('row')}>
				<Input border='round' placeholder='round' />
			</div>

			<div className={cn('row')}>
				<Input border='circle' placeholder='circle' />
			</div>
		</section>
	);
}

/**
 * 컬러 예시 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export function Color(): JSX.Element
{
	return (
		<section className={cn('root')}>
			<div className={cn('row')}>
				<Input color='basic' placeholder='basic' />
			</div>

			<div className={cn('row')}>
				<Input color='primary' placeholder='primary' />
			</div>

			<div className={cn('row')}>
				<Input color='submit' placeholder='submit' />
			</div>

			<div className={cn('row')}>
				<Input color='warn' placeholder='warn' />
			</div>

			<div className={cn('row')}>
				<Input color='error' placeholder='error' />
			</div>
		</section>
	);
}

/**
 * 비활성화 예시 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export function Disabled(): JSX.Element
{
	return (
		<section className={cn('root')}>
			<div className={cn('row')}>
				<Input color='basic' placeholder='basic disabled' disabled />
			</div>

			<div className={cn('row')}>
				<Input border='round' placeholder='round disabled' disabled />
			</div>

			<div className={cn('row')}>
				<Input border='circle' color='warn' placeholder='circle warn disabled' disabled />
			</div>
		</section>
	);
}

/**
 * 필수 예시 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export function Required(): JSX.Element
{
	return (
		<section className={cn('root')}>
			<div className={cn('row')}>
				<Input color='basic' placeholder='basic required' required />
			</div>

			<div className={cn('row')}>
				<Input border='round' placeholder='round required' required />
			</div>

			<div className={cn('row')}>
				<Input border='circle' color='warn' placeholder='circle warn required' required />
			</div>
		</section>
	);
}