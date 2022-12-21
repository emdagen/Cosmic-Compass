//Hook will return a http patch function that requires a formData object

import { useUserContext } from '../../../hooks/context/useUserContext';
import patchHandler from '../../../utils/http-requests/patchHandler';

export const useAddZodiac = () => {
	const { userData, setUserData } = useUserContext();
	return async (formData) => {
		const response = await patchHandler('/api/user/zodiac', {
			_id: userData._id,
			...formData,
		});
		if (response.status === 200) {
			console.log(response.message);
			setUserData({ ...userData, zodiac: response.data });
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
