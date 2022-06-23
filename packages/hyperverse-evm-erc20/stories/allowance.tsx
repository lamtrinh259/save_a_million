import { useERC20 } from '../source';
import { useEvm } from '@decentology/hyperverse-evm';
import './style.css';

export const Allowance = ({ ...props }: { owner: string; spender: string }) => {
	const { allowance } = useERC20();
	const { address, Connect } = useEvm();

	return address ? (
		<button
			type="button"
			className={['storybook-button', `storybook-button--large`].join(' ')}
			style={{ color: 'blue' }}
			onClick={() => {
				allowance?.(props.owner, props.spender);
			}}
		>
			Allowance
		</button>
	) : (
		<Connect />
	);
};
