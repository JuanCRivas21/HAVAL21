# Appointment Management

## Overview

This repository holds the appointment management application. It is currently in early development and contains the user registration form, bundled and served through webpack.

## How to launch the app

### Requirements

- [Node.js](https://nodejs.org/) v18 or higher (includes npm)

### Steps

1. Install dependencies:

   ```
   npm install
   ```

2. Start the app:

   - Development (starts a local server with hot-reload at `http://localhost:3000`):

     ```
     npm run dev
     ```

   - Production (bundles the app into the `dist/` folder):

     ```
     npm run build
     ```

## Developer's guide

### Development flow

- Every developer must create a branch following this naming standard:

  ```
  initials/ticket-number/ticket-title
  ```

- Once the work is ready, submit a Pull Request. Every Pull Request must get at least one approval before being merged.

- Unit tests are required for every new implementation. Do not submit a Pull Request without covering the new functionality with tests.
