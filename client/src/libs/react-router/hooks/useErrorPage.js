import { useNavigate } from 'react-router';

export const useErrorPage = () => {
	const navigate = useNavigate();
	return () => navigate('/error');
};
