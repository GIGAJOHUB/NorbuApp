# Norbu Homes — Architecture

> A concise reference for the project structure, design system, and technical decisions.

## Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | React Native + Expo SDK 54 | Cross-platform mobile |
| Routing | Expo Router v6 (file-based) | Tab + stack navigation |
| Styling | NativeWind v4 + Tailwind CSS 3.4 | Utility-first styling |
| Animations | React Native Reanimated v4 | 60fps entrance/exit animations |
| Images | expo-image | Optimised remote image loading |
| Effects | expo-blur, expo-linear-gradient | Glassmorphism + gradients |
| Fonts | @expo-google-fonts | Playfair Display + Manrope |

## Directory Map

```
norbu-homes/
├── app/                        # Expo Router file-based routes
│   ├── _layout.tsx             # Root: font loading, splash, stack navigator
│   ├── index.tsx               # Splash screen (auto-fades → tabs)
│   └── (tabs)/                 # Bottom tab navigator group
│       ├── _layout.tsx         # Custom blur tab bar
│       ├── index.tsx           # Home Dashboard
│       ├── concierge.tsx       # Concierge Services + AI Chat
│       ├── explore.tsx         # Explore Dubai
│       ├── properties.tsx      # Properties / Operations / Insights
│       └── profile.tsx         # Profile & Settings
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Glass blur top bar (NORBU logo)
│   │   └── ScreenContainer.tsx # Safe-area + scroll wrapper
│   └── ui/
│       ├── GlassPanel.tsx      # Glassmorphism card
│       ├── GoldButton.tsx      # Primary CTA (filled/outlined)
│       ├── SectionHeader.tsx   # Label + title + subtitle
│       └── StatusBadge.tsx     # Active / Pending badges
├── constants/
│   ├── colors.ts               # Full M3 dark-theme token palette
│   ├── typography.ts           # Font-family + size roles
│   └── spacing.ts              # 4-8-16-24-32-48 scale
├── tailwind.config.js          # NativeWind design tokens
├── babel.config.js             # NativeWind JSX + Reanimated plugin
├── metro.config.js             # NativeWind metro wrapper
├── app.json                    # Expo config (dark, portrait)
└── eas.json                    # EAS Build profiles
```

## Design System

### Colour Palette (M3 Dark)

| Token | Hex | Usage |
|-------|-----|-------|
| `background` | `#16130f` | App background |
| `primary` | `#e5c484` | Gold accents, CTAs, active states |
| `on-surface` | `#e9e1da` | Primary text |
| `on-surface-variant` | `#d0c5b5` | Secondary text |
| `surface-container` | `#221f1b` | Card backgrounds |
| `outline` | `#998f81` | Borders, inactive icons |
| `glass-bg` | `rgba(34,31,27,0.6)` | Glassmorphism panels |

### Typography

| Role | Font | Size |
|------|------|------|
| Display | Playfair Display 600 | 40px |
| Headline | Playfair Display 500 | 24–32px |
| Title | Manrope 600 | 20px |
| Body | Manrope 400 | 14–16px |
| Label Caps | Manrope 700 | 12px, uppercase, 1.2px tracking |

## Navigation Flow

```
Splash (index.tsx) ──fade-out──→ (tabs)/
                                  ├── Home        (index)
                                  ├── Concierge   (concierge)
                                  ├── Explore     (explore)
                                  ├── Properties  (properties)
                                  └── Profile     (profile)
                                       ↑
                    Menu button ────────┘
```

## Build Profiles (eas.json)

| Profile | Platform | Output |
|---------|----------|--------|
| `development` | Android | Debug APK |
| `preview` | Android | Preview APK |
| `production` | Android | AAB (Play Store) |
| `production` | iOS | IPA (App Store) |
