import { useERC721 } from '../source';
import { useEvm } from '@decentology/hyperverse-evm/react';
import './style.css';

export const SetBaseURI = ({ ...props }: { baseURI: string }) => {
	const { setBaseURI } = useERC721();
	const { Connect } = useEvm();

	return (
		<>
			<Connect />
			<button
				type="button"
				className={['storybook-button', `storybook-button--large`].join(' ')}
				style={{ color: 'blue' }}
				onClick={() => {
					setBaseURI?.(props.baseURI);
				}}
			>
				Set Base URI
			</button>
		</>
	);
};
