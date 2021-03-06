# Book Library System
This is a book management app where the user can do the CRUD operations. User can `add/edit/delete` books. Data's are served from the express server and any `update/delete/edit` in the books will write in the json file.

A searchbox has been added to search the book list.

![Library](https://github.com/knowankit/book-library-system/blob/master/preview.png?raw=true)

## Installation
Follow the steps to run this app locally : -

Clone the repository and change the directory to `book-library-system` and run
```
$ npm install
```

Now switch to `client` folder (`cd client`) and Run the below command. This will install all the client dependencies.
```
$ npm install
```

Now switch to `server` folder by running `cd ../server`

Run the below command in server folder. This will install all the server related dependencies
```
$ npm install
```

Now all the dependencies are installed and our app can be started. Go to the root folder of this project by switching to `book-library-system` folder

To start the app run the below command : -
```
$ npm run dev
```

This will start the node server and then it will start the react application

This application will run on `http://localhost:3000` and server will run at `http://localhost:3001`


## Built with

This app is build with the latest tech stack : -

* ReactJs
* Typescript
* Redux
* Node
* Express

## License

MIT Licensed. Copyright (c) Ankit Kumar 2021.
