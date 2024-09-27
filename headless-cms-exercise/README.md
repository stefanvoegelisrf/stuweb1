# Headless CMS with VUE

## Setup
Below are listed the steps to create this project

### CMS
#### Set up Strapi
- Make sure Node & Python are installed
- Run `npx create-strapi@latest cms-backend`
  - Create Account: No
  - SQLite: Yes
  - Example Data & Structure: No
  - Typescript: Yes
  - Git Repository: No(if it already is inside a repository)
- Start Strapi with `npm run develop`
- Create admin account
- Created content collections
- Added content
- Add API token
  - 5ad1bb61481b8be90f9d6947b887144c9882057b7b896628023a5edf24cb95465f7bfad8a8a45bcdcff72e39aebcb21b44c0e68cd0b6de7b932c36a59742c67827a43d4097e304577573ed6662b53e0e08aed0664c4449c0521e9ff020aac9077ff2193751f3317615ef73e6111d92adaecf193891c8d36efebc2ca6cfd235e1

### Frontend

#### Create vue project
- Run `npm create vue@latest`
  - Typescript: Yes
  - JSX: No
  - Vue Router: Yes
  - Pinia: No
  - Vitest: No
  - E2E Test: No
  - ESLint: No
  - DevTools: No
- Navigate to project
- Run `npm install`
- Run `npm run dev`

#### Add primevue
- run `npm install primevue`
- Add styles by running `npm install @primevue/themes`
- Use Aura theme
```javascript
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
```

#### Add tailwind
https://tailwindcss.com/docs/guides/vite#vue

#### Add tailwind primevue
https://primevue.org/tailwind/

### Icons
- https://www.svgrepo.com/collection/clothes-and-fashion-accessories/
- https://www.svgrepo.com/collection/calcite-sharp-line-icons/3