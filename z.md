## Q.1 How Node.js works internally

- Node.js runs on the V8 engine and uses a single-threaded event loop.
- It executes synchronous code via the call stack and handles asynchronous operations using queues.
- libuv manages async I/O operations, making Node.js non-blocking and efficient.

## Q.2 What is Callback

- A callback is a function passed as an argument to another function, which is executed after the completion of a task, commonly used in asynchronous operations in Node.js.

---

## Q.3 What is Callback Hell

- Callback hell is a situation where multiple nested callbacks make the code difficult to read and maintain. It is usually solved using promises or async/await for cleaner and more manageable asynchronous code.

---

## Q.4 What is Event Loop?

- The event loop in Node.js is responsible for handling asynchronous operations. It continuously monitors the call stack and, when it’s empty, executes tasks from the microtask queue first and then from the callback queue.

## Q.5 What is middleware

- middleware are function that can handle req & respose & pass a controller to next middleware we use middle ware for auth & authurization & we invoke

## Q.6 What is populate() method

- populate() in Mongoose is used to fetch data from another collection. It replaces the ObjectId with actual related data, like a join in SQL.

---

## Q.7 What is lookup in mongodb aggregation

- $lookup in MongoDB is used to join data from two collections. It matches fields and returns the related data together as an array.

---

## Q.8 What is microservices and monolith

- monolith : A monolithic architecture is a single application where all functionalities are tightly coupled and deployed together.
- microservices : Microservices architecture is a design where an application is divided into small independent services that communicate with each other via APIs.

## Q.9 which architecture you are using monolith or microservices

- I’m currently using a monolithic architecture in my projects because it’s easier to build and manage for small-scale applications.
- All modules like authentication, booking, and payments are handled in a single backend.
- However, I understand microservices architecture and how it helps in scaling large applications by splitting services independently

## Q.10 what is vertical and horizontal scaling

- Vertical: Upgrade instance (more RAM/CPU)
- Horizontal: Add multiple EC2 instances + load balancer

## Q.10 advantages and disadvantages of vertical and horizontal scaling

advantages and disadvantages of vertical and horizontal scaling

--- ⬆️ Vertical Scaling (Scale Up)

- 👉 Increase resources of a single server
- ✅ Advantages
- Simple to implement — no architecture change
- No code changes needed
- Easier to manage (single system)

❌ Disadvantages

- Limited scalability (hardware limit)
- Single point of failure ⚠️
- Can become very expensive
- Downtime may be required for upgrades

➡️ Horizontal Scaling (Scale Out)
👉 Add multiple servers and distribute load
✅ Advantages
Highly scalable (add more machines anytime)
Fault tolerant (one server fails ≠ system down)
Better performance under high traffic

❌ Disadvantages

- Complex architecture
- Requires load balancer
- Debugging & monitoring is harder

---

## Q.11 Difference between monolith and MVC architecture

- Monolith = system architecture (how app is built & deployed)
- Monolith is an architectural style where the entire application is built and deployed as a single unit,
- MVC = design pattern (how code is structured inside the app)
- while MVC is a design pattern used to organize code into Model, View, and Controller.

---

## Q.12 What is indexing in mongodb

- Indexing is a way to:
- Improve query performance
- Allow MongoDB to find data faster without scanning entire collection
- index craete saparate column in sorted way
- use only for read intensive database

`db.users.createIndex({email : 1})`

- ***

## Q.13 Which ORM Library you are using

- Since I work with MongoDB, Mongoose acts as an ODM (Object Document Mapper) rather than a traditional ORM.
- It helps me define schemas, perform validations, and interact with the database in a structured way instead of writing raw queries.

---

## Q.15 without ODM library can we still connect to MongoDB?

- Yes, we can connect to MongoDB without using an ODM like Mongoose by using the official MongoDB Node.js driver.
- However, using an ODM provides additional features like schema validation and easier data modeling, which simplifies development.

---

## Q.16 If you need to design whatsapp application then which Database you will prefer and why

- 1️⃣ Message Storage → NoSQL (Amazon DynamoDB)
  Why:
  Handles huge write volume
  Distributed architecture
  High availability
  Fast reads/writes

- 2️⃣ User Data → SQL DB
  Why:
  Structured data (users, relationships)
  ACID transactions

- 3️⃣ Caching → Redis
  Online status
  Recent chats

