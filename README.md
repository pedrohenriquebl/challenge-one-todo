# Todo List Application

This is a simple Todo List application built with React, using TypeScript and icons from the `phosphor-react` library. The goal of the project is to allow users to add, mark as completed, and remove tasks.

## Features

- **Add new tasks**: The user can add new tasks to the list.
- **Mark all tasks as completed**: The user can mark all tasks as completed at once.
- **Delete individual tasks**: The user can delete any task from the list.
- **Display the number of created and completed tasks**: The number of created and completed tasks is displayed.
- **Display a message when there are no tasks**: If no tasks are present, a "No tasks added" message will be shown.

## Technologies Used

- **React**: Library for building user interfaces.
- **TypeScript**: A superset of JavaScript for better typing.
- **phosphor-react**: Icon library.
- **CSS Modules**: For styling the application.

## Prerequisites

Before running the project, you need to have [Node.js](https://nodejs.org/) installed on your machine.

### Install Dependencies

Clone the repository to your machine:

```bash
git clone https://github.com/your-username/your-repository.git

cd your-repository

npm install
```

## Run the Project

```bash
npm run dev
```

## Project Structure

Here’s a breakdown of the project's folder structure:

```bash
src/
├── components/
│   ├── Hero.tsx         # Component that displays the hero section.
│   ├── Todo.tsx         # Main component that contains the task list.
│   └── Task.tsx         # Individual task component.
├── global.css           # Global styles for the application.
├── App.tsx              # Main application component.
├── FormTodo.module.css  # Specific styles for the todo list component.
└── Task.module.css      # Specific styles for the task component.
```

## How to Contribute

1. Fork this repository.
2. Create a new branch for your feature: git checkout -b my-feature.
3. Commit your changes: git commit -am 'Add new feature'.
4. Push to the branch: git push origin my-feature.
5. Open a pull request.