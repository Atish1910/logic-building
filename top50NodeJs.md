**Q:** How Node.js works internally
**A:** Node.js runs on the V8 engine and uses a single-threaded event loop. It executes synchronous code via the call stack and handles asynchronous operations using queues. libuv manages async I/O operations, making Node.js non-blocking and efficient.

**Q:** What is Callback
**A:** A callback is a function passed as an argument to another function, which is executed after the completion of a task, commonly used in asynchronous operations in Node.js.

->

What is Callback Hell
->Callback hell is a situation where multiple nested callbacks make the code difficult to read and maintain. It is usually solved using promises or async/await for cleaner and more manageable asynchronous code.

What is Event Loop?
-> The event loop in Node.js is responsible for handling asynchronous operations. It continuously monitors the call stack and, when it’s empty, executes tasks from the microtask queue first and then from the callback queue.
What is middleware

What is populate() method
populate() in Mongoose is used to fetch related documents by replacing ObjectId references with actual data from another collection, similar to a join in relational databases.

What is lookup in mongodb aggregation
$lookup in MongoDB is an aggregation stage used to perform a join between two collections by matching fields and returning combined results as an array.

What is microservices and monolith
monolith : A monolithic architecture is a single application where all functionalities are tightly coupled and deployed together.
microservices : Microservices architecture is a design where an application is divided into small, independent services that communicate with each other via APIs.

which architecture you are using monolith or microservices
-> I’m currently using a monolithic architecture in my projects because it’s easier to build and manage for small-scale applications. All modules like authentication, booking, and payments are handled in a single backend. However, I understand microservices architecture and how it helps in scaling large applications by splitting services independently

what is vertical and horizontal scaling
Vertical scaling means increasing the resources (CPU, RAM) of a single server to handle more load.
Horizontal scaling means adding multiple servers to distribute load and handle more traffic.

advantages and disadvantages of vertical and horizontal scaling
⬆️ Vertical Scaling (Scale Up)
👉 Increase resources of a single server
✅ Advantages
Simple to implement — no architecture change
No code changes needed
Easier to manage (single system)
No need for load balancing

❌ Disadvantages
Limited scalability (hardware limit)
Single point of failure ⚠️
Can become very expensive
Downtime may be required for upgrades

➡️ Horizontal Scaling (Scale Out)
👉 Add multiple servers and distribute load
✅ Advantages
Highly scalable (add more machines anytime)
Fault tolerant (one server fails ≠ system down)
Better performance under high traffic

❌ Disadvantages
Complex architecture
Requires load balancer
Needs data consistency handling (sessions, DB sync)
Debugging & monitoring is harder

Vertical: Upgrade instance (more RAM/CPU)
Horizontal: Add multiple EC2 instances + load balancer

Difference between monolith and MVC architecture
Monolith = system architecture (how app is built & deployed)
MVC = design pattern (how code is structured inside the app)
Monolith is an architectural style where the entire application is built and deployed as a single unit, while MVC is a design pattern used to organize code into Model, View, and Controller. They are not mutually exclusive — MVC is often used within a monolithic application to structure the code.

What is indexing in mongodb
Indexing is a way to:
Improve query performance
Allow MongoDB to find data faster without scanning entire collection
before index o(n) after index o(log n)
index craete saparate column in sorted way
use only for read intensive database
db.users.createIndex({email : 1})

Indexing in MongoDB improves query performance by creating a data structure that allows faster data retrieval without scanning the entire collection, but it increases storage and can slow down write operations.

Which ORM or ODM Library you are using
Since I work with MongoDB, Mongoose acts as an ODM (Object Document Mapper) rather than a traditional ORM. It helps me define schemas, perform validations, and interact with the database in a structured way instead of writing raw queries.
I also have theoretical knowledge of ORMs like Sequelize for relational databases like PostgreSQL.

without ODM library can we still connect to MongoDB?
Yes, we can connect to MongoDB without using an ODM like Mongoose by using the official MongoDB Node.js driver. However, using an ODM provides additional features like schema validation and easier data modeling, which simplifies development.

If you need to design whatsapp application then which Database you will prefer and why
1️⃣ Message Storage → NoSQL (Amazon DynamoDB)
Why:
Handles huge write volume
Distributed architecture
High availability
Fast reads/writes

2️⃣ User Data → SQL DB
Why:
Structured data (users, relationships)
ACID transactions

3️⃣ Caching → Redis
Online status
Recent chats

4️⃣ Media Storage
Amazon S3

For a WhatsApp-like system, I would prefer a NoSQL database like Cassandra or DynamoDB for storing messages because it supports high write throughput and horizontal scalability. For structured data like user profiles, I would use a relational database like PostgreSQL. This hybrid approach ensures both performance and data consistency.

Have you used multer

have you implemented cron jobs?

If you need to implement subscription module how would you implement?

What is libuv?

Difference Between horizontal and vertical scaling.

advantages of microservices over the monolith.

If API takes 3 to 4 sec how would you optimize?

If you are using find() method to find user details how would you optimize it further

What is workers? cluster?

If there is XSS attack how would you avoid?

What is CORS?

How would you secure your APIs.

Difference between DDOS and DOS attack.

Explain me working of Payment Integration step by step

Explain the working of OAuth 2.0 step by step? how would you imeplement?

How the Google will verify who is calling the authentication api ?

Difference between server shutdown and server restart

If you want to vertical scale the sever how would it will be implemented

have you used bcrypt

what is garbage collection ? how it would work?

How would you implemented Role Based Access

What is Webhook?

What is Indempotency?

Diiference between MongoDB and SQL

Have you use Kafka, Redis cache?

Debouncing and Throttling

Access Token v/s Refresh Token

how to achive 0 downtime in nodeApp

aggregation, lookup

how to avoid memory leak in nodeJs