- 4️⃣ Media Storage
  Amazon S3

- For a WhatsApp-like system, I would prefer a NoSQL database like DynamoDB for storing messages because it supports high write volume and horizontal scalability. For structured data like user profiles, I would use a relational database like PostgreSQL. This hybrid approach ensures both performance and data consistency.

- ***

## Q.17 Have you used multer

- I used it as middleware in Express to handle multipart/form-data and store files on the server using diskStorage.
- I also configured filename and destination , and handled single file uploads using upload.single().

`const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
`

- ***

---

---

## Q.20 What is libuv?

- libuv is a C library used by Node.js to implement the event loop and handle asynchronous operations like file system and network I/O using a thread pool and OS-level APIs.

---

## Q.23 If API takes 3 to 4 sec how would you optimize?

- If an API is taking 3–4 seconds, I would first identify the bottleneck using logging.
- Then I would optimize database queries using indexing,
- implement caching for repeated data, reduce unnecessary API calls.
- If needed, I would also scale the system horizontally

---

## Q.24 If you are using find() method to find user details how would you optimize it further

- If you are using find() method to find user details how would you optimize it further
- Use Indexing db.users.createIndex({ email: 1 });
- Select Only Required Fields User.find({ email: "test@gmail.com" }).select("name email");
- Limit Results User.find().limit(10);
- Avoid Unnecessary populate()

- ***

## Q.25 What is workers? cluster?

- A worker is a separate thread used to do heavy work so the main app doesn’t get slow.
- You hire a helper (worker) You cook & Helper cuts vegetables

- Cluster means running multiple Node.js processes to handle more users.
- You open 4 counters (cluster) then you can 4 customers handled at once

## Q.26 If there is XSS attack how would you avoid?

- “XSS (Cross-Site Scripting) happens when malicious scripts are injected into a webpage via input.
- I sanitize and validate user input, avoid rendering raw HTML, and use security headers like CSP(content security policy)

## Q.27 What is CORS?

- CORS (Cross-Origin Resource Sharing) is a security feature in the browser that controls which websites are allowed to access APIs from another domain.

---

## Q.28 How would you secure your APIs.

- 1. Authentication (who are you?),
- 2. Authorization (what can you access?),
- 3. Input validation (Prevent attacks like SQL injection),
- 4. Rate limiting (Prevent too many requests),
- 5. Security headers Use Helmet in Node.js (Use Helmet in Node.js)

- ***

## Q.29 Difference between DDOS and DOS attack.

- DoS (Denial of services) Attack from one computer
  Sends too many requests
  Server becomes slow

- DDoS
  Attack from many computers (bots)
  All send requests together

---

## Q.30 Explain me working of Payment Integration step by step

- Payment integration works by creating an order on the backend, sending it to the frontend, opening the Razorpay checkout, and then verifying the payment on the server.
  steps ->
- On frontend User selects product and clicks Pay Now
- Backend creates order (You call Razorpay API from Node)
- 3. Send order to frontend
- Open Razorpay checkout (frontend) & User completes payment
- Razorpay sends response
- Verify payment

## Q.31 Difference between server shutdown and server restart

- Server shutdown means completely stopping the server, while server restart means stopping the server and then starting it again.
- 🔹 Server Shutdown
  Server is stopped completely
  No requests are handled
  Needs manual start again

- 🔹 Server Restart
  Server is stopped and started again automatically

## Q.32 If you want to vertical scale the sever how would it will be implemented

- Vertical scaling means upgrading the server’s resources like CPU and RAM, and in Node.js we can use cluster to utilize multiple cores.

## Q.33 have you used bcrypt

- “Yes, I have used bcrypt to hash user passwords before storing them in the database for security.”
  `const hashedPassword = await bcrypt.hash(password, 10);`

## Q.34 what is garbage collection ? how it would work?

---

## Q.35 How would you implemented Role Based Access

- ***

## Q.36 What is Webhook?

- ***

## Q.37 What is Indempotency?

---

## Q.38 Diiference between MongoDB and SQL

---

## Q.39 Have you use Redis cache?

- ***

## Q.40 Debouncing and Throttling

- ***

## Q.41 Access Token v/s Refresh Token

---

## Q.42 how to achive 0 downtime in nodeApp

---

## Q.43 aggregation, lookup

---

## Q.44 how to avoid memory leak in nodeJs

- ***
