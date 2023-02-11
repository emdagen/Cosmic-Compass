import { useNavigate } from 'react-router';
import { useTarotContext } from '../../../hooks/context/useTarotContext';
import { useUserContext } from '../../../hooks/context/useUserContext';
import postHandler from '../../../utils/http-requests/postHandler';

export const useSelectReading = (formData, setError) => {
  const { setSpreadData } = useTarotContext();
  const navigate = useNavigate();
  const {
    userData: { _id },
  } = useUserContext();

  const handleSelectReading = async (e) => {
    try {
      console.log('response');
      // e.preventDefault();
      if (formData.spread) {
        const response = await postHandler('/api/tarot/spread', {
          ...formData,
          _id,
        });
        console.log(response);
        if (response.status === 200) {
          setSpreadData(response.data);
          console.log(response.data);
          navigate('/tarot/spread');
          setError(false);
        } else {
          console.log('nooooo', response.message);
        }

        return;
      }
      setError(true);
      console.log(formData);
    } catch (err) {
      setError(true);
      console.log('unable to add spread data');
    }
  };

  return handleSelectReading;
};
