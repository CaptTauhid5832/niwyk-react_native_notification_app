# Postify

A React Native (Expo) app where users sign up, set a profile, and share posts. Built with Firebase.

## Features

- Sign up and log in with email and password (Firebase Auth)
- List of all users with avatar and display name
- View any user's posts
- Add a post with title, text and an optional image (public or private)
- Settings: change avatar URL and display name
- Log out from any screen

## Tech

- Expo / React Native
- React Navigation (stack + bottom tabs)
- Firebase Auth and Firestore
- expo-image-picker, react-native-toast-message, @expo/vector-icons

## Setup

1. Clone the repo:
   ```
   git clone https://github.com/CaptTauhid5832/niwyk-react_native_notification_app.git
   cd niwyk-react_native_notification_app/PostifyApp
   ```
2. Install packages:
   ```
   npm install
   ```
3. In Firebase:
   - Create a project and register a web app
   - Enable **Authentication → Email/Password**
   - Create a **Firestore** database
4. Paste your Firebase config into `firebase.js`.

## Run

```
npx expo start --web
```

Or run `npx expo start` and scan the QR code with Expo Go.

The first time you open a user's posts, Firestore may show an error with a link to create an index. Open the link, create the index, and reload.

## Screens

| Screen | File |
|---|---|
| Sign Up | `SignUpScreen.js` |
| Login | `LoginScreen.js` |
| Users | `ListUsers.js` |
| Posts | `PostifyPostsList.js` |
| Add Post | `PostifyAddPostScreen.js` |
| Settings | `SettingsScreen.js` |
