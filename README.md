# MERN Book Search Engine

This is a book search engine application built using the MERN stack (MongoDB, Express.js, React, and Node.js). The application uses GraphQL and Apollo Server to handle queries and mutations, providing an efficient and modern API structure. Users can search for books using the Google Books API and save their favorite books to their account.

![Book Search Engine](./images/ss.png)

## Features

- Search for books using the Google Books API.
- Save books to your account for future reference.
- View a list of saved books with details such as title, author, and description.
- Register and log in to manage your saved books.
- Remove books from your saved list as desired.

## Technologies Used

- **MongoDB:** For the application's database.
- **Express.js:** For the back-end server.
- **React:** For the front-end interface.
- **Node.js:** For server-side JavaScript runtime.
- **GraphQL and Apollo Server:** For handling API queries and mutations.

## Installation

1. Clone the repository:
    ```shell
    git clone https://github.com/Philip-Tom/Book-Search-Engine.git
    ```

2. Navigate to the project directory:
    ```shell
    cd book-search-engine
    ```

3. You'll find two separate directories: `server` and `client`. Install dependencies for each:

    **For all:**
    ```shell
    npm install
    ```

## Usage

1. Start the server & Client:
    ```shell
    npm run develop
    ```

    The server will run on `http://localhost:3001`.

    The client will run on `http://localhost:3000`.

3. Once both server and client are running, open a web browser and navigate to `http://localhost:3000` to access the application.

4. Use the search bar to find books and click the "Save This Book!" button to add a book to your saved list.

5. To view your saved books, click the "Saved Books" menu option.

## Deployment

The application is deployed at [LIVE URL🌍](https://book-search-engine-1-fjko.onrender.com/) Visit the live URL to use the application.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b your-branch-name`).
3. Make your changes and commit them (`git commit -am 'Add some feature'`).
4. Push your branch (`git push origin your-branch-name`).
5. Create a new Pull Request.


## Contact
- [Github](https://github.com/Philip-Tom/Book-Search-Engine)
