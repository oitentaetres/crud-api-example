## App description:

- Nest.js demo API which access a back-end database that simulates a contacts list, allowing basic CRUD functions;
- The connection with the database is enabled by the Prisma library, implementing the REST API patterns;
- Allowed operations: read all contacts, read contact by ID, create contact, complete update, partial update and delete;
- Example data was generated using ChatGPT and should be stored on a database server, such as MySQL or similar;
- Example data can be replaced by other datasources.

## Setup and run steps:

- Use "npm install" to install all the required Node modules;
- Configure database parameters, such as username, password and listening port, on the .env file;
- If needed, use "prisma db push" to create the database table that replicates the Prisma schema; 
- If needed, populate the database using the script fake_contacts.sql, from the folder mysql;
- Use "npm run start" to run the app, which will be listening on the defined port (default: 3000);
- 

## API usage:

- Read (all contacts): GET request to the URL {base URL}/contacts;
- Read (based on ID): GET request to the URL {base URL}/contacts/{id};
- Create: POST request to the URL {base URL}/contacts, sending the parameters name, email and company on a URL encoded form;
- Update (complete): PUT request to the URL {base URL}/contacts/{id}, sending the parameters name, email and company on a URL encoded form;
- Update (partial): PATCH request to the URL {base URL}/contacts/{id}, sending one or more parameters from the list name, email and company on a URL encoded form;
- Delete (based on ID): DELETE request to the URL {base URL}/contacts/{id};

- The requests can be sent using Imsonia or a similar application, and the base URL default value is http://localhost:3000;

- The results from the operations will affect the data stored on the database.

