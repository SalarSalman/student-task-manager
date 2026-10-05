# Student Task Management System

A simple web application that lets students add tasks, mark them as completed, delete them, and search through them. Built as a pair assignment to practice a real Git and GitHub collaborative workflow.

## Team Members

| Student | Roll No | GitHub |
|---|---|---|
| Muhammad Salman Liaqat (Student 1) | MSDSF26M017 | [@SalarSalman](https://github.com/SalarSalman) |
| Asad Shafiq (Student 2) | MSDSF26A005 | [@iamasadshafiq](https://github.com/iamasadshafiq) |

## Features

- Add a task with a title and optional description
- Mark tasks as Done / Undo
- Delete tasks
- Live search that filters tasks by title (case-insensitive)
- Responsive layout for mobile screens

## Technologies

- HTML5
- CSS3 (custom properties, flexbox/grid, media queries)
- Vanilla JavaScript (DOM manipulation, events)
- Git & GitHub

## Git Workflow

1. Student 1 initialized the local repository, created the first commits, and pushed `main` to GitHub.
2. Features were developed on separate feature branches, never directly on `main`.
3. Every feature reached `main` through a Pull Request that the other student reviewed.
4. GitHub Issues were created for planned features and closed automatically by linked Pull Requests.
5. A merge conflict in `README.md` was intentionally created and resolved.
6. Recovery commands (`stash`, `restore`, `reset`, `revert`) were demonstrated.
7. The stable version was tagged `v1.0.0` and published as a GitHub Release.

## Branches

- `main` — stable, reviewed code
- `feature/task-form` — task input form (Student 1)
- `feature/task-style` — styling and responsive layout (Student 2)
- `feature/task-search` — task logic and search box (Student 2)
- `feature/readme-update` — used to demonstrate a merge conflict

## Git Commands Demonstrated

`init`, `status`, `add`, `commit`, `log`, `diff`, `diff --staged`, `branch`, `switch`, `clone`, `remote`, `push`, `fetch`, `pull`, `merge`, `stash`, `restore`, `reset`, `revert`, `show`, `blame`, `tag`

## GitHub Features Demonstrated

Repository hosting, Issues, Pull Requests, code review (comments + approvals), merges, linked issues (`Closes #n`), tags, and a Release.

## How to Run

1. Clone the repository: `git clone https://github.com/SalarSalman/student-task-manager.git`
2. Open `index.html` in any modern browser — no build step needed.

## Screenshots

All required screenshots with captions and explanations are included in the submitted Word document.

## Version History

- **v1.0.0** (October 2026) — Task form, styling and responsive layout, task logic (add / complete / delete), and task search.

## Contributors

- Muhammad Salman Liaqat — project setup, README, task form, first PR
- Asad Shafiq — styling, task logic and search, reviews, conflict resolution, recovery demos, tag & release
