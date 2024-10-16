# Rick and Morty Character Explorer

## 🌌 Overview

Welcome to the Rick and Morty Character Explorer! This Next.js application allows users to dive into the multiverse of Rick and Morty, exploring characters from various dimensions and realities.

## 🚀 Features

- **User Authentication**: Simple user info storage using local storage
- **Character List**: Paginated list of Rick and Morty characters
- **Character Details**: Detailed modal view for each character
- **Responsive Design**: Seamless experience across devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Server-Side Rendering**: Fast initial load and SEO-friendly
- **GraphQL Integration**: Efficient data fetching from the Rick and Morty API

## 🛠 Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) 
- [Chakra UI](https://chakra-ui.com/) 
- [Apollo Client](https://www.apollographql.com/docs/react/) 
- [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## 🏗 Project Structure
rick-and-morty-explorer/
├── src/
│ ├── app/
│ │ ├── components/
│ │ ├── providers/
│ │ ├── layout.tsx
│ │ ├── page.tsx
│ │ └── ...
│ ├── lib/
│ │ ├── apollo-client.ts
│ │ ├── types.ts
│ │ └── utils.ts
│ └── generated/
│ └── graphql.ts
├── public/
│ ├── fonts/
│ └── images/
├── tests/
├── .husky/
├── next.config.mjs
├── tsconfig.json
├── jest.config.ts
└── package.json

## 🚦 Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/your-username/rick-and-morty-explorer.git
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add:
   ```
   NEXT_PUBLIC_RICK_AND_MORTY_API_URL=https://rickandmortyapi.com/graphql
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

Open [http://localhost:3000](http://localhost:3000).

## 🧪 Testing

To run tests:

```
  npm run dev
```
To run tests in watch mode:
```
npm run test:watch
```

## 🚢 Deployment

This project is set up for easy deployment on [Vercel](https://vercel.com/). Simply connect your GitHub repository to Vercel for automatic deployments on every push to the main branch.


## Build
```
npm run build
```

## Start
```
npm run start
```

## Lint
```
npm run lint
```

## GraphQl codegen
```
npm run generate
```

## 🙏 Acknowledgements

- [Rick and Morty API](https://rickandmortyapi.com/) 
- [Next.js Documentation](https://nextjs.org/docs)
- [Chakra UI](https://chakra-ui.com/)

