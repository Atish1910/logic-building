1. Client-Server Architecture : almost every web application that you use is built on very powerful concept of client server Architecture here how does it works on left side there is any frontend application (client) on other side there is (server) a machine that runs continously & waiting to handle incoming request, a client sends request to store, retrive or modify data the server receive request process it perform necessay operations & sends back response to client.

2. IP Address : a client dosent know where the server is, it needs address & location to communicate it, on the internat computer identify each other using ip addresses. which works like phone number for server, every publically deployed server has unique ip address eq : 34.120.10.5. when a client wants to interact with a service it must send request to correct lp address.

3. DNS : instead of relying on hard to rember ip addresses we use something much more human friendly domain names, but we need to map dns to its corresposnding ip address.
   when you ask any website (gladowl.in) dns ask for corrosponding ip address to server once dns server resposnd with ip our brower establish a connection to server & make a request to find any domain name in cmd need to write PING youtube.com

4. Proxy/Reverse Proxy : when we visit a website our request dosent always go directly to server some times it passes through PROXY/ REVERSE PROXY first. proxy server is act as middleman between device & internet. when we request any server proxy will forword our request to target server retrive response & sends it back to you. aproxy server hide your ip address & keeping your location & idendity private
   REVERSE PROXY works other way around it intercept the client request & forword them to backend service based on predefined rules

5. Latency : whenever clients communicate with server there is always some delay one of main reason is physical distace. for ex : if our server is in newYork but the user in india sends arequest the data has to travel half way qccress the world & resposnce has to return again half way around world this round trip is called letency. High letency can make application feel slow & un resposnsive. one way to reduce letancy by seploying our server at multiple data centers worldwide, this way users can connect with nearsest server. instead of waiting for data to travel accress globe.

6. HTTP/HTTPS : our brower & server can communcate using set of rules called htttp/ https. the client send request to server, it includes a header, request type, browser types & cookies & sometimes reques body which carry form data, the server processes request & resposnse with http response either send requested data or error messaGE
   http has a major security law it sends data in plain text morden website uses https it encrypts all data using SSL or TLS protocol ensuring if anyone intercept request they cant read or altor it  
   HTTP is just a protocol

7. APIs : its stands for application programming interfaces. api is like a middleman that allow clients to communicate with servers. the clients sent request to api. api is hosted on server processes the request interact with databases or other services & prepare a api sends back resposnse in a structured format usually json or XML

8. Rest API : rest define set of rules how clients & server communicte over http in structured way. stateless, every request is undependent, everything is treated as resources (get, post, delet, upadte)

9. GraphQL : it introduce in 2015 by facebook. grapthQL lets clients ask for exctaly what they need - nothing more nothing less. for ex : if you need users data with recents post you can combine those request into one & fetch data you need in single query. grapthQL also comes with trade offs it require more processing on server side & its itnt as
10. Databases
11. SQL vs NoSQL : in system design we choose between sql & Nosql db 1) SQL : it store data in table format with predefined schema & follow ACID properties String consistancy structure relationships
    NoSql databases are High scalable & preformce, unstructre schema, store data in key-value, documents & collection grapth
    which one is better if you need structure relation data & strong consitancy then use sql
    if you want high scalable & flexible schema then use noSql

12. Vertical Scaling : so as our number of users grows then request hitting to application server. to update the existing server by adding more cpu, ram or storage this is called vertical scaling which make single machine moe powerful
13. Horizontal Scaling : instead of adding more server what if we add more servers to share the load this is called horizontal scaling. the workload distibute accress multiple machines
    more servers = more capacity it means the system can handle increasing traffing more effictively. if 1server goes down then other can take over

14. Load Balancers : load balancer sits between clients & backend server acting as trafic manager that distibute request in muktiple servers with Round Ribbin method if 1 server down then load balancer automatically transfer traffic to healthy server

15. Database Indexing : one of the quickest ways to speed up database read queries. indexing is like index page of Book, instead of scrolling through every page we jump directly to relavent section databse indexing works in same way. its super efficient lookup table that help databse quickly locate the require data without scanning entire table an index stores column values along with pointers to actual data rows in the table, indexes are typically created on column that are frequently queried such as primary key foregin keys & column frequently used in where conditions
    SELECT userId, firstName, email ,age FROM users WHERE email = 'atishkamble@gmail.com'
    inddexes speed up read & they slow down writes since index need too be updated whenever data changes thats why we should only index the most frequently access columns.
    indexing can improve read performance

16. Replication : just like we added more servers to handle increasing traffic we can scale our dabase by copies of it accross multiple server.
    we have a primary database also called as primary replica that handles all write operations, we have multiple read replicas that handles read queries when ever data upadted in primary database it gets copied to read replicas so they stays in sync replication improve read performance. it reduce load. if primary replica failed read replica can take over as new primary. replication is great for scaling read heavy application

17. Sharding : we devide the database in smaller parts called shards each shard is subset of total data ex : 3M Rows shard 1, 0-1M Rows,shard 2, 1-2M Rows,shard 3, 2-3M Rows, data us distibuted on a sharding key for ex : sharding key by divideing data this way we reduce database load each shard handle only a portions of queries & spead up read & write performnse sinse queries are distrubuted accress multiple shards it is alos known a horizontal partitioning

18. Vertical Partitioning : we split the database by columns , imagine we have a users table that stores profile details, login hostory & billing info as table grows query become slower because table must scan many columns even when a request only needs few specific fields to optimize this we use vertical Partitioning, where we spit user table into smaller more focused tables based on user patterns this improve query performance, each request oly savn relavent info instaed of scanning entire table

19. Caching : it is use to optimize performase of system by storing frequently accessed data in memory instead of repaetedly fetching data from database. one of the most common catching stratergies catch aside pattern ex : when user requested a data it first check cache & its served directly from catche we use time to live value or ttl

20. Denormalization : most relational database uses normilization to store data efficiently by breaking it into saparate tables.
    Denormalization reduces the number of joins by combining related data into single table
    instead of keeping users orders in saparate tables we craete user order tables that store user details along with latest orders.

21. CAP Theorem : (consistancy Aviliability & partition Tolerance)
22. Blob Storage : we is blob storage to store files like images, videos or documents in cloud. each file is unique url advantages are
23. CDN : content delivery network it delived content faster to usered based on there location cdn is globle network of disributed servers that work to gether & deliver content like html pages, js files, images, videos based on location content is sreve from closest cdn server. users experience with fatser load time with minimul buffering

24. WebSockets : it allow continous two-way communication between client & server over a single persistance connection. the client initiate a websocket connection(handshake) with server once establish the server can push update to client without wating for a request the client can send message to server instatntly this enables real time interactions & eliminate the need of polling

25. Webhooks
26. Microservices
27. Message Queues
28. Rate Limiting
29. API Gateways
30. Idempotency
