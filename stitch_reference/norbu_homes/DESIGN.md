---
name: Norbu Homes
colors:
  surface: '#16130f'
  surface-dim: '#16130f'
  surface-bright: '#3c3933'
  surface-container-lowest: '#100e0a'
  surface-container-low: '#1e1b17'
  surface-container: '#221f1b'
  surface-container-high: '#2d2925'
  surface-container-highest: '#38342f'
  on-surface: '#e9e1da'
  on-surface-variant: '#d0c5b5'
  inverse-surface: '#e9e1da'
  inverse-on-surface: '#33302b'
  outline: '#998f81'
  outline-variant: '#4d463a'
  surface-tint: '#e3c282'
  primary: '#e5c484'
  on-primary: '#402d00'
  primary-container: '#c8a96b'
  on-primary-container: '#533d09'
  inverse-primary: '#735b25'
  secondary: '#e7c17c'
  on-secondary: '#412d00'
  secondary-container: '#5c4308'
  on-secondary-container: '#d4b06d'
  tertiary: '#bac7f4'
  on-tertiary: '#222f53'
  tertiary-container: '#9facd7'
  on-tertiary-container: '#334064'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdea0'
  primary-fixed-dim: '#e3c282'
  on-primary-fixed: '#261a00'
  on-primary-fixed-variant: '#5a430f'
  secondary-fixed: '#ffdea4'
  secondary-fixed-dim: '#e7c17c'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5c4308'
  tertiary-fixed: '#dae1ff'
  tertiary-fixed-dim: '#b8c5f2'
  on-tertiary-fixed: '#0b1a3d'
  on-tertiary-fixed-variant: '#39466b'
  background: '#16130f'
  on-background: '#e9e1da'
  surface-variant: '#38342f'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  title-lg:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-margin: 24px
  stack-gap-lg: 32px
  stack-gap-md: 16px
  stack-gap-sm: 8px
  section-padding: 48px
---

## Brand & Style

This design system is engineered for the ultra-high-net-worth individual, evoking the sensation of walking into a private, high-end residence in Dubai at dusk. The brand personality is defined by an unwavering calm and a sense of "quiet luxury"—where quality is felt rather than shouted.

The visual style employs a **Cinematic Minimalist** approach. It utilizes expansive white space (or "dark space") to create a sense of exclusivity and breathing room. **Glassmorphism** is used sparingly to imply depth and technical sophistication, mimicking the high-end finishes of modern architecture. The emotional response is one of total confidence, seamlessness, and curated elegance.

## Colors

The palette is anchored in a deep, non-distracting **Matte Black** to provide a canvas for cinematic property photography. **Soft Gold** and **Champagne Gold** are reserved strictly for high-value interactions and brand accents, acting as a visual signature of premium service. 

- **Primary Canvas:** Matte Black (#0B0B0D) for the deepest background layers.
- **Surface Elevation:** Charcoal (#141416) for cards, modals, and navigation bars.
- **Accents:** Soft Gold (#C8A96B) for primary CTAs and Champagne Gold (#E5C07B) for highlights or active states.
- **Typography:** Soft White (#F5F5F5) for maximum readability without the harshness of pure white, and Muted Gray (#9A9A9A) for metadata and secondary labels.

## Typography

This design system utilizes a sophisticated typographic pairing to balance heritage with modernity. **Playfair Display** (Serif) is used for headlines to convey the "Expensive" and "Sophisticated" traits of the brand. **Manrope** (Sans-Serif) is utilized for body text and functional UI elements to ensure high legibility and a contemporary, "Seamless" feel.

Standardize on wide line-heights (1.6x for body) to maintain the feeling of spaciousness. Use `label-caps` for section headers and category tags to create a rhythmic hierarchy that feels editorial.

## Layout & Spacing

The layout follows a **Mobile-First Fluid Grid** with generous padding that mirrors the luxury of space found in high-end real estate. 

- **Safe Margins:** A consistent 24px horizontal margin ensures content never feels cramped against the device edges.
- **Vertical Rhythm:** Use a 8px base grid. Section headers should be preceded by 48px of vertical space to allow each content block to feel like a "discovery."
- **Cinematic Aspect Ratios:** Property imagery should primarily use 4:5 or 16:9 ratios to maximize vertical impact on mobile screens.

## Elevation & Depth

Hierarchy is achieved through **Tonal Layering** and **Glassmorphism** rather than traditional heavy shadows.

1.  **Base:** Matte Black (#0B0B0D).
2.  **Mid-Ground:** Charcoal (#141416) containers with a subtle 1px border (#FFFFFF at 5% opacity).
3.  **Floating Elements:** Use Backdrop Blur (20px to 30px) for navigation bars and action sheets to maintain a sense of context and "lightness."
4.  **Shadows:** When necessary, use extremely diffused "Ambient Shadows"—black with 40% opacity, 40px blur, and 0px offset—to create a soft lift without visible edges.

## Shapes

The shape language is **Soft and Architectural**. While the luxury sector often leans toward sharp corners, this design system uses a subtle 4px to 12px radius to feel approachable and "human-centric."

- **Standard Elements:** 4px (Soft) for small components like checkboxes or tags.
- **Primary Cards:** 12px for property cards and main containers to create a modern, high-end feel.
- **Buttons:** Fully squared or subtly rounded (4px) to maintain a serious, architectural silhouette. Avoid pill shapes.

## Components

- **Buttons:** Primary buttons use a Soft Gold background with Matte Black text. High-contrast, no shadow. Secondary buttons are "Ghost" style with a Soft White 1px border.
- **Property Cards:** Edge-to-edge imagery with a Charcoal gradient overlay at the bottom to house Soft White typography. 
- **Inputs:** Minimalist bottom-border only or very subtle Charcoal fills. Active state is indicated by a Soft Gold border transition.
- **Chips/Filters:** Charcoal background with Soft White text. Selected state uses a Soft Gold border.
- **Progress Indicators:** Slim, Champagne Gold lines. Avoid thick or playful loading animations.
- **Glassmodals:** Use for high-level filters or quick views, employing a heavy backdrop blur to keep the user focused on the immediate task.