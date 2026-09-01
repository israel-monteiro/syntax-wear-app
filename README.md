# Syntax Wear

Syntax Wear is a responsive footwear e-commerce front-end built with **React** and **TypeScript**.

The project simulates the main experience of an online store, including product browsing, category filtering, product details, a persistent shopping cart, account forms, and shipping cost estimation by Brazilian postal code (CEP).

It was developed as a practical project to apply concepts such as component-based architecture, type-safe routing, global state management, form validation, API integration, and responsive design.

> **Project status:** Front-end portfolio project. It currently uses mock product data and does not include a backend, database, real authentication, checkout, or payment processing.

---

## Features

- Responsive home page with hero section, categories, and product gallery
- Product catalog with reusable product cards
- Dynamic product detail pages
- Dynamic category filtering
- Shopping cart with quantity controls and item removal
- Cart persistence using `localStorage`
- CEP validation and address lookup with ViaCEP
- Region-based shipping cost estimation
- Sign-in and sign-up interfaces
- Form validation with React Hook Form and Zod
- CPF validation
- Responsive desktop and mobile navigation
- About and Our Stores pages

---

## Tech Stack

| Technology | Purpose |
| --- | --- |
| React 19 | Component-based user interface |
| TypeScript | Static typing |
| Vite | Development server and production build |
| TanStack Router | Type-safe file-based routing |
| Tailwind CSS | Styling and responsive design |
| React Hook Form | Form state management |
| Zod | Schema-based validation |
| React Icons | Interface icons |
| ViaCEP API | Brazilian postal code lookup |
| ESLint | Code quality and linting |

---

## Shopping Cart

The shopping cart is managed globally using the **React Context API**.

Users can:

- Add products to the cart
- Increase or decrease quantities
- Remove products
- Access the cart through a drawer interface

Cart data is persisted in the browser using `localStorage`, allowing the cart to remain available after refreshing or reopening the application.

---

## Products and Categories

The current catalog uses local mock data stored in the project.

Each product contains information such as:

- ID
- Name
- Image
- Price
- Color
- Description
- Category

Products can be browsed through the complete catalog or filtered using dynamic category routes.

Product detail pages display additional information, pricing, PIX discount presentation, installment information, and the option to add the product to the cart.

---

## Forms and Validation

Forms are built using **React Hook Form** and **Zod**.

The registration form includes validation for:

- First and last name
- Email
- Password
- Password confirmation
- CPF
- Birth date
- Phone number

The project also includes custom CPF validation.

The authentication screens currently demonstrate client-side interfaces and validation only. They are not connected to a backend authentication service.

---

## Shipping Calculator

The product page includes a shipping cost estimator based on the customer's Brazilian postal code (CEP).

The flow is:

```text
CEP
 ↓
Validation
 ↓
ViaCEP API
 ↓
Customer region
 ↓
Shipping cost
```

The application retrieves location information from **ViaCEP** and assigns a fixed shipping cost according to the returned region.

| Region | Shipping Cost |
| --- | ---: |
| North | R$ 39.90 |
| Northeast | R$ 29.90 |
| Central-West | R$ 24.90 |
| Southeast | R$ 14.90 |
| South | R$ 19.90 |

The current values are client-side estimates and are not carrier quotes.

---

## Routes

The application uses **TanStack Router** with file-based routing.

| Route | Page |
| --- | --- |
| `/` | Home |
| `/products` | Product catalog |
| `/products/$productId` | Product details |
| `/products/category/$category` | Category products |
| `/about` | About |
| `/our-stores` | Our Stores |
| `/sign-in` | Sign In |
| `/sign-up` | Sign Up |

Store pages share a common layout containing the header, page content, and footer.

---

## Project Structure

```text
src/
├── assets/          # Images, fonts, icons and banners
├── components/      # Reusable React components
├── contexts/        # Shopping cart state
├── Interfaces/      # TypeScript interfaces
├── mocks/           # Product and category mock data
├── pages/           # Application routes
├── styles/          # Global styles and Tailwind configuration
├── utils/           # CPF validation and formatting utilities
├── App.tsx
└── main.tsx
```

---

## Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git

A Node.js version compatible with Vite 8 is required.

### Clone the repository

```bash
git clone https://github.com/israel-monteiro/syntax-wear-app.git
cd syntax-wear-app
```

### Install dependencies

```bash
npm install
```

### Run in development

```bash
npm run dev
```

Open the local URL displayed by Vite in the terminal.

---

## Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server |
| `npm run build` | Type-checks and creates the production build |
| `npm run lint` | Runs ESLint |
| `npm run preview` | Previews the production build locally |

---

## Environment Variables

The current version does not require environment variables.

The ViaCEP endpoint is accessed directly by the application and does not require an API key.

---

## Current Limitations

The project currently focuses on the front-end experience.

- Products and categories use local mock data
- Authentication is not connected to a backend
- There is no database or persistent user data
- Checkout and payment processing are not implemented
- Shipping costs are fixed client-side estimates

---

## Future Improvements

Possible next steps include:

- Backend and database integration
- Real user authentication
- Product API integration
- Product variants and stock management
- Search and advanced filtering
- Persistent user accounts and carts
- Checkout and payment integration
- Real carrier shipping rates and delivery estimates
- Automated tests
- Accessibility improvements

---

## Skills Demonstrated

This project demonstrates practical experience with:

- React component architecture
- TypeScript
- React Context API
- State persistence with `localStorage`
- File-based routing with TanStack Router
- React Hook Form and Zod
- REST API consumption
- Asynchronous JavaScript and error handling
- Responsive design with Tailwind CSS
- Reusable component development
- Form and CPF validation
- Git and GitHub workflow
- Production builds with Vite

---

## Author

Developed by **Israel Monteiro**.

[GitHub](https://github.com/israel-monteiro) · [Repository](https://github.com/israel-monteiro/syntax-wear-app)