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
	required: false
};