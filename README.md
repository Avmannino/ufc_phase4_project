About this App
UFC DATABASE is an interactive dashboard and data visualizer the UFC or Ultimate Fighting Championship. Its principal aim is to provide an overview of past events and fight-cards, while also allowing the user to probe the data and explore various trends on a per-Fighter basis, right down to individual strike percentage.

The Data Source
These datasets were obtained via 3rd-party web-scrapers and fed into a backend database via FlaskSQL. The database is routed and parsed in Python and is linked to our React frontend. The charts & graphs are implemented via PlotlyJS and the event map utilizes a frontend API via a library called Mapbox.



------Back End------
# Navigate to the backend directory
cd backend

# Activate the virtual environment
pipenv shell

# Install dependencies from the Pipfile
pipenv install

# Run the Flask application
python app.py

*Database runs on (http://127.0.0.1:5555)*



------Front End------
# Navigate to the front-end directory
cd src 

# Install NPM dependencies
npm install

# Start the React application
npm start


