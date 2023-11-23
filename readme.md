# Forex Rates Table

This project is a website that displays a table of foreign currency rates obtained from the Fixer API. It retrieves the data using a GET request and allows you to view the original rates as well as the rates with an additional value added to them. The table also highlights certain values based on specific conditions.

## Features

- Fetches foreign currency data from the Fixer API using a GET request.
- Adds 10.0002 to each currency value and displays the updated rates in the table.
- Highlights values with an even number or the currency "HKD" with a red border.
- Provides a function to check if a value is an even number.

## Technologies Used

- HTML
- CSS
- JavaScript

## Installation

1. Clone the repository: `git clone https://github.com/2288marcus/Forex-Rates-Table.git`
2. Navigate to the project directory: `cd forex-rates-table`
3. Open the index.html file in a web browser.

## Usage

1. Open the website in a web browser.
2. The table will automatically load and display the foreign currency rates.
3. The "Rate" column shows the original rates retrieved from the API.
4. The "Updated Rate" column shows the rates with 10.0002 added to them.
5. Values with an even number or the currency "HKD" are highlighted with a red border.

## API Key

To access the Fixer API, an API key is required. Please make sure to replace the placeholder API key in the `script.js` file with your own valid API key or follow the instructions to obtain one from the Fixer API website.

## License

This project is licensed under the [MIT License](LICENSE).
