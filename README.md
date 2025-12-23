# Movie Search Application

This is a simple movie search web application built using React and Vite. The project was developed to apply basic React concepts by building a working application that interacts with a real external API.

The application is intentionally kept simple and focused on functionality rather than design or advanced features.

---

## About the Project

The application allows users to search for movies by entering a movie name. Based on the search input, the app fetches relevant movie data from an external movie API and displays the results on the screen.

The main focus of this project is:

* handling user input
* making API requests
* managing state in React
* updating the UI dynamically

---

## Technologies Used

* React
* Vite
* JavaScript
* HTML and CSS
* Fetch API

---

## How to Run the Project

1. Clone the repository

```bash
git clone https://github.com/srivenkateswaran6002/Movie-Search.git
cd Movie-Search
```

2. Install the required dependencies

```bash
npm install
```

3. If an API key is required, create a `.env` file in the root directory and add the API key

```env
VITE_API_KEY=your_api_key_here
```

(Check the API call in the source code to verify the environment variable name.)

4. Start the development server

```bash
npm run dev
```

Open the URL shown in the terminal in a browser to view the application.

---

## How the Application Works

* The user enters a movie name in the search input field
* An API request is sent using the entered value
* The response data is stored in React state
* The UI updates automatically to display the movie results

---

## Limitations

* Basic user interface
* Limited error handling
* Depends completely on the external movie API
* No detailed view for individual movies

---

## Future Improvements

* Add proper loading and error states
* Improve UI and responsiveness
* Display more detailed movie information
* Add pagination or result filtering
