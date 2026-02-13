# Technical Documentation

Project: 202282700-HussainAlsadah-assignment1

Date: 2026-02-13

cloning link: https://github.com/HussainAlsadah/202282700-HussainAlsadah-assignment1.git
Overview
--------
This is the documentation for the portifolio assesment, which requires utalizing github to add and change html, css and js in order to simulate a website locally.

Repository Structure
--------------------
assignment-1/
- README.md
- index.html                
- css/
	- styles.css              
- js/
	- script.js               
- assets/
	- images/
        - AI-ProjectPlaceHolder.png
        - computer-stuff.jpg
        - CV-Example.png
        - task-manager-placeholder.png
        
- docs/
	- ai-usage-report.md      
	- technical-documentation.md 

Key Files & Responsibilities
----------------------------
- `index.html`
	- Contains the page sections: About, Projects, Hobbies, Contact, and Footer.
	- Includes the mobile nav toggle button and references to `css/styles.css` and `js/script.js`.

- `css/styles.css`
	- Global resets and system font stack.
	- Sectioned styles for header, projects, hobbies, contact, and footer.
	- Responsive rules are under an `@media (max-width: 768px)` block; the navigation collapses to a dropdown panel.
	- Dark mode styles are applied by toggling the `dark-mode` class on the `body` element.

- `js/script.js`
	- Wrapped in `DOMContentLoaded` to ensure DOM nodes exist before attaching listeners.
	- Implements:
		- Smooth scrolling for internal links
		- Theme toggle (adds/removes `dark-mode` on `body` and updates icon)
		- Mobile nav toggle (adds/removes `.open` on `.nav-links` and manages `aria-expanded`)

Assets
------
- `assets/images/AI-ProjectPlaceHolder.png` used for the AI Study Assistant preview.
- `assets/images/task-manager-placeholder.png` used for the Task Manager preview.
- `assets/images/computer-stuff.jpg` (previously used) is present but not used as of now.
- `assets/images/CV-Example` was added as a test (not used as of now)

How to run locally
-------------------
1. Clone the repository. (https://github.com/HussainAlsadah/202282700-HussainAlsadah-assignment1.git)
2. Open `index.html` in a browser (no server required for this static site).
3. Test responsive behavior by resizing the window or using DevTools device emulation.

Testing & Verification
----------------------
- Smooth scrolling: click navigation links to confirm smooth scroll to sections.
- Theme toggle: click the round button at bottom-right to toggle dark/light styling.
- Mobile nav: at narrow widths (<=768px), use the hamburger button at top-right to open/close links.
- Contact form: inputs are client-side only (no backend); ensure `required` fields block submission when empty.




