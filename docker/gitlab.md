In my MERN project we implemented CI/CD using GitLab.
We created a pipeline using a .gitlab-ci.yml file which had multiple stages like install, test, build, and deploy.
Whenever code was pushed to the main branch, GitLab automatically triggered the pipeline.
It installed dependencies, ran tests, built the React application, and deployed the backend to the server.
This helped automate deployments and ensured code quality before releasing changes.

1️⃣ What is a CI/CD Pipeline?
A CI/CD pipeline is an automated process that builds, tests, and deploys the application whenever code changes are pushed to the repository.

2️⃣ What are Stages in GitLab CI/CD?
install → test → build → deploy

5️⃣ What is .gitlab-ci.yml?
This file defines the entire pipeline configuration.

It contains:
stages
jobs
scripts
deployment logic

7️⃣ What are Environment Variables in CI/CD?
Environment variables store sensitive information like:
API keys
database passwords
server credentials
