# MERN-App
Full Stack MERN Application with user create, read, update, delete (CRUD) and authentication-authorization capabilities.

# Render Deployment #
* https://mern-app-4j5x.onrender.com/

# Modules Downloads #
* https://www.npmjs.com/
* https://classic.yarnpkg.com/en/
# #

# Modules #

## React ##
* react
* react-dom
## Express ##
* express module
## MongoDB ##
* mongodb module

## Babel ##
- Babel is a compiler that converts your modern JavaScript to run in older browsers.
> Babel modules: 
> - @babel/core - Babel compiler core.
> - @babel-loader - allows transpiling JavaScript files using Babel and webpack.
> - @babel/preset-env - a Babel preset for each environment.
> - @babel/preset-react - Babel preset for all React plugins.

## Webpack ##
- Webpack helps bundle the compiled JavaScript.
> Webpack modules: 
> - webpack - a module bundler.
> - webpack-cli - a flexible set of commands for developers to increase speed.
> - webpack-node-externals - exclude node modules in Webpack
> - webpack-dev-middleware - allows for serving of the files emitted from webpack.
> - webpack-hot-middleware - get updates as code changes during development.
> - nodemon - watch server-side changes during development.
> - react-hot-loader - faster development.
> - @hot-loader/react-dom - to enable hot-reloading support for React hooks.

# Yarn package manager #
- a package manager for JavaScript dependencies, alternative to npm.
# #

# Configuration #
> .babelrc - adding json with presets and plugins.

> webpack.config.client.js \
> webpack.config.server.js \
> webpack.config.client.production.js
> 
> configuring Webpack to bundle the code for production.

# Folder Structure #
> client - contains front end code

> server - contains back end code


# WebPack #
* bundles the folder **server** with ```server.js```
* outputs bundled code in ```server.generated.js``` in folder **dist**
* bundled code in ``` bundle.js ```

# Nodemon #
* nodemon.json - configuration will make nodemon watch for changes in the server during development.

# Frontend #

``` template.js ``` - renders the HTML with React components.

``` main.js ``` -renders the top-level entry React component.

# Backend #

``` server.js ``` - set up the server with Express and Node.

``` devBundle.js ``` - help compile the React code using Webpack.

# Overview #
* **Sign up:** users can register and create a new account using an email.
* **User list:** any visitor can see a list of all registered users.
* **Authentication:** registered users can sign-in and sign-out
* **Protected user profile:** only registered users can view individual user details after signing in.
* **Authorized user edit and delete** only a registered and authenticated user can edit or remove their own user account details. 

# User Model #

| Field name  | Type | Description |
| ----------- | ----------- | ------- |
| name        | String      | required field to store the user's name   |
| email       | String      |  Required unique field to store user's email for each account (only one accout is allowed per unique email)   |
| password    | String      | A required field for authentication. The database will store encrypted password and not the actual string password |
| created     | Date | Automatically generated timestamp when a new user account is created
| updated     | Date | Automatically generated timestamp when existing user details are updated

# CRUD Operations #

| Operation  | API route| HTTP method |
| ----------- | ----------- | ------- |
| Create a user | /api/users | POST |
| List all users | /api/users | GET |
| Fetch a user | /api/users/:userId | GET |
| Update a user | /api/users:userId | PUT |
| Delete a user | /api/users:userId | DELETE |
| User sign-in  | /auth/signin | POST |
| User signout  | /auth/signout | GET |

# Authentication #

* Using JSON Web Token (JWT) - does not require storing user state on the server side (stateless authentication).

# JWT Auth Flow #

| Client | Action | Server|
|--------| -------| ------|
| | POST /auth/signin with email and password | Generates signed JWT
| Store JWT locally | Signed JWT |
| | GET /api/users/:userId with JWT in Authorization header | Verify JWT signature
| | Response based on JWT authenticity |

# Defining the frontend #
* **Home page:** A view that renders at the root URL to welcome users to the web application.
* **Sign-up page:** A view with a form for user sign-up, allowing new users to create a user account and redirecting them to a sign-in page when successfully created. 
* **Sign-in page:** A view with a sign-in form that allows existing users to sign in so they have access to protected views and actions.
* **User list page:** A view that fetches and shows a list of all the users in the database, and also links to individual user profiles.
* **Profile page:** A component that fetches and displays an individual user's information. Only signed-in users can access it. 
* **Edit profile page:** a form that fetches the user's information to prefill the form fields. Users can edit their own information.
* **Delete user component:** signed-in users can delete their own profile.
* **Menu navigation bar:** lists all the available and relavent views to the user. 

| | | | MainRouter| | | |
|-|-|-|-|-|-|-|
|Menu|Home|Signup|Signin|Users|Profile|EditProfile|
||||||DeleteUser||

**MainRouter** will be the main React component that contains all custom React views.

**Home, Signup, Signin, Users, Profile, and EditProfile** will render at indinvidual routes declared with React Router.

**Menu component** will render across all the views.

**DeleteUser** will be part of the Profile view.







