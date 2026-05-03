Q01 : what is nexJs?
Next.js is a React-based framework.
it provides features like server-side rendering(ssr), static site generation(ssg), routing, and performance optimization. 
It helps in building fast and SEO-friendly web applications without much configuration.

Q02 :  Difference between React vs Next.js
react is a library || nextJs is framework
renderng in client side (CSR) || rendering on server side
routing manual || file based Rouning
not good for SEO || SEO friendly
performamce Depend on developer || optimized by default

React is used to build UI, while nextJs provide complete structre with routing, rendering startergy & perofrmence optimization


Q03 : What is SSR vs CSR
CSR (client side rendering)
-> Rendeing happen on Browser
-> js load -> api call -> UI renders
-> slower load
-> not seo friendly

SSR (Server side rendering)
-> HTML is generete on server side
page come pre-rendered
fast load
seo friendly

in scr rendering happen on client side in ssr html rendering on sever side & then sent to client


What is SSG (Static Site Generation)
SSG generates pages during build time, so users get pre-built HTML, making it very fast.



Routing in Next.js
Next.js routing is automatic based on file structure, so no need for React Router.
pages/index.js → /
pages/about.js → /about



Why Next.js is faster?
ssr, ssg code splitting, image optimization & lazy loading
nextJs is fast because it render file on server side & reduce client side work & optimize resources automatically


sinse i havent work on production yet, but i can understand a core concepts of ssr, ssg, routing.since its based on React in can quickly start working on it. 