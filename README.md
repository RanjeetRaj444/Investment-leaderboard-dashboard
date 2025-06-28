# 📊 Investment Leaderboard Dashboard

A beautiful, production-ready virtual stock trading competition dashboard built with React and Tailwind CSS. Track portfolio performance, compete with other investors, and climb the leaderboards in this realistic trading simulation.

![Investment Leaderboard Dashboard](<src/assets/Screenshot 2025-06-28 204952.png>)

## ✨ Features

### 🏆 **Multi-Period Leaderboards**

- **Daily Rankings** - Track performance over the last 24 hours
- **Weekly Champions** - See who's winning over the past 7 days
- **Monthly Leaders** - Long-term performance tracking
- Real-time rank calculations with percentage changes

### 📈 **Portfolio Analytics**

- Live portfolio value calculations
- Percentage change tracking with visual indicators
- Individual stock performance monitoring
- Comprehensive performance metrics and statistics

### 👥 **User Management**

- Individual user profiles with avatars
- Portfolio holdings tracking
- Initial cash allocation simulation
- Historical transaction records

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd investment-leaderboard-dashboard
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the dashboard

## 🏗️ Project Structure

```
src/
├── components/                # Reusable UI components
│   ├── LeaderboardCard.jsx    # Individual user performance card
│   ├── LeaderboardTab.jsx     # Leaderboard container with stats
│   ├── StatsOverview.jsx      # Dashboard statistics overview
│   └── TabNavigation.jsx      # Period selection tabs
├── data/                      # Static data and mock APIs
│   ├── users.js               # User profiles and portfolios
│   └── stockPrices.js         # Historical stock price data
├── utils/                     # Business logic and calculations
│   └── portfolioCalculations.js  # Portfolio value & performance logic
├── App.jsx                    # Main application component
├── main.jsx                   # Application entry point
└── index.css                  # Global styles and Tailwind imports
```

## 🎯 Key Components

### **LeaderboardCard**

Individual user performance display with:

- User avatar and ranking position
- Current portfolio value
- Percentage change with trend indicators
- Visual performance progress bar

### **StatsOverview**

Dashboard-wide statistics including:

- Total number of investors
- Combined portfolio value
- Top daily and weekly performers
- Average performance metrics

### **TabNavigation**

Period selection interface with:

- Daily, Weekly, Monthly views
- Smooth transition animations
- Active state indicators

## 🧮 Portfolio Calculations

The dashboard uses sophisticated algorithms to calculate:

1. **Portfolio Value**: Stock holdings × current prices + remaining cash
2. **Performance Change**: (Current Value - Previous Value) / Previous Value × 100
3. **Ranking**: Sorted by percentage change (descending)
4. **Date Calculations**: Automatic date offset for different periods

## 🔧 Customization

### Adding New Users

Edit `src/data/users.js` to add new participants:

```typescript
{
  id: '6',
  name: 'Your Name',
  avatar: 'https://your-avatar-url.jpg',
  initialCash: 100000,
  holdings: [
    { symbol: 'AAPL', quantity: 10, buyPrice: 175.50, buyDate: '2025-06-20' }
  ]
}
```

### Adding Stock Data

Extend `src/data/stockPrices.js` with new symbols or dates:

```typescript
{ symbol: 'NVDA', date: '2025-06-28', price: 450.25 }
```

## 📱 Responsive Design

The dashboard is fully responsive with breakpoints:

- **Mobile**: 320px - 768px (stacked layout)
- **Tablet**: 768px - 1024px (2-column grid)
- **Desktop**: 1024px+ (full 4-column layout)

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deploy to Netlify/Vercel

The built files in `dist/` can be deployed to any static hosting service.

## 🛠️ Tech Stack

| Technology       | Purpose                         |
| ---------------- | ------------------------------- |
| **React 18**     | UI framework with hooks         |
| **Tailwind CSS** | Utility-first styling           |
| **Vite**         | Fast development and build tool |
| **Lucide React** | Beautiful icon library          |

## 📈 Performance Features

- **Optimized Calculations**: Memoized portfolio computations
- **Efficient Rendering**: React.memo for expensive components
- **Smooth Animations**: CSS transitions and transforms
- **Responsive Images**: Optimized avatar loading

## 🙏 Acknowledgments

- Stock price data is simulated for demonstration purposes
- User avatars sourced from [Pexels](https://pexels.com)
- Icons provided by [Lucide React](https://lucide.dev)
- Design inspiration from modern financial dashboards

---

**Built with ❤️ for the trading community**

_This is a simulation tool for educational purposes. No real money or actual trading is involved._
