---
title: "Docker Tutorial"
excerpt: "Learn Docker fundamentals and best practices for containerizing applications. From basic concepts to advanced deployment strategies."
author: "Manish Kumar Mawatwal"
date: "2025-08-11"
category: "DevOps"
tags: ["Docker", "DevOps", "Containers", "Deployment"]
featured: true
image: ""
---

# Docker Tutorial

## Introduction

Docker has revolutionized how we develop, ship, and run applications. This tutorial will guide you through Docker fundamentals, from basic concepts to advanced deployment strategies. Whether you're a developer looking to containerize your applications or a DevOps engineer implementing CI/CD pipelines, this guide has you covered.

## What is Docker?

Docker is a platform for developing, shipping, and running applications in containers. Containers are lightweight, portable, and self-contained units that include everything needed to run an application:

- **Application code** and dependencies
- **Runtime environment** (Node.js, Python, etc.)
- **System libraries** and configuration
- **Operating system** components

## Getting Started with Docker

### 1. Installation

First, install Docker on your system:

```bash
# For Ubuntu/Debian
sudo apt-get update
sudo apt-get install docker.io

# For macOS
brew install docker

# For Windows
# Download Docker Desktop from docker.com
```

### 2. Basic Docker Commands

```bash
# Check Docker version
docker --version

# Run your first container
docker run hello-world

# List running containers
docker ps

# List all containers
docker ps -a
```

### 3. Creating Your First Dockerfile

```dockerfile
# Use official Node.js runtime
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
```

## Docker Compose for Multi-Container Applications

For complex applications with multiple services:

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db
    environment:
      - DATABASE_URL=postgresql://user:password@db:5432/myapp
  
  db:
    image: postgres:13
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=myapp
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

## Best Practices

1. **Use official base images** when possible
2. **Keep images small** by using multi-stage builds
3. **Don't run containers as root** for security
4. **Use .dockerignore** to exclude unnecessary files
5. **Tag your images** with meaningful versions

## Conclusion

Docker simplifies application deployment and ensures consistency across different environments. Start with simple containers and gradually explore advanced features like Docker Compose, Docker Swarm, and Kubernetes integration.

---

*This post is part of the DevOps series. Check out other related posts in the [blog](/blog).*
