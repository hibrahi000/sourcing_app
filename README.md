
## This is a application Made by Hashmat Ibrahimi to help source prices from a collection of clients.
# sourcing_application
This is a Node, Express, Ejs application that uses mailjet's email api to email a list of clients a jwt encrypted link that allows them to fill a form for whatever the user wants and then updates the mongo database. This also sends another link in the email that allows them to be removed from the email chain for certain requests. 


The application is connected to a database for categorically organized materials, clients with there info on it and a section to store submissions from when the client submit the form also organized by clients name => the category of item => material => array of item with the date listed at the bottom of the submission. for more information on the way it is modeled look at the models folder.

The steps taken to process a complete source is the user makes a request that will send a JWT secured link based on if its a request for all the contacts in a category or if its a new material or if its a specific material request.

# If is a new material =>

- material is added to database based on category and material name (material must be new checks have been in place to make sure of it) once final form is filled in by user with correct format
- email contains link for a form submission or unsubscription to every clients
- if unsubscribed the link do nothing as this is a new material

- if form is submitted then material DB will add clients name to the list of providers for the material and the clients db will update clients profile so that it shows they supply it too for specific request

-  then a email will be sent to the designated person to be shown the receipt of what was submitted and a copy of the receipt will be saved to the receipt database following its model.

# if is a category request =>

- check if material exists if yes ->
- sends email to all the clients in that category through email
- link will then just update database as needed if form submitted
- if unsubscribe is clicked then clients will be removed from material document and will update clients profile

- if material is empty of clients then the material its self is removed
- all actions of unsubscribe will be sent to designated user

#if direct request =>
- only those who supply material will receive email and then following logic of category request for form submission and unsubscription



