
# Ohn Coffee Website Blueprint

## Overview

This document outlines the plan for creating a modern and visually appealing website for a coffee shop named "Ohn Coffee". The website will be a single-page application, built using HTML, CSS, and JavaScript, with a focus on modern web standards and a great user experience.

## Design and Features

### Visual Design
*   **Aesthetics:** The design will be clean, modern, and inviting. It will use a warm color palette, high-quality images of coffee, and elegant typography.
*   **Layout:** The layout will be responsive and adapt to different screen sizes, from mobile phones to desktops.
*   **Color Palette:**
    *   Primary: #6F4E37 (Coffee Brown)
    *   Secondary: #F5F5DC (Beige)
    *   Accent: #D2B48C (Tan)
    *   Text: #333333 (Dark Gray)
*   **Typography:**
    *   Headings: A stylish serif font.
    *   Body: A clean and readable sans-serif font.
*   **Interactivity:** Smooth scrolling for navigation, and subtle animations on hover.

### Features
*   **Header:** A fixed header containing the "Ohn Coffee" logo and a navigation bar.
*   **Navigation:** The navigation bar will have links to different sections of the page: "Home", "About", "Menu", and "Contact".
*   **Hero Section:** A full-width hero section with a captivating background image and a prominent headline.
*   **About Section:** A section describing the story and passion behind Ohn Coffee.
*   **Menu Section:** A well-structured menu showcasing the different coffee and food items.
*   **Contact Section:** A section with the coffee shop's address, contact information, and a simple contact form.
*   **Footer:** A footer with social media links and copyright information.

## Current Plan

The current plan is to add a Dark/White mode toggle to the website to improve user experience and accessibility.

**Steps:**

1.  **Refactor `style.css`:**
    *   Introduce CSS variables for all colors (background, text, primary, secondary, accent).
    *   Define a `.dark-theme` class that overrides these variables for dark mode.
2.  **Modify `index.html`:**
    *   Add a theme toggle button in the navigation bar.
3.  **Modify `main.js`:**
    *   Add logic to toggle the `.dark-theme` class on the `body` element.
    *   Save the user's theme preference in `localStorage`.
    *   Apply the saved theme on page load.
    *   Update the `MenuItem` Web Component to respect the theme variables.
4.  **Deployment:**
    *   Commit all changes.
    *   Push to the repository to trigger deployment.
