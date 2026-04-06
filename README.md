# Finance Tracker Dashboard

This is a small finance dashboard I built using React to practice building real-world UI and handling data on the frontend.

It lets you view transactions, check insights through charts, and interact with the data in a clean and simple interface.

---

##  What’s inside

* A transactions page where you can:

  * search
  * sort
  * export data as CSV
* An insights page with charts (income, expenses, savings)
* A responsive layout (works on mobile + desktop)
* Dark mode support
* A simple login/signup system using tokens

---

##  Auth (simple, frontend-only)

There’s no real backend here.

* Login/signup just sets a **token in localStorage**
* Refresh doesn’t log you out
* Logout clears the token

It’s just to simulate how auth works in real apps.

---

##  Roles

There are two roles:

* **User** → can view everything
* **Admin** → can delete transactions

Admin is just a toggle (for testing UI behavior).

---

## Charts

Charts are built using MUI:

* Line chart → income vs expenses
* Bar chart → savings
* Pie chart → spending breakdown

You can also switch between years.

---

##  Tech used

* React
* Tailwind CSS
* MUI (for charts + icons)
* Context API (for global state)
* for icons used font awesome

---

##  How I approached it

* Used **Context API** to manage:

  * dark mode
  * token (login state)
  * admin role
  * selected year

* Kept data in a simple file (`data.js`)

* Used component-level state for transactions
* used navbar and sidebar as components to render through out different navigation
* for authorization  i am parallely checking three states admin'stoken user's token and without token handelled by localstorage and based on that role based functions are going to be performed
* however ideally without token or admin no data should be visible just for demonstration purpose  i am leaving it on to just giving a simple alert message >

No backend — focus was purely frontend logic + UI.

---

## Run it locally

```bash
git clone "https://github.com/Mr-Hariom-Kumar/zorvynAssesment.git"
cd finance-dashboard
npm install
npm install @mui/material @mui/icons-material @mui/x-charts
npm run dev
```

---

## Limitations

* No real authentication
* No database (data resets on refresh)
* Admin is just simulated
* buggy! due to using selected year in a single context file. while switching in to the  different years that is causing unnecessary  rerendering of barchart data,piechart data  and insights data

---

##  If I extend this

* Add backend (Node )
* Store transactions permanently
* Add edit/create transaction form
* Proper auth (JWT)
* Route protection

---

##  Why I made this

Mainly to practice:

* building dashboards
* handling UI state
* working with charts
* making responsive layouts
