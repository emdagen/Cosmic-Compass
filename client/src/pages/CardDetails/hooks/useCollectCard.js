import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useErrorPage } from '../../../libs/react-router/hooks/useErrorPage';
import getHandler from '../../../utils/http-requests/getHandler';
const { REACT_APP_BACKEND_URL } = process.env;
export const useCollectCard = () => {
	const { _id } = useParams();
	const [cardInfo, setCardInfo] = useState(null);
	const navError = useErrorPage();
	useEffect(() => {
		const collectCardData = async () => {
			const cardData = await getHandler(
				REACT_APP_BACKEND_URL + `/api/tarot/card/${_id}`
			);
			const { status, data } = cardData;
			status === 200 ? setCardInfo(data) : navError();
		};
		collectCardData();
	}, [_id, setCardInfo]);
	return cardInfo;
};
