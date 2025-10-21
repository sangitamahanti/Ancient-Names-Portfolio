# 🏛️ Ancient-Names-Portfolio: Historical Fantasy Name Generator

[![Demo GIF of Theme Toggle and Copy Feature](public\images\demo.gif)](https://github.com/sangitamahanti/Ancient-Names-Portfolio)


This project is a specialized web tool built with **React and Vite** to present curated fantasy names rooted in Bronze Age civilizations, driven by research into cultures like **Mesopotamia, the Aegean cultures, Egypt, and China**.

## 💡 The Problem Solved

This tool provides high-quality, thematically rich results for creative writers and game developers by using symmetrical, curated data sets, solving the problem of generating names that align with **historically accurate or speculative character context** for complex narratives.

---

## 🌟 Completed Features (V3.0)

This project utilizes a modern component-based architecture and now includes advanced search utility:

1. **Fully Functional Theme Toggle:** Seamlessly switch between **Light Mode** and **Dark Mode**.
2. **Copy-to-Clipboard:** Every name card features a functional button for instant name capture.
3. **Culture & Gender Filtering:**
    * Users can instantly filter the names by specific **Culture** and **Gender**.
    * Supports filtering by both criteria simultaneously.
4. **Random Name Generator:** A dedicated button allows users to generate a single random name based on the **current active filters**.
5. **Data Scalability:** Utilizes a dynamic mapping function in `App.jsx` to render all data sections from a central index file.

---

## 🚀 Technical Architecture & Deployment

| Item | Details |
| :--- | :--- |
| **Front-End Framework** | React v18.2 (Component-based structure). |
| **Logic** | JavaScript/React Hooks (`useState`, `useEffect`) manage state, theme, filtering, and randomness. |
| **Deployment Platform** | GitHub Pages (`gh-pages`). |
| **Live URL** | [https://sangitamahanti.github.io/Ancient-Names-Portfolio/](https://sangitamahanti.github.io/Ancient-Names-Portfolio/) |

---

## 🎯 Future Roadmap (Next Step)

| Feature Target | Business Justification |
| :--- | :--- |
| **Data Expansion (IVC)** | Fulfill the original goal of incorporating research into the Indus Valley Civilization. |

---

## 🛠️ Local Development

To run this project locally:

1. Clone the repository:

    ```bash
    git clone [https://github.com/sangitamahanti/Ancient-Names-Portfolio.git](https://github.com/sangitamahanti/Ancient-Names-Portfolio.git)
    ```

2. Navigate to the project directory and install dependencies:

    ```bash
    cd Ancient-Names-Portfolio
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

---

## 📢 Final Launch Steps

1. **Build the project:**

    ```bash
    npm run build
    ```

2. **Commit all changes** (new code and the final README):

    ```bash
    git add .
    git commit -m "feat: Final app features deployed and README updated to V3.0"
    ```

3. **Redeploy the site:**

    ```bash
    npx gh-pages -d dist
    ```
