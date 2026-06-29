Q1 : How Node.js works internally
-> Node.js runs on the V8 engine and uses a single-threaded event loop. It executes synchronous code via the call stack and handles asynchronous operations using queues. libuv manages async I/O operations, making Node.js non-blocking and efficient.

02 : What is event loop in Node?
-> The event loop in Node.js is responsible for handling asynchronous operations. It continuously monitors the call stack and, when it’s empty, executes tasks from the microtask queue first and then from the callback queue.

03 : What is non-blocking I/O?
-> Non-blocking I/O means Node.js does not wait for operations like file or network requests to complete. Instead, it continues executing other code and handles the result later using callbacks, promises, or async/await, making it efficient and scalable.

04 : What is libuv?
libuv is a C library used by Node.js to implement the event loop and handle asynchronous operations like file and network I/O using a thread pool and OS-level APIs.

05 : What is middleware?
Middleware is a function in Express that executes during the request-response cycle and can modify the request, response, or end the request, or pass control to the next middleware.

06 : Types of middleware?
-> 1-> Application-Level Middleware
2-> Route-Level Middleware
3-> Router-Level Middleware
4-> Built-in Middleware
5-> Error-Handling Middleware
6-> Third-Party Middleware

07 : How request flows in Express?
1️⃣ Client sends request -> 2️⃣ Request enters Express app-> 3️⃣ Middleware execution -> 4️⃣ Route matching -> 5️⃣ controller logic -> 6️⃣ Response sent back -> 7️⃣ Error handling (if any)

08 : How to handle errors globally?
In Express, global error handling is done using a centralized error-handling middleware with four parameters (err, req, res, next). Errors are passed using next(err), and the middleware sends a consistent response, avoiding duplicate try-catch logic across routes.

```javascript
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

app.use(errorHandler);
catch (err) { next(err); }

```

09 : What is next()?
next() is a function used in Express middleware to pass control to the next middleware or route handler.

10 : How Node handles multiple requests?
Node.js handles multiple requests using a single-threaded event loop and non-blocking I/O. Instead of creating a new thread for each request, it delegates time-consuming operations like database or file access to libuv or the OS. This allows Node.js to process many requests concurrently without blocking the main thread.
