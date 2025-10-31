# Team 2554 Website

This repository contains the source code for Team 2554's official website, built with Next.js and deployed on Firebase.

## Prerequisites

Before you begin, ensure you have installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Firebase CLI](https://firebase.google.com/docs/cli) (install using `npm install -g firebase-tools`)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Team2554/Team2554-Website.git
cd Team2554-Website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

## Building for Production

To create a production build:
```bash
npm run build
```

## Deployment

This website is configured to deploy to Firebase by default when you push changes to the GitHub repo. If, for any reason you have to manually deploy it, follow these steps:

NOTE: You need access to the Firebase project as well

1. Login to Firebase (if you haven't already):
```bash
firebase login
```

2. Initiate the Firebase project (if not already done) and follow the steps:
```bash
firebase init
```

3. Build the project:
```bash
npm run build
```

4. Deploy to Firebase:
```bash
firebase deploy
```

The site will be deployed to the Firebase hosting URL.

## Project Structure

- `/app` - Next.js pages and routing
- `/components` - Reusable React components
- `/lib` - Utility functions and data
- `/public` - Static assets
- `/styles` - Global styles and CSS modules
