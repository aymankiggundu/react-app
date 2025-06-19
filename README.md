# Texol Admin Dashboard

A modern, responsive React admin dashboard for Texol Energies, featuring:

- Collapsible sidebar with icons and company branding
- Page navigation (Home, Loyalty, Customers, Messages, Inventory, Staff, Finance, Fraud, User, Reports)
- Bootstrap and custom CSS for a clean UI
- Modular component structure

## Features

- Sidebar with toggle, scroll, and icons
- Company logo and name always visible in sidebar
- Responsive layout
- Easy to extend with new pages/components

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm (v9+ recommended)

### Installation

```bash
npm install
```

### Running the App

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Project Structure

```
public/
  index.html
src/
  assets/images/TEXOL logo.png
  components/
    Sidebar/
    Header/
    Tabs/
    Common/
  pages/
  layouts/
  routes/
  services/
  store/
  types/
  utils/
  App.tsx
  App.css
  main.tsx
```

### Main Dependencies

- react==18.3.1
- react-dom==18.3.1
- react-icons==5.5.0
- bootstrap==5.3.7

See `requirements.txt` for details.

---

© 2025 Texol Energies. All rights reserved.
