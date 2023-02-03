import { useLocation, useNavigate } from 'react-router';
import { useTarotContext } from '../../../hooks/context/useTarotContext';
import { determineIndex } from '../../../utils/determineIndex';
import ResetButton from '../components/ResetButton';
import Button from '@mui/material/Button';
import { AiOutlineSave } from 'react-icons/ai';
import { GrPowerReset } from 'react-icons/gr';
import { MdSkipNext } from 'react-icons/md';
import { tarotButtonProps } from '../style';
import styled from 'styled-components';
import { device } from '../../../libs/styled-components/GlobalStyles';
import { useTheme } from '@mui/material';
import { useReset } from '../hook/useReset';

const NextButton = ({ currentIndex, setCurrentIndex }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const { spreadData } = useTarotContext();
	const handleReset = useReset();
	const primary = useTheme().palette.primary.main;

	const handleClick = (path, location) => {
		const pathname = '/tarot/spread/' + path;
		setCurrentIndex(determineIndex(spreadData, path));
		navigate(pathname, {
			state: { background: location },
		});
	};

	const handleNext = () => {
		if (currentIndex < spreadData.length - 1) {
			console.log(spreadData.length - 2 - currentIndex + ' more cards');
			handleClick(spreadData[currentIndex + 1].card._id, {
				...location,
			});
		} else {
			console.log('its over');
		}
	};

	return (
		<StyledButtonContainer primary={primary}>
			{currentIndex < spreadData.length - 1 ? (
				<>
					<div className='mobile button-icon' onClick={handleNext}>
						<MdSkipNext size={30} />
					</div>
					<Button
						className='desktop'
						{...tarotButtonProps}
						sx={{}}
						onClick={handleNext}
					>
						Next Card
					</Button>
				</>
			) : (
				//
				<>
					<div
						className=' button-icon'
						onClick={() => {
							console.log(
								'I will eventually save the data to mongo on this click'
							);
						}}
					>
						<AiOutlineSave size={30} />
					</div>
					<div className=' button-icon rotate' onClick={handleReset}>
						<GrPowerReset size={30} />
					</div>
				</>
			)}
		</StyledButtonContainer>
	);
};

export default NextButton;

const StyledButtonContainer = styled.div`
	position: fixed;
	bottom: var(--sm-padding);
	right: var(--sm-padding);
	z-index: 1;
	max-width: var(--container-width-limit);
	margin: auto;

	display: flex;
	flex-direction: column;
	gap: 8px;
	.desktop {
		display: none;
	}
	.button-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 10px;
		border-radius: 50%;
		background-color: ${(props) => props.primary};

		cursor: pointer;
		svg {
			path {
				stroke: white;
			}
		}
		&:hover {
			transform: scale(1.02);
		}
		&:active {
			transform: scale(0.97);
		}

		&.rotate:hover {
			transform: scale(1.02) rotate(180deg);
			transition: all 0.3s;
		}
		&.rotate:not(:hover) {
			transform: scale(1.02) rotate(0deg);
			transition: all 0.3s;
		}
		&.rotate:active {
			transform: scale(0.97);
		}
	}
	.mobile {
		/* border: 1px solid brown; */
	}
	@media ${device.mobile} {
		bottom: var(--sm-padding);
		right: var(--md-padding);
		.desktop {
			display: block;
		}
		.mobile {
			display: none;
		}
	}
`;
