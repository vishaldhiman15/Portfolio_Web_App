# How to Run the Portfolio Web App

This project consists of static web files (HTML, CSS, and JavaScript). You do not need to install any external Python packages or libraries to run it. Python comes with a built-in HTTP server that you can use out of the box.

### Step 1: Verify Python is Installed
First, ensure you have Python 3 installed on your system. Open your terminal or command prompt and run:
```bash
python3 --version
```
*(Note: On Windows, you might just need to use `python --version`)*

### Step 2: Navigate to the Project Folder
Open your terminal and use the `cd` (change directory) command to navigate to the folder containing the `index.html` file (if you aren't already there):
```bash
cd "your current disk contain this project repo path"
```

### Step 3: Start the Python Web Server
Run the following command to start Python's built-in static web server on port 8000:
```bash
python3 -m http.server 8000
```
*(Note: On Windows, use `python -m http.server 8000`)*

### Step 4: Open in Your Web Browser
Once the server is running, open your favorite web browser (Chrome, Safari, Edge, etc.) and go to the following address:

http://localhost:8000

### How to Stop the Server
When you are done viewing the app, go back to your terminal and press `Ctrl + C` to stop the local web server.
