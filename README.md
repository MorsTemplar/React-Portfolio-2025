# React CSS Portfolio

A personal portfolio website converted from HTML/CSS into a React application using Material-UI (MUI) and React Router. Demonstrates best practices in component architecture, global/local styling, dynamic routing, form validation, and responsive design.


**Repo:** [https://github.com/your-username/react-css-portfolio](https://github.com/MorsTemplar/React-Portfolio-2025)

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
- [Available Scripts](#available-scripts)  
- [Folder Structure](#folder-structure)  
- [Component Breakdown](#component-breakdown)  
- [Styling](#styling)  
- [Deployment](#deployment)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Features

- **Layout Components**:  
  - **Header**: MUI AppBar with profile avatar and placeholder menu  
  - **Sidebar**: MUI Drawer, collapsible on mobile, permanent on desktop  
  - **Footer**: Fixed footer with copyright  

- **Pages & Routing** (React Router v6):  
  - **Home**, **Education**, **Projects**, **Contact**  
  - Lazy-loaded routes for performance  

- **Global State**:  
  - React Context for dynamic page titles  

- **Projects Section**:  
  - Reusable `ProjectCard` component with hover transitions  

- **Education Section**:  
  - MUI Table with striped rows and neon styling  

- **Contact Form**:  
  - Formik + Yup validation  
  - MUI TextField and Snackbar feedback  

- **Responsive Design**:  
  - Mobile-first layouts with `useMediaQuery` & CSS media queries  

- **Best Practices**:  
  - Functional components & hooks (useState, useEffect, useContext)  
  - CSS Modules for scoped styling  
  - Lazy loading, performance optimizations, semantic HTML  

---

## Tech Stack

- **React** 18+  
- **Material-UI** v5  
- **React Router DOM** v6  
- **Formik & Yup** (form state + validation)  
- **CSS Modules** for component-level styles  
- **Git & GitHub** for version control  
