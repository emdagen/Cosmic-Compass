## Instructions for handlers folder 🙌🏼

This folder is for calling all the static functions from the models

Functions are async and class static functions must be awaited.

ex.

```
const verifyUser = async (data) => {
	const existingUser = await User.findBy({ email: data.email });
	if (existingUser) {
		const legitCheck = existingUser.zodiac ? 'verify' : 'checked';
		return {
			status: 200,
			message: 'User already has an account',
			data: existingUser,
			zodiac: legitCheck,
		};
	}
	//Create user based off class object if user doesn't exist in database
	const user = await User.create(data);
	const legitCheck = user.zodiac ? 'verify' : 'checked';
	return {
		status: 201,
		message: 'User has been created',
		data: user,
		zodiac: legitCheck,
	};
};
```
