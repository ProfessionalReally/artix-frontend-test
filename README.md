# Cards Timer App 🎴⏱️

## ✨ Description

At the top of the screen, there are two inputs:

- **Count** — determines how many cards are added each interval.
- **Interval (seconds)** — sets how often new cards appear in the list.

Below, a list of cards is displayed. Initially, the list is empty.

Periodically, based on the `interval`, `count` number of cards are added to the list. Each card is a rectangle with:

- a background color (`bgColor`)
- its hex color code displayed
- a countdown timer (`countdown`) randomly set between 2 and 10 seconds

### Inside each card, there is a progress bar

This progress bar shows the remaining lifetime of the card — as time decreases, it empties. It serves as a visual
indicator of how much time is left before the card disappears.

Each card contains:

- background color (`bgColor`)
- hex color code (`bgColor`)
- visual countdown (`countdown`)
- progress bar indicating remaining lifetime (`progress-bar`)

If more than `countdown` seconds have passed since the card was mounted, it disappears from the list. Clicking on a card
resets its `countdown` to a new random value.

## 📸 Screenshots
![screenshot-app-1](https://github.com/user-attachments/assets/182fe210-ee6d-4b44-941a-e8a1ad8f3130)

## 🚀 Technologies and Tools

The implementation uses:

- React + TypeScript
- Tailwind CSS
- Framer Motion for animations
- FSD (Feature-Sliced Design) methodology — project structure divided by feature layers

## 🔥 Key Features

- Maximum number of cards limited for optimization — default is 100. This value can be changed.
- At any moment, no more than 100 cards are present.
- On each interval, it checks how many new cards can be added (considering the limit). If there's space,
  it adds `count` new cards.
- Addition logic: when the interval elapses, it checks current number of cards and adds as many as possible without
  exceeding the limit.

## ⚙️ Installation

### Cloning the repository

``` bash
# Clone the repository
git clone https://github.com/ProfessionalReally/artix-frontend-test.git

# Installing dependencies via npm
npm install
# or:
yarn install

# Running in development mode
npm run dev
# or:
yarn dev

# Running in production mode
npm run build
# or:
yarn build
```
