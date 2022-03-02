export {};
const mongoose = require('mongoose');

// ----------------------------------------------------------------
// * MongoDB URL and Database name

mongoose.connect(process.env.MONGO_DB_URL + '/' + process.env.MONGO_DB_NAME, {
    useNewUrlParser: true,
});

// ----------------------------------------------------------------
// - Task

// const Task = mongoose.model('Tasks', {
//     description: {
//         type: String,
//         trim: true,
//         required: true,
//     },
//     completed: {
//         type: Boolean,
//         default: false,
//     },
// });

// const myTask = new Task({
//     description: 'Read your book',
//     completed: false,
// });

// myTask
//     .save()
//     .then(() => {
//         console.log(myTask);
//     })
//     .catch((error: Error) => {
//         console.log(error);
//     });
