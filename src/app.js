const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const app = express();
const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3070;
const MONGO_URI = `mongodb+srv://bjc6167:${process.env.MONGO_PASSWORD}@cluster0.jq54x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Middleware
app.use(bodyParser.json());



// Swagger definition
const swaggerOptions = {
  swaggerDefinition: {
      openapi: '3.0.0',
      info: {
          title: 'My API',
          version: '1.0.0',
          description: 'API documentation using Swagger',
      },
      servers: [
          {
              url: `http://localhost:${PORT}`,
          },
      ],
 components: {
   securitySchemes: {
       bearerAuth: {
           type: 'http',
           scheme: 'bearer',
           bearerFormat: 'JWT', 
       },
   },
},
  },
  apis: ['src/routes/*.js'], // Path to your API docs
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
   app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


//MongoDB Connection
mongoose.connect(`${MONGO_URI}`, {
  dbName: '421DB'
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
const itemsRouter = require('./routes/items');
const { eventNames } = require('./models/item');
app.use('/items', itemsRouter);

// Start the server
app.listen(PORT, HOST, () => {
  console.log(`Server is running on port ${PORT}`);
  //output .env variables
  console.log(`MONGO_URI: ${MONGO_URI}`);
});