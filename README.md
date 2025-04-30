# URL Shortening Service

A simple JavaScript-based URL shortening API that supports CRUD operations and access statistics.

## Features

- Shorten long URLs to short codes  
- Redirect to original URLs  
- Track clicks and metadata  
- Update or delete short URLs  
- Simple RESTful interface  

## Usage

1. Clone the repo and install dependencies:  
   `git clone https://github.com/NotMort/URL_Shortening_Service.git && cd URL_Shortening_Service && npm install`

2. Start the server:  
   `npm start` (default on `http://localhost:3000`)

3. API endpoints:  
   - `POST /shorten` – create a short URL  
   - `GET /:shortCode` – redirect to original URL  
   - `GET /stats/:shortCode` – get stats  
   - `PUT /update/:shortCode` – update URL  
   - `DELETE /delete/:shortCode` – delete URL
