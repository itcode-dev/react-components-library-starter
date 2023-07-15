import type { Meta, StoryObj } from '@storybook/react';
import { styled } from 'styled-components';

import Button from '.';

const meta = {
	argTypes: {
		children: {
			description: '내용',
			type: 'string'
		},
		disabled: {
			description: '비활성화 여부',
			type: 'boolean'
		},
		round: {
			description: '둥근 버튼 여부',
			type: 'boolean'
		},
		variants: {
			control: 'select',
			description: '종류',
			options: [ 'success', 'warn', 'error', 'info', 'default' ]
		}
	},
	component: Button,
	tags: [ 'autodocs' ],
	title: 'UI/Button'
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

const Div = styled.div({
	display: 'flex',
	gap: '10px'
});

export const Playground: Story = { args: { children: '버튼', variants: 'success' } };

export function Variants(): JSX.Element
{
	return (
		<Div>
			<Button>default</Button>
			<Button variants='error'>error</Button>
			<Button variants='info'>info</Button>
			<Button variants='success'>success</Button>
			<Button variants='warn'>warn</Button>
		</Div>
	);
}

export function Round(): JSX.Element
{
	return (
		<Div>
			<Button round>default</Button>
			<Button variants='error' round>error</Button>
			<Button variants='info' round>info</Button>
			<Button variants='success' round>success</Button>
			<Button variants='warn' round>warn</Button>
		</Div>
	);
}