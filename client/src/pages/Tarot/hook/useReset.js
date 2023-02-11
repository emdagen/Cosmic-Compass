import { useTarotContext } from '../../../hooks/context/useTarotContext';
import useDebounce from '../../../hooks/useDebounce';

export const useReset = () => {
  const { setSpreadData } = useTarotContext();
  const handleReset = () => {
    setSpreadData(null);
  };
  const debounceReset = useDebounce(handleReset);
  return debounceReset;
};
