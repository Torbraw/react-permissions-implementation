# react-permissions-implementation

This repository showcase how we can implement a permissions based system in a SPA react application.  
It is bootstraped with the react-ts vite template, so it is only client side. It could maybe work with SSR, but I haven't tried it.  
  
If you find something that could be improved, you're more than welcome to open an issue or a PR.  
I'm by no means an expert, just wanted to share my implementation.

## How it works

There is two main components to this implementation, the `useAuth.tsx` hook and the `permission-gate.tsx` components.

### useAuth.tsx

In this file you have a react context that will hold the user informations, some utility functions and the `useAuth` hook.

- You have the `login()` and `logout()` functions that will update the user informations in state, stored in the localStorage with Zustand.
- The exposed `currentUser` state that contains the user informations.
- A `hasPermissions()` function that will check if the user has the required permissions.
  - Note: This function also check if the user has the `admin` permission, which will give him access to everything.

The user permissions are encrypted and decrypted with the `crypto-js` library, to not have the permissions in plain text in the localStorage (note: the encryptPassPhrase should be stored somewhere else).  
All the functions and the currentUser state are memoized and exposed with the `useAuth` hook, that use the react context.  
You can use the `useAuth` hook like this:

```tsx
const { currentUser, login, logout, hasPermissions } = useAuth();

if (currentUser?.name === 'admin') {
  // do something
}

if (hasPermissions(['admin'])) {
  // do something
}

//etc...
```

### permission-gate.tsx

This component is a wrapper that takes an array of permissions and validate if the user has the required permissions to access the wrapped component by calling the `hasPermissions()` function from the `useAuth` hook.  
It also take an actionType, that will determine which action to take if the user doesn't have the required permissions.

- `actionType="REDIRECT"` will redirect the user to the dashboard page (can be changed to use a homePage that is linked to the user).
- `actionType="HIDE"` will return an empty fragment, so the user won't see anything.
- `actionType="DISABLE"` will loop through all the children and disable them with the `disabled` prop.
  - Note 1: This will only work with components that accept the `disabled` prop.
  - Note 2: It doesn't recursively loop through the children, so be sure to only have one level of children (could be implemented).

You can use this component in two ways:

- As a wrapper around a component, like this:

```tsx
<PermissionGate permissions={['admin']} actionType="HIDE">
  <MyComponent />
</PermissionGate>
```

- As a `Route` element (from `react-router-dom`), like this:

```tsx
{
  element: <PermissionsGate permissions={['dashboardPage']} actionType="REDIRECT" />,
  children: [
    {
      path: 'dashboard',
      element: <Dashboard />
    }
  ]
}
```

## What's also included

### Protected and public layouts

On top of the permissions implementation, there is also two layouts that are used to restrict access to some pages based if the user is logged in or not.  
Those layouts use the `Navigate` and `Outlet` from `react-router-dom`, so you'll need to use the `Route` component from `react-router-dom` to use them.

- `public-layout.tsx` redirect to the dashboard page user is logged in
- `protected-layout.tsx` redirect to the login page user is not logged in

### Exemples

You have three users to choose from on the login page, which all have different permissions. See the `USERS` constant in the config.ts file to see the permissions for each user.  

- In the `main.tsx` file, you have some exemples of how to use the `PermissionGate` component with `Route`, and how to use the `public-layout` and `protected-layout` components.
- In the `dashboard.tsx` page and in the `navbar.tsx` component, you have some exemples of how to use the `PermissionGate` component as a wrapper around a component.
- The `user.tsx` page is only there to show the redirection when the user doesn't have the required permissions.

## Libraries used

- [Vite](https://vitejs.dev/) for the template and build tool
- [React Router](https://reactrouter.com/) for routing
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) for state management with localStorage (currentUser)
- [TailwindCSS](https://tailwindcss.com/) for quick and easy styling
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [ESLint](https://eslint.org/) for code linting and [Prettier](https://prettier.io/) for code formatting
- [CryptoJS](https://cryptojs.gitbook.io/docs/) for encrypting and decrypting the user permissions

## How to run locally

```bash
git clone
cd react-permissions-implementation
pnpm install
pnpm run dev
```
