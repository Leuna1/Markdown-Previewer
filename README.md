# Markdown Previewer

This project was created to complete the certification of [Front End Development Libraries](https://www.freecodecamp.org/learn/front-end-development-libraries/) on [Free Code Camp](https://www.freecodecamp.org/).

## How to run the project

To run the project use the following commands:

### `npm install`
### `npm start`

## Technologies and Resources used on this project

React. Available on: [React NPM](https://www.npmjs.com/package/react)

Bootstrap 4. Available on: [Bootstrap 4 CDN](https://getbootstrap.com/docs/4.6/getting-started/introduction/)

Marked. Available on: [Marked NPM](https://www.npmjs.com/package/marked)

Domsanitizer. Available on: [Domsanitizer](https://www.npmjs.com/package/domsanitizer)

## Special notes

Domsanitizer was used to clean the input from the user before rendering it since we are using `dangerouslySetInnerHTML`. This way we can make sure that no malicious code will be executed.