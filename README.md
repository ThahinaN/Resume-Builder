# Rsume builder 
- build a project using vit + react
npm create vite@latest resume-builder -- --template react
- removed unwanted elements from the components 
- installed pakages for styling 
  ->install material ui 
  ->google fonts
  ->react icons
  ->bootstrap cdn link 

- project structuring (component creation)

- install react router dom to create path and routing related actions
- wrap app.jsx with BrowserRouter in main.jsx

- define path and elements inside routes using route in app.jsx

- design components

- collect resume details from user inputs using state (onChange) state defined in parent component as an object
- display resume details in preview components using state lifting , because react only supports unidirectional dataflow 

















This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
