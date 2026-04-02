# 🚀 Node + Express Interview Questions (3 YOE)

---


## 🔹 1. Node Basics

- What is Express.js?
- Why do we use Express instead of Node’s http module?
- What is middleware in Express?
- What are `req`, `res`, and `next`?
- How does Express handle routing?

## 🔹 1. Express Basics

- What is Express.js?
- Why do we use Express instead of Node’s http module?
- What is middleware in Express?
- What are `req`, `res`, and `next`?
- How does Express handle routing?

---

## 🔹 2. Middleware (VERY IMPORTANT 🔥)

- Types of middleware in Express?
- Difference between application-level and router-level middleware?
- What is error-handling middleware?
- What happens if `next()` is not called?
- How to create custom middleware?

### 💡 Scenario

- You have authentication middleware—how will you restrict routes?

---

## 🔹 3. Routing

- How does routing work in Express?
- Difference between `app.get()` and `app.use()`?
- What is route params vs query params?
- How to handle dynamic routes?

### 💡 Example:

```js
app.get("/user/:id", (req, res) => {});
```

# 🚀 Node + Express Interview Notes (Advanced Topics)

---

## 🔹 4. Request & Response Handling

- How do you send JSON response?
- Difference between `res.send()` and `res.json()`?
- How do you handle POST request data?
- What is `req.body`, `req.params`, `req.query`?

---

## 🔹 5. Error Handling 🔥

- How does Express handle errors?
- What is global error handler?
- How to handle async errors?

### 💡 Scenario

- If an API crashes, how will you prevent server crash?

---

## 🔹 6. REST API Design

- What is REST API?
- Difference between PUT and PATCH?
- What are HTTP status codes?
- How to structure a REST API?

### 💡 Scenario

- Design CRUD API for users.

---

## 🔹 7. Authentication & Authorization 🔥

- What is authentication vs authorization?
- What is JWT (JSON Web Token)?
- How does login/signup flow work?
- Where do you store tokens?

### 💡 Scenario

- How will you protect private routes?

---

## 🔹 8. Database Integration (MongoDB)

- How do you connect Node with MongoDB?
- What is Mongoose?
- Difference between Schema and Model?
- What are hooks/middleware in Mongoose?

### 💡 Scenario

- How to handle duplicate users (same email)?

---

## 🔹 9. Async Programming 🔥

- What is async/await?
- Difference between callbacks, promises, async/await?
- How does Node handle async operations?

### 💡 Scenario

- What happens if you don’t use `await`?

---

## 🔹 10. Security (VERY IMPORTANT)

- What is CORS?
- What is helmet?
- What is rate limiting?
- How to prevent XSS / CSRF?

### 💡 Scenario

- Your API is getting too many requests—what will you do?

---

## 🔹 11. Performance & Scalability

- What is clustering in Node.js?
- What is load balancing?
- How to optimize API performance?

### 💡 Scenario

- Your API is slow—how will you debug?

---

## 🔹 12. File Upload

- How do you upload files in Express?
- What is multer?

---

# 🔥 MOST ASKED QUESTIONS (REVISION BEFORE INTERVIEW)

- Middleware flow (`req → res → next`)
- JWT authentication flow
- Error handling (global middleware)
- REST API design
- `req.body` vs `req.params` vs `req.query`
- async/await vs promises
- Mongoose basics
