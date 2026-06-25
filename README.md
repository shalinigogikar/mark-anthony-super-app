# Mark Anthony Super App

A modern **Next.js Super App** built using **TypeScript**, **Tailwind CSS**, **Zustand**, and **React Hook Form**. The application allows users to register, choose entertainment categories, and access a personalized dashboard with weather updates, notes, timer, latest news, and movie recommendations.

## Live Demo

**Vercel:**
https://mark-anthony-super-app-psi.vercel.app

## GitHub Repository

https://github.com/shalinigogikar/mark-anthony-super-app

---

## Features

### User Registration

* User registration form
* Form validation using React Hook Form and Zod
* User information stored using Zustand and Local Storage

### Category Selection

* Select favorite entertainment categories
* Minimum three categories required to continue

### Dashboard

* User Profile
* Live Weather Widget
* Notes Widget (saved in Local Storage)
* Countdown Timer
* Latest News Widget
* Responsive dashboard layout

### Movies

* Movie recommendations based on selected category
* Movie details displayed in a modal
* Movie posters with fallback image support

### Authentication

* Protected routes using Auth Guard
* Redirects unauthenticated users to registration

---

## Technologies Used

* Next.js 16
* React
* TypeScript
* Tailwind CSS
* Zustand
* React Hook Form
* Zod
* Axios
* Open-Meteo API
* GNews API
* OMDb API
* Vercel

---

## Folder Structure

```text
app/
components/
services/
store/
types/
utils/
public/
```

---

## Environment Variables

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_GNEWS_API_KEY=YOUR_GNEWS_API_KEY
NEXT_PUBLIC_OMDB_API_KEY=YOUR_OMDB_API_KEY
NEXT_PUBLIC_WEATHER_API_KEY=YOUR_WEATHER_API_KEY
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/shalinigogikar/mark-anthony-super-app.git
```

Go to the project folder:

```bash
cd mark-anthony-super-app
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

---

## Project Workflow

1. Register User
2. Select Entertainment Categories
3. Open Dashboard
4. View Live Weather
5. Read Latest News
6. Save Personal Notes
7. Use Countdown Timer
8. Browse Movie Recommendations
9. View Movie Details

---

## Future Improvements

* Dark/Light Theme
* Search Movies
* Favorite Movies
* Multiple News Categories
* User Login with Authentication
* Better Mobile Experience

---

## Author

**Shalini Gogikar**

B.Tech – Computer Science & Engineering (2024)

GitHub: https://github.com/shalinigogikar
