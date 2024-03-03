const express = require("express");
const {getAllUsers , getAllContacts,deleteUserById,getUserById,updateUserById, deleteContactsById}  = require("../Controllers/admin-controller");
const Authmiddleware = require("../middlewares/Auth-middleware");
const adminMiddelware = require("../middlewares/Admin-middleware");

const router = express.Router();
// Authmiddleware :- token is use to secure the admin (seen data by only admin)
router.route('/users').get(Authmiddleware , adminMiddelware ,getAllUsers);

router.route('/users/:id').get(Authmiddleware , adminMiddelware ,getUserById);

router.route('/users/update/:id').patch(Authmiddleware,adminMiddelware,updateUserById);

router.route('/users/delete/:id').delete(Authmiddleware,adminMiddelware,deleteUserById);

router.route('/contacts').get(Authmiddleware , adminMiddelware , getAllContacts);

router.route('/contacts/delete/:id').delete(Authmiddleware , adminMiddelware , deleteContactsById);

module.exports = router;