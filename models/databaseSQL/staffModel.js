exports.staffModel = (firstName , lastName, username, plainPassword, passEncrypt, admin, email, department) => {
	return {
	firstName: firstName,
	lastName: lastName,
	username: username,
	plainPassword : plainPassword,
	password : passEncrypt,
	admin : admin,
	email : email,
	department: department,
	dateCreated : Date(),
	}
};
