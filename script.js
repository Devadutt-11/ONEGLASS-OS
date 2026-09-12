

function updateTime() {
    var currentTime = new Date().toLocaleString();
    var timeText = document.querySelector('#datetime');
    timeText.innerHTML = currentTime;
}
setInterval(function() {
    document.querySelector('#datetime').innerHTML = new Date().toLocaleString();
}, 1000);
// Make the DIV element draggable:
dragElement(document.getElementById("container"));

// Step 1: Define a function called `dragElement` that makes an HTML element draggable.
function dragElement(element) {
  // Step 2: Set up variables to keep track of the element's position.
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  // Step 3: Check if there is a special header element associated with the draggable element.
  if (document.getElementById(element.id + "header")) {
    // Step 4: If present, assign the `dragMouseDown` function to the header's `onmousedown` event.
    // This allows you to drag the window around by its header.
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    // Step 5: If not present, assign the function directly to the draggable element's `onmousedown` event.
    // This allows you to drag the window by holding down anywhere on the window.
    element.onmousedown = startDragging;
  }

  // Step 6: Define the `startDragging` function to capture the initial mouse position and set up event listeners.
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    var elementPosition = element.getBoundingClientRect();
    element.style.position = "fixed";
    element.style.transform = "none";
    element.style.left = elementPosition.left + "px";
    element.style.top = elementPosition.top + "px";
    // Step 7: Get the mouse cursor position at startup.
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 8: Set up event listeners for mouse movement (`elementDrag`) and mouse button release (`closeDragElement`).
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  // Step 9: Define the `elementDrag` function to calculate the new position of the element based on mouse movement.
  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 10: Calculate the new cursor position.
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 11: Update the element's new position by modifying its `top` and `left` CSS properties.
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  // Step 12: Define the `stopDragging` function to stop tracking mouse movement by removing the event listeners.
  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

var container = document.querySelector("#container");
function closeContainer(element) {
  element.style.display = "none";
 
  
}
function openContainer(element) {
  element.style.display = "flex";
  element.style.position = "fixed";
  element.style.top = "50%";
  element.style.left = "50%";
  element.style.transform = "translate(-50%, -50%)";
    
}
var containerscreenclose=document.querySelector('#containerclose')
var containerscreenopen=document.querySelector("#containeropen")
containerscreenclose.addEventListener("click",function() {
  document.querySelector("#bootSound").play();
  closeContainer(container);
});
containerscreenopen.addEventListener("click",function() {
  document.querySelector("#bootSound").play();
  openContainer(container)
});
var selectedIcon= undefined;
function selectIcon(element) {
  element.classList.add("selected");
  selectedIcon = element;
}
function deselectIcon(element) {
  element.classList.remove("selected");
  selectedIcon = undefined;
}
function handleIconTap(element) {
  if (element.classList.contains("selected")) {
    deselectIcon(element);
  } else {
  
    selectIcon(element);
  }
}

var onenoteswindow = document.querySelector("#onenoteswindow");
var onenotesclose = document.querySelector("#onenotesclose");
var onenotesicon = document.querySelector("#onenotesicon"); 
dragElement(onenoteswindow);
onenotesicon.addEventListener("click", function() {
  handleIconTap(onenotesicon);
   document.querySelector("#openapp").play();
  openWindow(onenoteswindow);
 
});
onenotesclose.addEventListener("click", function() {
   document.querySelector("#openapp").play();
  closeContainer(onenoteswindow);
});
var content =[
  {
    title: "Welcome to onenotes",
    date: "11-09-2026",
    content: '<P> This is the first note in OneNotes. I am actually worrid if it will work or not</p>'
  },
  {
    title: "My journey with stardance",
    date: "11-09-2026",
    content: '<p> I have done three projects so far including this one.I have shipped two projects perfectly but this is my second attempt in this project.</p>' 
  },
  {
    title: "My Goal",
    date: "11-09-2026",
    content: '<p> My goal is very simple. I want to get a NEXT mousepad or that pendrive.</p>'
  }
]
function setNotesContent(index) {
  var note = content[index];
  var notesDiv = document.querySelector("#notesContent");
  notesDiv.innerHTML = `
    <p style="margin: 0px;">${note.title}</p>
    <p style="font-size: 12px; margin: 0px;">${note.date}</p>
    ${note.content}
  `;
}
  setNotesContent(0);
function addToSidebar(index) {
  var sidebar = document.querySelector("#sidebar");
  var note = content[index];
  var newDiv = document.createElement("div");
  newDiv.innerHTML = `
    <p style="margin: 0px;">${note.title}</p>
    <p style="font-size: 12px; margin: 0px;">${note.date}</p>
  `;
  newDiv.addEventListener("click", function() {
    setNotesContent(index);
  });
  sidebar.appendChild(newDiv);
}

for(let i=0; i<content.length; i++)  {
  addToSidebar(i);
}
var biggestIndex = 1; 
var topBar = document.querySelector("#topbar")

function openWindow(element) {
  element.style.display = "flex";
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
  
}

function handleWindowTap(element) {
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
  deselectIcon(selectedIcon)
}
var terminalwindow = document.querySelector("#terminalwindow");
var terminalclose = document.querySelector("#terminalclose");
var terminalicon = document.querySelector("#terminalicon");
var terminaloutput = document.querySelector("#terminalOutput");
var terminalinput = document.querySelector("#terminalInput");
dragElement(terminalwindow);
terminalicon.addEventListener("click", function() {
  handleIconTap(terminalicon);
   document.querySelector("#openapp").play();
  openWindow(terminalwindow);
});
terminalclose.addEventListener("click", function() {
   document.querySelector("#openapp").play();
  closeContainer(terminalwindow);
});
function getResponse(command) {
  if(command === "help") {
    return "Available commands: help, about, clear,status,whoami";
  } else if(command === "about") {
    return "This is OneGlass OS, a simple operating system simulation.";
  } else if(command === "clear") {
    terminaloutput.innerHTML = "";
    return "";
  } else if(command === "status") {
    return "All systems operational.";
  } else if(command === "whoami") {
    return "You are probably a crew of Hack Club, or a curious user exploring OneGlass OS.";
  }else {
    return "Command not recognized. Type 'help' for a list of available commands.";
  }
}
terminalinput.addEventListener("keydown", function(event) {
  if(event.key === "Enter") {
    var command = terminalinput.value;
    terminaloutput.innerHTML += `<p style='margin: 4px 0;'>&gt; ${command}</p>`;
    var response = getResponse(command);
    if(response !== "") {
      terminaloutput.innerHTML += `<p style='margin: 4px 0;'>${response}</p>`;
    }
    terminalinput.value = "";
  }
});
 

