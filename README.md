# Party Management Frontend

This repository contains the frontend of the Party Management system, a full-stack CRUD application developed using **React** with **Vite**, styled with **Ant Design**, and utilizing **Axios** for API requests. The app allows users to create, edit, delete, and view parties, while ensuring user authentication via a backend API.

## Project Overview

The Party Management system is designed to allow users to manage their parties. This frontend was built using React and Vite, with a clean and responsive UI provided by Ant Design. Users can create and manage parties, upload images, and manage their profiles.

- **Technology Stack:**
  - **React JS** for building the user interface.
  - **Vite** as the build tool for faster development.
  - **Ant Design** for pre-styled components.
  - **React Icons** for icons.
  - **Axios** for making HTTP requests to the backend.

## Features

- **CRUD Operations:** Create, read, update, and delete parties.
- **Authentication:** Login and logout functionality integrated with JWT authentication from the backend.
- **Form Validation:** Ant Design forms for input validation.
- **Responsive UI:** The app is responsive and works on different screen sizes.
- **Image Upload:** Users can upload party images that are stored on the backend.

## Installation & Setup

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Steps to run the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mercedes-Celedon/shareparty-frontend.git
   cd shareparty-frontend
2. **Install dependencies:**
   npm install
3. **Create .env file:*
   VITE_API_BASE_URL=http://localhost:3001
4. **Run the development server**
   npm run dev

## Project Structure
  /src
    /components: Reusable UI components (e.g., buttons, forms).
    /pages: Page-level components like login, register, party details, etc.
    /context: Context providers (e.g., authentication context).
    /utils: Utility functions and API service.
## Important Dependencies
  Ant Design: A UI library for React that provides ready-to-use components.
  Axios: For HTTP requests and interacting with the backend API.
  React Router: For routing between different pages.
  React Icons: For adding icons throughout the app.
### **Backend
  <a href="https://github.com/Mercedes-Celedon/shareparty-backend.git">download the Api Rest here.</a>
## Usage
  Register a new account.
  Log in with your credentials.
  Create, view, edit, and delete parties.
  Log out when done.
## Development Timeline
  Duration: 2 weeks
  Developer: <a href="https://github.com/Mercedes-Celedon"> Mercedes Celedon</a>
  
Thank you for checking out this project! Feel free to clone, contribute, or reach out if you have any questions.
