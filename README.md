# Secure Task Management System (Nx Monorepo)

**Author:** Venkata Eppagunta  
**Repository:** `veppagunta-3e04c8a7-fdc2-4182-bde1-2f1fe496aee6`

A secure **Task Management System** built on **Nx monorepo**

- Backend : NextJS
- FrontEnd: Angular
- JWT authentication, Role based Access control(RBAC)
- Database: SQLite

All users have same password:
```sh
Password123!
```


| Role   | Email              |
|------|--------------------|
| Owner | owner@test.com     |
| Admin | admin@test.com     |
| Viewer| viewer@test.com    |


## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install Dependencies
```sh
npm install
```

### Start Tailwind

```sh
npm run tw:dashboard
```
### Start Backend API

```sh
npx nx serve api
```

### Start Frontend Dashbaord

```sh
npx nx serve dashboard
```

### Access Appilcation @
	Frontend: http://localhost:4200
	Backend: http://localhost:3000





## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/intro#learn-nx?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
