import { ButtonHTMLAttributes, CSSProperties, DetailedHTMLProps, useMemo } from 'react';
import { styled } from 'styled-components';

export type ButtonVariants = 'success' | 'warn' | 'error' | 'info';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
{
	/**
	 * 둥근 버튼 여부
	 */
	round?: boolean;

	/**
	 * 종류
	 */
	variants?: ButtonVariants;
}

/**
 * 버튼 컴포넌트 JSX 반환 메서드
 *
 * @param {ButtonProps} param0: ButtonProps 객체
 *
 * @returns {JSX.Element} JSX
 */
function ButtonFn({ ...props }: ButtonProps): JSX.Element
{
	return (
		<button {...props} />
	);
}

const Button = styled(ButtonFn)(({ round, variants }) =>
{
	const color = useMemo(() =>
	{
		let color: CSSProperties['backgroundColor'] = 'black';

		if (variants === 'error')
		{
			color = 'crimson';
		}

		if (variants === 'info')
		{
			color = 'dodgerblue';
		}

		if (variants === 'success')
		{
			color = 'green';
		}

		if (variants === 'warn')
		{
			color = 'orange';
		}

		return color;
	}, [ variants ]);

	return ({
		'&:disabled': { cursor: 'not-allowed', opacity: 0.7 },
		backgroundColor: color,
		border: 'none',
		borderRadius: round ? '100px' : '10px',
		color: 'white',
		cursor: 'pointer',
		fontSize: '1rem',
		padding: '10px 20px',
		transition: '0.3s'
	});
});

export default Button;