/* eslint-disable linebreak-style */

const {
  addBookHandler, getAllBookHandler, getBookByHandlerID, editBookByHandlerID, deleteBookByHandlerID,
} = require('./handler');
// Route to apply method
const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBookHandler,
  },
  {
    method: 'GET',
    path: '/books/{Id}',
    handler: getBookByHandlerID,
  },
  {
    method: 'PUT',
    path: '/books/{Id}',
    handler: editBookByHandlerID,
  },
  {
    method: 'DELETE',
    path: '/books/{Id}',
    handler: deleteBookByHandlerID,
  },
];
// Module to export routes
module.exports = routes;
