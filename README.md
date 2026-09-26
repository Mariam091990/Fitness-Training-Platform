# 🏋️ FitLog - Workout Plan

FitLog is a workout management web application where users can explore different workouts, view workout details, create their daily workout plan, and save workouts for later.

## 🚀 Live Demo
https://fitness-training-platform.vercel.app


## 📂 GitHub Repository

https://github.com/Mariam091990/Fitness-Training-Platform.git

---

## ✨ Features

- 🏋️ Browse different workout exercises
- 🔎 View detailed information about each workout
- 📋 Add workouts to today's plan
- ❤️ Save workouts for later
- 🚫 Prevent duplicate workouts in Plan and Saved lists
- 🔢 Display Plan and Saved workout counts in the Navbar
- 📊 View workout statistics
  - Total exercises
  - Total workout duration
  - Total calories burned
- 🔀 Sort workouts by:
  - Duration
  - Calories
  - Rating
- 🗑️ Delete workouts from Plan or Saved lists
- 📱 Responsive design for mobile, tablet, and desktop
- 🟢 Active navigation highlighting
- 🔔 Toast notifications for user actions

---

## 🛠️ Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Toastify
- Context API





src/
├── app/
│   ├── save-list/
│   ├── plan-lists/
│   ├── workouts/
│   │   └── [id]/
│   └── ...
│
├── components/
│   ├── buttons/
│   │   ├── PlanButton.tsx
│   │   ├── SaveButton.tsx
│   │   ├── NavPlanButton.tsx
│   │   └── NavSavedButton.tsx
│   ├── Navbar.tsx
│   └── ...
│
├── context/
│   └── LogsContext.tsx
│
└── type/
    └── index.ts