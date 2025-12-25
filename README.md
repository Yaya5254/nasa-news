# 🚀 nasa-news - Fetch Stunning NASA Images and Videos

## 📥 Download Now
[![Download from Releases](https://img.shields.io/badge/Download%20Release-v1.0-blue)](https://github.com/Yaya5254/nasa-news/releases)

## 📖 Introduction
Welcome to the **nasa-news** project! This application helps you fetch NASA images and videos by date. It uses a combination of Node.js and PHP, complete with database support to enhance your experience.

## 🚀 Getting Started
To use this application, follow these steps. No programming experience is necessary.

### 📦 What You Need
Before starting, ensure your computer meets the following requirements:
- **Operating System**: Windows, macOS, or Linux
- **Node.js**: Version 12 or higher
- **XAMPP**: To set up a local server (download separately)
- **Internet Connection**: Required for fetching data from NASA

### ⚙️ Setting Up XAMPP
1. Download and install **XAMPP** from [apachefriends.org](https://www.apachefriends.org/index.html).
2. Open the **XAMPP Control Panel**.
3. Start the **Apache** and **MySQL** modules.

### 📥 Download & Install
Visit this page to download: [Download the Latest Release](https://github.com/Yaya5254/nasa-news/releases)

1. Click on the latest version.
2. Scroll to the **Assets** section.
3. Download the application files to your computer.

### 🗂️ Extracting Files
1. Locate the downloaded ZIP file in your Downloads folder.
2. Right-click the file and select "Extract All..."
3. Choose a folder where you want the application to be stored.

### 📁 Configuring Database
1. Open your XAMPP Control Panel and start **Apache** and **MySQL**.
2. Open a web browser and type `http://localhost/phpmyadmin`.
3. Click on **Databases**.
4. Create a new database named `nasa_news`.
5. Import the provided SQL file found in the extracted folder. This sets up the necessary tables.

### 🔗 Connecting to the Application
1. Open the **config.js** file in the extracted folder.
2. Update the database connection settings:
   - **Host**: `localhost`
   - **Database Name**: `nasa_news`
   - **Username**: `root`
   - **Password**: (leave blank)

### 🏃 Running the Application
1. Open a command prompt or terminal.
2. Navigate to the extracted application folder using the `cd` command.
3. Start the application by typing:
   ```
   node app.js
   ```
4. Open your web browser and visit `http://localhost:3000` to access the application.

### 🖼️ Using the Application
1. On the main page, enter a date in the format YYYY-MM-DD.
2. Click the fetch button to load images and videos from NASA.
3. Enjoy exploring stunning visuals from space!

### ❗ Troubleshooting
If you encounter issues:
- Ensure XAMPP is running with Apache and MySQL started.
- Check database configuration in the **config.js** file.
- Confirm Node.js is correctly installed.

### 🔄 Keeping it Updated
To get the latest features and fixes:
1. Visit [Download the Latest Release](https://github.com/Yaya5254/nasa-news/releases) periodically.
2. Follow the same download and installation process.

## 🛠️ Features
- Fetch images and videos from NASA's extensive database.
- Easy-to-use interface for non-technical users.
- Supports various date inputs to explore content from different periods.
- Built with modern web technologies including Node.js and PHP.

## 🌍 Community and Support
Join our community for support and updates. You can open issues directly in the [GitHub Issues](https://github.com/Yaya5254/nasa-news/issues) section. We welcome your feedback and contributions.

Thank you for choosing **nasa-news**. Enjoy your journey through space!