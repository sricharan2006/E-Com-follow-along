# eCommerce-follow-along
### Project Overview: E-Commerce Application (MERN Stack)

This project will guide you through building a full-stack e-commerce web application using the MERN stack (MongoDB, Express.js, React.js, Node.js). You will learn how to implement key functionalities such as user authentication, **product management, and **order handling while gaining hands-on experience with REST APIs, database schema design, and frontend development with React.

---

### Key Features:
- *User Authentication:* Secure login and registration with JWT.
- *Product Management:* CRUD operations for products, with features like filtering and sorting.
- *Order Handling:* Users can place and view orders.
- *REST API:* Build scalable API endpoints for managing users, products, and orders.
- *Frontend:* Responsive UI built with React for a smooth user experience.

---

### Core Concepts:
- *MERN Stack*: Using MongoDB, Express.js, React.js, and Node.js for full-stack development.
- *REST APIs*: Design and develop API endpoints for user and product management.
- *Authentication*: Implement secure login and session management.
- *Database Schema*: Design MongoDB schemas for users, products, and orders.

---

### Next Steps:
1. Set up the *development environment* and install dependencies.
2. Implement a *basic server* using Node.js and Express.
3. Start building the *React frontend* and connect it to the backend.
4. Design *MongoDB schemas* for structured data storage.

This project will help you master the full-stack development process, from database to frontend, with a focus on scalability and user interaction.



### Milestone 2 : Project Setup and Login Page
Created a structured folder hierarchy for the project.
Set up a React app for the frontend.
Set up a Node.js server for the backend.
Configured Tailwind CSS for streamlined styling.
Added optional extensions for improving development efficiency.
Built a functional and styled Login Page for the frontend.

### Milestone 3 :

Set up dedicated folders for organizing backend code effectively.
Initialized and configured a Node.js server to handle API requests.
Connected the application to MongoDB to store and manage data.
Implemented basic error handling to ensure smooth server operation.



### Milestone 4 :
 created a User Model to define how user data is structured in the database  also developed a User Controller to manage user interactions, like adding or retrieving data. Additionally, configured Multer to handle file uploads, allowing users to store files such as images.
 

### milestone 5 (Frontend - Signup page) :


developed the frontend signup page using React. The page includes a form for users to register, with input validation for fields like email and password.  integrated the page with the backend API to handle user registration and implemented error handling to ensure a smooth user experience.


### milestone 6 :


In this milestone, we implemented the backend signup functionality, ensuring secure password storage and preventing duplicate user registrations. Additionally, we added optional functionality for user profile image uploads.


### Milestone 7 :


In this milestone, we implemented a login endpoint in the backend to validate user credentials. We updated the frontend (Login.jsx) to send a POST request with email and password, handled errors, and displayed success messages. The backend (user.js) verifies user credentials using bcrypt and returns a success response.


### Milestone 8 :


 Implemented the Product Page and Home Page by creating a reusable Product.jsx component with prop validation and a responsive design using Tailwind CSS. Developed Home.jsx to dynamically display multiple products in a grid layout. Updated Routes.jsx to include the Home component and modified App.jsx to integrate the / route for seamless navigation between Home, Login, and Signup pages.


 ### Milestone 9 : 


 In this milestone, we implemented a Create Product page where users can input product details, including name, description, category, tags, price, stock, email, and images. We used a dropdown for category selection and allowed multiple image uploads with previews. Additionally, we created a new route for this page and integrated it into the app by updating routes.jsx and App.jsx. This milestone enhances product management by enabling users to add new products seamlessly. 


 ### Milestone 10 :


 In Milestone 10, we create the backend endpoint for the "Create Product" page. This involves setting up a product schema, handling form submissions in the frontend, and validating product data before storing it in the database. We configure Multer for image uploads, ensure user verification via email, and integrate the route into Express.js. Finally, we update App.js to connect the new API endpoint.

