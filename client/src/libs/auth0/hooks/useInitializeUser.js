import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useTarotContext } from '../../../hooks/context/useTarotContext';
import { useUserContext } from '../../../hooks/context/useUserContext';
import getHandler from '../../../utils/http-requests/getHandler';
import postHandler from '../../../utils/http-requests/postHandler';

export const useInitializeUser = () => {
	const { setUserData, setLoadingObj, loadingObj } = useUserContext();
	const { setTarotList } = useTarotContext();
	const { user, isAuthenticated } = useAuth0();

	useEffect(() => {
		const handleCollectInfo = async () => {
			try {
				const response = await postHandler('/api/user/verify', user);
				const tarotResponse = await getHandler(`/api/search-results`);
				setTarotList(tarotResponse.data);
				setUserData(response.data);
				setLoadingObj({
					...loadingObj,
					user: 'verify',
					zodiac: response.zodiac,
				});
				console.log('SUCCESS✅', response.message);
			} catch (err) {
				console.log('hello', err);
			}
		};

		isAuthenticated && handleCollectInfo();
	}, [isAuthenticated]);

	return;
};
