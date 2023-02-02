import { useLocation, useNavigate } from 'react-router';
import { useTarotContext } from '../../../hooks/context/useTarotContext';
import { determineIndex } from '../../../utils/determineIndex';
import ResetButton from '../components/ResetButton';
import Button from '@mui/material/Button';
import { Spacing } from '@mui/system';

const NextButton = ({ currentIndex, setCurrentIndex }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { spreadData } = useTarotContext();

  const handleClick = (path, location) => {
    const pathname = '/tarot/spread/' + path;
    setCurrentIndex(determineIndex(spreadData, path));
    navigate(pathname, {
      state: { background: location },
    });
  };

  return (
    <>
      {currentIndex < spreadData.length - 1 ? (
        <Button
          variant='contained'
          sx={{ m: 2 }}
          onClick={() => {
            if (currentIndex < spreadData.length - 1) {
              console.log(spreadData.length - 2 - currentIndex + ' more cards');
              handleClick(spreadData[currentIndex + 1].card._id, {
                ...location,
              });
            } else {
              console.log('its over');
            }
          }}
        >
          {' '}
          Next Card
        </Button>
      ) : (
        <>
          <Button
            variant='contained'
            // sx={{ m: 2 }}
            onClick={() => {
              console.log(
                'I will eventually save the data to mongo on this click'
              );
            }}
          >
            Save Reading
          </Button>
          <ResetButton />
        </>
      )}
    </>
  );
};

export default NextButton;
