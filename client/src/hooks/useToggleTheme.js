import patchHandler from '../utils/http-requests/patchHandler';
import { useUserContext } from './context/useUserContext';

export const useToggleTheme = () => {
	const { userData, setUserData } = useUserContext();
	const { _id, theme } = userData;

	const toggleDarkMode = async () => {
		const mongoResponse = await patchHandler('/api/user/theme', {
			_id,
			theme: !theme,
		});
		setUserData({ ...userData, theme: mongoResponse.theme });
	};

	return [toggleDarkMode, theme];
};
