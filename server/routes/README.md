## Instructions for routes folder 🚏

This folder is for storing all routes

Import the handlers to call the MongoDB models

ex.

```async (req, res) => {
const data = await usersHandlers.verifyUser(req.body);

    res.status(data.status).json(data);

}
```
