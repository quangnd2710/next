# Nextjs App code-base in Typescript

## _A very simple Nextjs project with common features_

- React 18

- React Hook Form v7

- React MUI v5

- Redux/Redux-Saga

## Features

- Complete project with clean folder structure and routing configuration.

- Complete implementation of Redux with Redux Saga which easy for development.

- Common inputs base on MUI and React Hook Form

- Multiple languages implement with i18next.

- Multiple configurations for enviroment.



## Structure: Base on [Component Driven User Interfaces](https://www.componentdriven.org/)

- components: component in isolation and define its relevant states

- constants: constants variables

- containers: compose small components together to unlock new features while gradually increasing complexity.

- pages: build pages by combining composite components. Use mock data to simulate pages in hard-to-reach states and edge cases.

- modules: contains the logic of each individual page

- hooks: common hooks will be used in the project

- layouts: the big common layout will apply for multiple pages

- providers: which's used once time in the root

- services: network interface config and function call api of each page

- redux: configuration of redux

- utils: utility function

- translation: configuration of multiple languages