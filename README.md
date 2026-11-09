# CV Application

A small React app for building a CV/résumé. Fill in your details, save each section, and edit or delete entries at any time. Built as part of [The Odin Project](https://www.theodinproject.com/) React curriculum.

**Live demo:** _add your deployed link here_

## Features

- **Personal information**: name, email and phone number.
- **Education**: add multiple entries (school name, study title, start and end dates).
- **Experience**: add multiple entries (company name, position title, start and end dates).
- **Edit and delete**: edit any saved entry (the form reopens with the saved values), delete entries you no longer need, or cancel an edit without changing anything.
- Responsive layout that works on phones and desktops.

## Built with

- [React](https://react.dev/) (hooks: `useState`)
- [Vite](https://vite.dev/)
- Plain CSS

## How it works

Each section is its own component and keeps two pieces of state:

- **Saved data**: what is displayed on the CV.
- **Draft data**: what the inputs edit while the form is open. It is copied into the saved data only when you click Save, so Cancel discards changes safely.

Education and Experience store their entries as an array of objects, each with an `id` made by `crypto.randomUUID()`. The id is used to update or remove the right entry.

## Project structure

```
src/
├── components/
│   ├── Info.jsx
│   ├── Education.jsx
│   ├── Experience.jsx
│   └── Form.jsx
├── styles/
│   └── form.css
├── App.jsx
└── main.jsx
```

## Getting started

```bash
# clone the repository
git clone <your-repo-url>
cd <project-folder>

# install dependencies
npm install

# start the dev server
npm run dev
```

Then open the local URL that Vite prints (usually http://localhost:5173).

To create a production build:

```bash
npm run build
npm run preview
```

## Possible improvements

- Add a "main responsibilities" field to Experience.
- Add a live CV preview next to the form.
- Save data in `localStorage` so it survives a page refresh.
- Export the CV as a PDF.
