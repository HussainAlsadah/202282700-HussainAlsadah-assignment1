# Technical Documentation

Project: 202282700-HussainAlsadah-assignment1

Date: 2026-02-13

Overview
--------
This document describes the code organization, responsibilities of key files, development notes, and how to run and test the portfolio locally.

Repository Structure
--------------------
assignment-1/
- README.md
- index.html                -- main single-page markup
- css/
	- styles.css              -- main stylesheet (responsive rules, dark-mode, components)
- js/
	- script.js               -- smooth scroll, theme toggle, and mobile nav logic
- assets/
	- images/                 -- project placeholder images and other assets
- docs/
	- ai-usage-report.md      -- documents how AI was used (this file)
	- technical-documentation.md -- (this file)

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
- `assets/images/computer-stuff.jpg` (previously used) is present but not used as section background.

How to run locally
-------------------
1. Clone the repository.
2. Open `index.html` in a browser (no server required for this static site).
3. Test responsive behavior by resizing the window or using DevTools device emulation.

Testing & Verification
----------------------
- Smooth scrolling: click navigation links to confirm smooth scroll to sections.
- Theme toggle: click the round button at bottom-right to toggle dark/light styling.
- Mobile nav: at narrow widths (<=768px), use the hamburger button at top-right to open/close links.
- Contact form: inputs are client-side only (no backend); ensure `required` fields block submission when empty.

Accessibility & Notes
---------------------
- ARIA: The `nav-toggle` button includes `aria-expanded` and `aria-label`. The theme button has an accessible label.
- Images include `alt` attributes.
- Improvements: better keyboard focus handling when mobile nav opens, and persisting theme preference via `localStorage`.

Future Enhancements
-------------------
- Persist theme preference (localStorage).
- Add form submission handling (serverless function or email endpoint) if backend is desired.
- Add unit/visual tests and CI checks.

Known Limitations
-----------------
- AI usage documentation needs reflection of exact AI prompts you ran (if you used other tools outside this repo).  
- `docs/` files were initially empty and now contain drafts; expand them with personal notes before submission.

