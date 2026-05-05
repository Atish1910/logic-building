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

---

## Q.14 Which ODM Library you have used?

---

## Q.15 without ODM library can we still connect to MongoDB?

- ***

## Q.16 If you need to design whatsapp application then which Database you will prefer and why

- ***

## Q.17 Have you used multer

- ***

## Q.18 have you implemented cron jobs?

---

## Q.19 If you need to implement subscription module how would you implement?

---

## Q.20 What is libuv?

- ***

## Q.21 Difference Between horizontal and vertical scaling.

- ***

## Q.22 advantages of microservices over the monolith.

---

## Q.23 If API takes 3 to 4 sec how would you optimize?

---

## Q.24 If you are using find() method to find user details how would you optimize it further

- ***

## Q.25 What is workers? cluster?

- ***

## Q.26 If there is XSS attack how would you avoid?

---

## Q.27 What is CORS?

---

## Q.28 How would you secure your APIs.

- ***

## Q.29 Difference between DDOS and DOS attack.

---

## Q.30 Explain me working of Payment Integration step by step

---

## Q.31 Difference between server shutdown and server restart

- ***

## Q.32 If you want to vertical scale the sever how would it will be implemented

- ***

## Q.33 have you used bcrypt

- ***

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
