# DineOut

DineOut is a web application for managing food orders in a restaurant or fast-food environment. It allows staff to create, track, filter, and report on customer orders with a clean and responsive interface.

## Features

- Create new orders with customer name and menu items
- View all current orders and their status (pending/delivered)
- Mark orders as delivered or delete them
- Dashboard summary of total, pending, and delivered orders
- Order reports with filtering by status
- Responsive UI built with React and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- pnpm, npm, or yarn

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/dine-out.git
   cd dine-out
   ```

2. **Install dependencies:**
   ```sh
   pnpm install
   # or
   npm install
   ```

3. **Start the development server:**
   ```sh
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Project Structure

```
dine-out/
├── public/
│   └── items/
├── src/
│   ├── components/
│   ├── data/
│   └── utils/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Technologies Used

- React
- Vite
- Tailwind CSS

## Customization

- Edit `src/data/menuItems.json` to change menu items.
- Modify styles in `src/index.css` or Tailwind classes in components.

