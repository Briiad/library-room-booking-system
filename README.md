<h1>Library Room Booking System</h1>

<p align="center">
  <b>⚠️&nbsp;&nbsp;This project is still under development.&nbsp;&nbsp;⚠️</b>
</p>

<!-- Warning message  -->
<p align="center">
  <b>⚠️&nbsp;&nbsp;This project is still under development.&nbsp;&nbsp;⚠️</b>
</p>

<p align="center">
  <b>⚠️&nbsp;&nbsp;NO JWT AUTH IMPLEMENTED YET.&nbsp;&nbsp;⚠️</b>
</p>

## Table of Contents
- [Table of Contents](#table-of-contents)
- [System Requirements](#system-requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## System Requirements
- [Node.js](https://nodejs.org/en/) (v20.0.0 or higher)
- [PostgreSQL](https://www.postgresql.org/) (v15.0 or higher)

## Installation
1. Clone the repository
```bash
git clone https://github.com/Briiad/library-room-booking-system.git
```
2. Install dependencies
```bash
npm install
```
3. Create a `.env` file in the root directory and add the following environment variables
```bash
DATABASE_URL="postgres://postgres:password@localhost:5432/DB_NAME?schema=public"
NODEMAILER_KEY="your_nodemailer_key"
NODEMAILER_MAIL="your_nodemailer_mail"
```
4. Initialize Prisma
```bash
npx prisma db push
npx prisma db pull
npx prisma generate
```
5. Start the server
```bash
npm run dev
```

## Usage
1. Open the browser and go to `http://localhost:3000/`
2. Try to submit requests with available forms
3. Open `http://localhost:3000/admin` to access the admin panel
4. From the admin panel, you can view all the requests and approve or reject them
5. The user will receive an email with the status of their request

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.