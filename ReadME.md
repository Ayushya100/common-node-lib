# Finance Tracker Micro-Service Utility Library
A shared internal library providing core utilities and reusable modules for Node.js microservices built with Express. This library will help in reducing the code duplication and ensures consistent implementation across all the services.

## Features
- Centralized logging
- Standard response codes & messages
- Database utilities for connection handling
- Predefined API Response and API Error structrues
- Reusable middlewares: Access Token validation, Parameter validation, & Global error handler.
- Reusable base classes for: App initialization, Router configuration, Service logic, & Controller logic.

## Documentation
- **DB Model Documentation:** [Finance Tracker DB Model](https://app.eraser.io/workspace/4Hwce2ZbbDoeHojTohVe?origin=share)

## 🛠️ Setup Instructions

```bash
# Publish package commands
- Step 1: Add publishConfig to package.json
- Step 2: Generate new token (classic) with scopes involving (write:packages, read:packages, & repo). Copy the token and store it.
- Step 3: Authenticate with npm for Github with the below command:
npm login --registry=https://npm.pkg.github.com
- Step 4: Publish the package with below command:
npm publish
```
---
**Finance Tracker** - Simplifying Financial Management for Everyone!