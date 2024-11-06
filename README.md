# Pet Donation and Care

A full-stack web application that connects pet donors with adopters, allowing users to donate or adopt pets easily. The platform features user authentication, protected routes, and a seamless experience for both donors and adopters.

## Features

- **User Authentication**: Login and registration system with JWT token-based authentication.
- **Protected Routes**: Only authenticated users can access certain pages.
- **Pet Donation**: Users can donate pets by submitting their details.
- **Pet Adoption**: Users can browse available pets for adoption.
- **Responsive Design**: The website is designed to be mobile-friendly and responsive.

## Tech Stack

- **Frontend**:
  - React.js
  - React Router
  - JWT (JSON Web Tokens)
  - CSS for styling
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (for database storage)
  - JWT for authentication
- **Other Libraries**:
  - `jwt-decode` (for decoding JWT tokens)
  - `bcryptjs` (for password hashing)
  
## Installation

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pet-donation-care.git
   cd pet-donation-care/backend

2. Install dependencies:
   npm install

3. Set up MongoDB:
   Create a MongoDB database and set the connection URI in backend/config/db.js.

4. Run the backend server:
   npm start
   The backend should now be running on http://localhost:5000.

   ### Frontend Setup
   1. Navigate to the frontend directory:
      cd ../frontend
      
   3. Install dependencies:
      npm install
      
  3. Run the frontend server:
     npm start
     The frontend should now be running on http://localhost:3000.

 ### Usage
  1. Register an Account: Navigate to the registration page to create a new account. Choose whether you are a pet adopter or donor.

  2. Login: After registering, log in with your credentials to access the pet donation or adoption pages.

  3.  Donate a Pet: Logged-in users can donate their pets by submitting details such as pet type, breed, and contact information.

  4.  Adopt a Pet: Logged-in users can browse available pets for adoption.

### JWT Authentication
This project uses JWT (JSON Web Tokens) for user authentication. After a successful login, a JWT token is stored in the browser's local storage, which is sent along with requests to access protected routes.

