# 🏛️ Ancient-Names-Portfolio: Historical Fantasy Name Generator

[![Demo GIF of Theme Toggle and Copy Feature](public\images\demo.mp4)](https://github.com/sangitamahanti/Ancient-Names-Portfolio)

This project is a specialized web tool built with **React and Vite** to present curated fantasy names rooted in Bronze Age civilizations, driven by research into cultures like **Mesopotamia, the Aegean cultures, Egypt, and China**.

## 💡 The Problem Solved

This tool provides high-quality, thematically rich results for creative writers and game developers by using symmetrical, curated data sets (5 cultures, 6 unique names each), solving the problem of generating names that align with **historically accurate or speculative character context** for complex narratives.

***

## 2. Technical Architecture & Completed Features (V2.0)

This project is deployed on GitHub Pages and utilizes a modern component-based architecture for maximum maintainability and rapid feature development.

* **Front-End Framework:** React v18.2 (Component-based structure).
* **Data Set:** 30 unique names across 5 major cultures (e.g., Mesopotamia, Greek, Roman).
* **Logic:** JavaScript/React Hooks (`useState`, `useEffect`) manage the application state, theme, and interactivity.

### Core Features Demonstrated

1. **Fully Functional Theme Toggle:** Seamlessly switch between **Light Mode** (default for high readability) and **Dark Mode** (high-contrast artistic theme).
2. **Copy-to-Clipboard:** Every name card features a functional button for instant name capture.
3. **Data Scalability:** Utilizes a dynamic mapping function in `App.jsx` to render all data sections from a central index file.

***

## 3. Future Roadmap & Scalability (Next Steps)

The next priority is to enhance user experience by providing tools to efficiently navigate the 30+ name library.

| Feature Target | Business Justification | Technical Implementation Plan |
| :--- | :--- | :--- |
| **Contextual Filtering** | Allow users to quickly filter names by specific criteria to meet highly specific creative needs. | Build a dedicated **Filter Component** in React using dropdowns (`<select>`) to filter the main data array by **Culture** and **Gender**. |
| **Data Expansion (IVC)** | Fulfill the original goal of incorporating research into the Indus Valley Civilization. | Add a new **`indusvalley.json`** data set and update the central index. |
| **Random Name Generation** | Add a core utility function that randomly generates a name based on the current filter settings. | Implement a **`handleRandomName`** function that selects a random entry from the *filtered* data array. |
