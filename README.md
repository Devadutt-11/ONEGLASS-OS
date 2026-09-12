# ONEGLASS OS

A modern, interactive web-based operating system simulation featuring a desktop environment with draggable windows, multiple applications, and a command-line terminal interface.

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage Guide](#usage-guide)
- [Available Applications](#available-applications)
- [OneTerminal Commands](#oneterminal-commands)
- [Technical Stack](#technical-stack)
- [File Descriptions](#file-descriptions)

---

## 🎯 Overview

**ONEGLASS OS** is a simulation of a desktop operating system built entirely with HTML, CSS, and JavaScript. It provides a familiar desktop interface with draggable windows, a system taskbar with live clock, and multiple applications accessible from the desktop.

The OS includes:
- A boot sequence with startup sound
- Interactive desktop with application icons
- Draggable windows and dialogs
- OneNotes application for note-taking
- OneTerminal for command execution
- Real-time system clock in the taskbar

---

## ✨ Features

### Core Features
- **Boot Sound**: Plays a startup sound on page load with fallback to click-to-play
- **Live Clock**: Real-time date and time display in the taskbar (updates every second)
- **Draggable Windows**: All windows and dialogs can be moved around the screen
- **Desktop Icons**: Application launchers on the desktop
- **Window Management**: Open, close, and manage multiple windows
- **Z-Index Management**: Proper window layering when clicking/dragging

### Audio System
- Boot sound on startup
- App open/close sound effects
- Graceful audio fallback handling

### Applications
1. **OneNotes** - A simple note-taking application
2. **OneTerminal** - Command-line interface with built-in commands

---

## 📁 Project Structure

```
ONEGLASS-OS/
├── index.html                                    # Main HTML file
├── script.js                                     # JavaScript functionality
├── style.css                                     # Styling
├── README.md                                     # This file
├── background.jpg                                # Desktop background
├── boot.mp3                                      # Boot sound file
├── appopenig.mp3                                 # App open/close sound
├── one note.png                                  # OneNotes icon
└── terminal.png                                  # OneTerminal icon
```

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs entirely client-side

### Installation

1. **Clone or download the repository**
   ```bash
   git clone <repository-url>
   cd ONEGLASS-OS
   ```

2. **Open in browser**
   - Simply double-click `index.html` to open, OR
   - Use a local server for best results:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     
     # Using Node.js with http-server
     npx http-server
     ```

3. **Access the application**
   - Open your browser to `http://localhost:8000` (or wherever you're serving it)
   - You should see the ONEGLASS OS desktop with boot sound

---

## 📖 Usage Guide

### Desktop Navigation

1. **Startup**
   - Page loads with boot sound
   - Desktop displays with taskbar at the top
   - Clock shows current date and time (updates every second)

2. **Opening Applications**
   - Click on application icons on the desktop
   - Window opens with app functionality
   - Sound effect plays on app open/close

3. **Managing Windows**
   - **Move**: Click and drag from the window header
   - **Close**: Click the X button in the window header
   - **Focus**: Click on a window to bring it to the front

4. **Taskbar**
   - **Left side**: Live date/time display
   - **Right side**: Click "ONEGLASS OS" to open the welcome dialog
   - **Function**: Shows system information and clock

### OneNotes Application

1. **Opening OneNotes**
   - Click the "One Notes" icon on the desktop
   - Window opens with your notes

2. **Features**
   - **Sidebar**: Lists all available notes
   - **Content Area**: Displays selected note with title, date, and content
   - **Default Notes**: Comes pre-loaded with 3 sample notes
   - **Navigation**: Click any note in sidebar to view its content

3. **Sample Notes Included**
   - Welcome to OneNotes (11-09-2026)
   - My Journey with Stardance (11-09-2026)
   - My Goal (11-09-2026)

### OneTerminal Application

1. **Opening OneTerminal**
   - Click the "OneTerminal" icon on the desktop
   - Terminal window opens with command prompt

2. **Using the Terminal**
   - Type commands in the input field
   - Press **Enter** to execute
   - Output appears above the input field
   - Type `help` to see available commands

3. **Command Syntax**
   - Commands are case-sensitive
   - One command per line
   - Input field clears after each command execution

---

## 💻 OneTerminal Commands

OneTerminal includes a built-in command system with the following available commands:

| Command | Description | Output |
|---------|-------------|--------|
| `help` | Shows all available commands | Lists: help, about, clear, status, whoami |
| `about` | Information about the OS | "This is OneGlass OS, a simple operating system simulation." |
| `clear` | Clears the terminal output | Clears all previous commands and responses |
| `status` | Shows system status | "All systems operational." |
| `whoami` | Identifies the user | "You are probably a crew of Hack Club, or a curious user exploring OneGlass OS." |
| Any other command | Unrecognized command | "Command not recognized. Type 'help' for a list of available commands." |

### Command Examples

```
> help
Available commands: help, about, clear, status, whoami

> status
All systems operational.

> whoami
You are probably a crew of Hack Club, or a curious user exploring OneGlass OS.

> clear
[Terminal cleared]

> about
This is OneGlass OS, a simple operating system simulation.
```

---

## 🛠️ Technical Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES5/ES6)
- **Architecture**: Client-side only, no backend required
- **Audio**: HTML5 Audio API with error handling
- **DOM Manipulation**: Pure JavaScript (no frameworks)
- **Styling**: CSS Grid and Flexbox

### Key Technologies Used

- **HTML5 Audio Element**: For boot and app sounds
- **CSS Flexbox**: For responsive layout
- **JavaScript Event Listeners**: For interactivity
- **DOM API**: For dynamic content manipulation
- **Window Management**: Custom Z-index layering system

---

## 📄 File Descriptions

### `index.html`
Main HTML file that defines the structure of the OS interface.

**Contents:**
- Audio elements for boot and app sounds
- Welcome dialog container
- Desktop application area with icons
- Window containers for OneNotes and OneTerminal
- Taskbar with clock display
- Script references

### `script.js`
Core JavaScript file that handles all functionality and interactivity.

**Key Functions:**

1. **Time Management**
   - `updateTime()` - Updates the clock display
   - Real-time updates every 1000ms

2. **Window Control**
   - `dragElement()` - Makes elements draggable
   - `openWindow()` - Opens and focuses windows
   - `closeContainer()` - Closes windows
   - `handleWindowTap()` - Manages window focus

3. **Icon Management**
   - `handleIconTap()` - Selects/deselects desktop icons
   - `selectIcon()` - Adds selection styling
   - `deselectIcon()` - Removes selection styling

4. **OneNotes Functionality**
   - `setNotesContent()` - Displays selected note
   - `addToSidebar()` - Creates sidebar navigation
   - Pre-loaded note content array

5. **OneTerminal Functionality**
   - `getResponse()` - Processes terminal commands
   - Command parsing and response generation
   - Event listeners for terminal input

### `style.css`
Styling file with all visual appearance definitions.

**Includes:**
- Layout and positioning styles
- Window and dialog styling
- Icon and taskbar appearance
- Animations and transitions
- Responsive design
- Color scheme and typography

### Media Files

- **boot.mp3** - Startup sound (plays on page load)
- **appopenig.mp3** - App open/close sound effects
- **one note.png** - Icon for OneNotes application
- **terminal.png** - Icon for OneTerminal application
- **background.jpg** - Desktop background image

---

## 🎨 Customization

### Adding New Commands to OneTerminal

Edit the `getResponse()` function in `script.js`:

```javascript
function getResponse(command) {
  if(command === "help") {
    return "Available commands: help, about, clear, status, whoami, newcommand";
  } else if(command === "newcommand") {
    return "Your custom response here";
  }
  // ... rest of commands
}
```

### Adding New Notes to OneNotes

Edit the `content` array in `script.js`:

```javascript
var content = [
  {
    title: "Note Title",
    date: "DD-MM-YYYY",
    content: '<p>Note content here</p>'
  }
  // ... add more notes
]
```

### Changing Sounds

Replace the audio file references in `index.html`:

```html
<audio id="bootSound" src="your-boot-sound.mp3"></audio>
<audio id="openapp" src="your-app-sound.mp3"></audio>
```

---

## 🐛 Troubleshooting

### Boot Sound Not Playing
- Browser autoplay policies may prevent audio
- Click anywhere on the page to trigger audio playback
- Check browser console (F12) for audio errors
- Ensure audio files exist in the project directory

### Windows Not Dragging
- Make sure you're clicking and dragging from the window header
- Check browser console for JavaScript errors
- Verify CSS is properly loaded

### Commands Not Working
- Ensure commands are typed exactly as shown (case-sensitive)
- Use `help` command to see available options
- Check browser console for JavaScript errors

### Icons Not Responding
- Try refreshing the page
- Check that JavaScript file is properly linked
- Verify image files are in the correct location

---

## 📝 License

This project is free to use and modify. Created as a creative operating system simulation project.

---

## 🤝 Contributing

Feel free to fork, modify, and enhance this project. Some ideas:
- Add more applications (calculator, notepad, file manager)
- Implement file system simulation
- Add more terminal commands
- Create application windows resizing
- Add themes and customization options
- Implement local storage for note persistence

---

## 📞 Support

For issues or questions:
1. Check the Troubleshooting section above
2. Open browser Developer Tools (F12) and check the Console
3. Review the file structure and ensure all assets are present

---

## 🎓 Learning Resources

This project demonstrates:
- DOM manipulation with vanilla JavaScript
- Event handling and listeners
- Drag and drop functionality
- Window management systems
- Audio API usage
- CSS layout and positioning
- State management patterns

Perfect for learning web development fundamentals!

---

**Last Updated**: September 12, 2026
**Version**: 1.0
**Status**: Stable and Fully Functional