const express = require('express');
const connect = require("./db")

connect();

const linksRouter = require("./Route/linkRoute")

const port = 8000;
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());
app.use('/', linksRouter)                                                             
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});





// const connect = require("./db")

// connect();

// const express = require('express');
// const linksRouter = require("./Route/linkRoute")
// // const postsRouter = require("./Router/postRoute")
// // const usersRouter = require("./Router/usersRoute")


// // var cors = require('cors')
// const port = 8000;
// const app = express();

// // const corsOptions ={
// //     origin:'http://localhost:8000', 
// //     credentials:true,            //access-control-allow-credentials:true
// //     optionSuccessStatus:200
// // }


// // app.use(cors(corsOptions));
// app.use(express.json());
// app.use('/links', linksRouter)                                                                 // "/user"<=path  ,  usersRouter<=route duudaj ajluulah backend
// // app.use('/posts', postsRouter)                                                                 // "/user"<=path  ,  usersRouter<=route duudaj ajluulah backend
// // app.use('/users', usersRouter)        

// // "/user"<=path  ,  usersRouter<=route duudaj ajluulah backend

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}/`);
// });