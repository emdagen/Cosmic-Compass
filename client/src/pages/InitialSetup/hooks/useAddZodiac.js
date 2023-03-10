//Hook will return a http patch function that requires a formData object

import { useUserContext } from '../../../hooks/context/useUserContext';
import patchHandler from '../../../utils/http-requests/patchHandler';
const { REACT_APP_BACKEND_URL } = process.env;
export const useAddZodiac = () => {
	const { userData, setUserData } = useUserContext();
	const { _id, setup } = userData;

	return async (formData) => {
		const response = await patchHandler(
			REACT_APP_BACKEND_URL + '/api/user/zodiac',
			{
				...formData,
				_id,
				setup,
			}
		);
		console.log(response);
		if (response.status === 200) {
			console.log(response.message);
			const { birthday, zodiac } = response.data;
			console.log(response.data);
			setUserData({
				...userData,
				setup: response.data.setup,
				data: { ...userData.data, birthday, zodiac },
			});
		} else {
			console.log(response.message);
		}
	};
};

// HOW TO USE

// const handleAddZodiac = useAddZodiac();

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   console.log(formData);
//   try {
//     if (formData === null) {
//       setError(true);
//     } else {
//       handleAddZodiac(formData);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };
