# CF-app (Comfort Food App)

A React Native mobile application for discovering, browsing, and managing your favorite meals. Built with Expo, React Navigation, and Redux Toolkit.

## 📱 Overview

CF-app is a meal discovery app that allows users to:
- Browse meals organized by categories
- View detailed recipes with ingredients and instructions
- Save favorite meals for quick access
- Enjoy a smooth, intuitive user experience

## ✨ Features

- **Category Browsing**: Browse meals by categories (e.g., Italian, Mexican, Quick & Easy)
- **Meal Details**: View comprehensive meal information including:
  - Ingredients list
  - Step-by-step cooking instructions
  - Preparation time and difficulty level
- **Favorites Management**: 
  - Add/remove meals from favorites
  - View all favorited meals in a dedicated screen
  - Persist favorites using Redux state management
- **Navigation**: Bottom tab and stack navigation for seamless user experience

## 🛠️ Tech Stack

- **Framework**: [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/)
- **Language**: JavaScript/React
- **Navigation**: [React Navigation](https://reactnavigation.org/) v7
  - Bottom Tabs
  - Native Stack
  - Drawer Navigation
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) + [React Redux](https://react-redux.js.org/)
- **Animation**: [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- **Gestures**: [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)

## 📋 Prerequisites

Before running the app, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**
- **Expo CLI** (optional, as Expo is included in dependencies)
- **Android Studio** (for Android development) or **Xcode** (for iOS development)

## 🚀 Installation

1. **Clone the repository**
   
```
bash
   git clone https://github.com/yashrajputs/CF-app.git
   cd CF-app
   
```

2. **Install dependencies**
   
```
bash
   npm install
   # or
   yarn install
   
```

3. **Start the development server**
   
```
bash
   npm start
   # or
   expo start
   
```

## 📱 Running the App

### Android
```
bash
npm run android
# or
expo start --android
```

### iOS
```
bash
npm run ios
# or
expo start --ios
```

### Web
```
bash
npm run web
# or
expo start --web
```

## 📁 Project Structure

```
CFapp/
├── App.js                 # Main app entry point
├── index.js               # React Native entry point
├── app.json               # Expo configuration
├── package.json            # Dependencies and scripts
├── assets/                # Images, icons, splash screen
│   ├── icon.png
│   ├── adaptive-icon.png
│   ├── splash.png
│   └── favicon.png
├── components/            # Reusable UI components
│   ├── CategoryGridTile.js
│   ├── IconButton.js
│   ├── MealDetails.js
│   ├── MealDetail/
│   │   ├── List.js
│   │   └── Subtitle.js
│   └── MealsList/
│       ├── MealItem.js
│       └── MealsList.js
├── screens/               # App screens
│   ├── CategoriesScreen.js
│   ├── FavoritesScreen.js
│   ├── MealDetailScreen.js
│   └── MealsOverviewScreen.js
├── data/                  # Static data (dummy data)
│   └── dummy-data.js
├── models/                # Data models
│   ├── category.js
│   └── meal.js
└── store/                 # State management
    ├── context/           # Context API (optional)
    │   └── favorites-context.js
    └── redux/             # Redux store
        ├── favorites.js
        └── store.js
```

## 🧩 Screens

1. **Categories Screen**: Home screen displaying meal categories in a grid
2. **Meals Overview Screen**: Lists meals within a selected category
3. **Meal Detail Screen**: Shows detailed meal information (ingredients, instructions)
4. **Favorites Screen**: Displays all saved favorite meals

## 📦 Build & Deploy

### Android APK (Development)
```
bash
npx expo run:android
```

### Production Build
Use EAS Build for production-ready builds:
```
bash
eas build -p android
# or
eas build -p ios
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

- **Yashraj Puts** - [yashrajputs](https://github.com/yashrajputs)

## 🙏 Acknowledgments

- [Expo](https://expo.dev/) for the amazing development platform
- [React Navigation](https://reactnavigation.org/) for navigation solutions
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management

---

<p align="center">Made with ❤️ using React Native & Expo</p>
