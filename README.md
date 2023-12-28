# HTML:
The HTML document serves as the structure for the calculator application. It includes a viewport configuration, character set declaration, and links to external styles and scripts. The primary content consists of a div container with an input field for display and a set of buttons. 

# CSS (styles.css):
The stylesheet defines the visual presentation of the calculator. It employs **Flexbox to center** the calculator on the page and applies basic styling to the calculator and its components. The display input field and buttons have specified dimensions, font sizes, and margin properties. Additionally, button **hover effects** enhance user interactivity.

# JavaScript (script.js):
The JavaScript file encapsulates the logic behind the calculator's functionality. The calc function is the central handler for button clicks. It dynamically **updates the display based on user input, utilizing conditional statements to manage numeric and operator inputs, including special actions such as reset and delete**. Notably, a **try-catch block** is implemented to handle potential evaluation errors, specifically addressing the **"Uncaught SyntaxError: Invalid or unexpected token"** scenario with a **user-friendly alert**.
