const express = require('express'); // import express module
const router = express.Router(); // create a new router object
const {asyncHandler} = require('../middleware/errorHandler'); // import async handler for error handling


const items = [
    {
        id: 1,
        name: 'Item 1',
        description: 'Description for Item 1',
    },
    {
        id: 2,
        name: 'Item 2',
        description: 'Description for Item 2',
    },
    {
        id: 3,
        name: 'Item 3',
        description: 'Description for Item 3',
    },
    {
        id: 4,
        name: 'Item 4',
        description: 'Description for Item 4',
    },
    {
        id: 5,
        name: 'Item 5',
        description: 'Description for Item 5',
    },
]


// GET all items
router.get('/items', asyncHandler(async (req, res) => {
    res.json(items);
}))

module.exports = router; // export the router object