const lightTheme = "styles/light.css";
const darkTheme = "styles/dark.css";
const sunIcon = "assets/SunIcon.svg";
const moonIcon = "assets/MoonIcon.svg";
const themeIcon = document.getElementById("theme-icon");
const res = document.getElementById("result");
const toast = document.getElementById("toast");

function calculate(value) {
  try {
    // Using math.evaluate instead of eval
    const calculatedValue = math.evaluate(value || '0');
    if (isNaN(calculatedValue)) {
      res.value = "Invalid operation";
      setTimeout(() => {
        res.value = "";
      }, 1300);
    } else {
      res.value = calculatedValue;
    }
  } catch (error) {
    res.value = "Error";
    setTimeout(() => {
      res.value = "";
    }, 1300);
  }
}

// Swaps the stylesheet to achieve dark mode.
function changeTheme() {
  const theme = document.getElementById("theme");
  setTimeout(() => {
    toast.innerHTML = "Calculator";
  }, 1500);
  if (theme.getAttribute("href") === lightTheme) {
    theme.setAttribute("href", darkTheme);
    themeIcon.setAttribute("src", sunIcon);
    toast.innerHTML = "Dark Mode";
  } else {
    theme.setAttribute("href", lightTheme);
    themeIcon.setAttribute("src", moonIcon);
    toast.innerHTML = "Light Mode";
  }
}

// Displays entered value on screen.
function liveScreen(enteredValue) {
  if (!res.value) {
    res.value = "";
  }
  res.value += enteredValue;
}

// Adding event handler on the document to handle keyboard inputs
document.addEventListener("keydown", keyboardInputHandler);

// Function to handle keyboard inputs
function keyboardInputHandler(e) {
  e.preventDefault(); // to fix default behavior issues

  // Numbers
  if (e.key >= "0" && e.key <= "9") {
    res.value += e.key;
  }

  // Operators
  if (["+", "-", "*", "/"].includes(e.key)) {
    res.value += e.key;
  }

  // Decimal point
  if (e.key === ".") {
    res.value += ".";
  }

  // Enter key to calculate result
  if (e.key === "Enter") {
    calculate(res.value);
  }

  // Backspace key to remove the last input
  if (e.key === "Backspace") {
    res.value = res.value.slice(0, -1);
  }
}
