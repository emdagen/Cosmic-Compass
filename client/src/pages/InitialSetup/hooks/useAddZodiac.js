//Hook will return a http patch function that requires a formData object

import { useUserContext } from '../../../hooks/context/useUserContext';
import patchHandler from '../../../utils/http-requests/patchHandler';

export const useAddZodiac = () => {
	const { userData, setUserData } = useUserContext();
	const { _id, setup } = userData;

	return async (formData) => {
		const response = await patchHandler('/api/user/zodiac', {
			...formData,
			_id,
			setup,
		});
		if (response.status === 200) {
			console.log(response.message);
			setUserData({ ...userData, ...response.data });
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
