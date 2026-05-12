# Norbu Homes

A premium luxury hospitality mobile application for **Norbu Homes**, a Dubai-based luxury holiday home and property management company.

Built with **React Native**, **Expo SDK 54**, **NativeWind**, and **Reanimated** — targeting both iOS and Android.

---

## ✨ Features

- **Cinematic Splash Screen** — Animated gold logo with fade-out transition
- **Home Dashboard** — Active stay overview, concierge quick actions, explore carousel
- **Concierge Services** — Bento service cards + AI Concierge chat interface
- **Explore Dubai** — Full-bleed hero, category bento grid, trending scroll
- **Property Portfolio** — Featured listings, operations dashboard, owner insights
- **Profile & Settings** — Member stats, preferences, account management

## 🎨 Design Language

- **Theme:** Matte Black & Gold (Material Design 3 Dark)
- **Typography:** Playfair Display (serif) + Manrope (sans-serif)
- **Effects:** Glassmorphism, gradient overlays, blur headers
- **Animations:** Reanimated entrance animations (FadeInDown, FadeInRight)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npx expo start --clear

# Run on device
npx expo start --android    # Android via Expo Go
npx expo start --ios        # iOS via Expo Go (macOS only)
npx expo start --web        # Web preview
```

## 📦 Build

```bash
# Login to EAS
npx eas login

# Build Android APK (preview)
npx eas build --platform android --profile preview

# Build Android AAB (production)
npx eas build --platform android --profile production

# Build iOS (production)
npx eas build --platform ios --profile production
```

## 📁 Project Structure

```
app/                    → Expo Router file-based routes
  (tabs)/               → Bottom tab navigator (5 screens)
components/
  layout/               → Header, ScreenContainer
  ui/                   → GlassPanel, GoldButton, StatusBadge, SectionHeader
constants/              → colors, typography, spacing tokens
```

See [ARCHITECTURE.md](./ARCHITECTURE.md) for the full reference.

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| Expo SDK 54 | Cross-platform framework |
| Expo Router v6 | File-based navigation |
| NativeWind v4 | Tailwind CSS for RN |
| Reanimated v4 | 60fps animations |
| expo-blur | Glassmorphism effects |
| expo-linear-gradient | Gradient overlays |
| expo-image | Optimised image loading |

## 📄 License

Proprietary — Norbu Homes © 2025. All rights reserved.
