

# Timeline App – Stage 4: Static Typing & Modular Code

This stage introduces **TypeScript** with **strict typing** and a **modular architecture** to improve maintainability and scalability.

---

## 🚀 What’s New in Stage 4
- Added **TypeScript** (`tsconfig.json` with strict mode enabled).
- Converted `script.js` → `src/index.ts`.
- Introduced **interfaces and types** for event data.
- Codebase split into **modules**:
  - `fetcher.ts` → Handles fetching event data from `events.json`.
  - `renderer.ts` → Renders timeline events on the page.
  - `modal.ts` → Manages modal popup functionality.
- Added **build scripts** (`tsc`) to compile TypeScript into a `dist/` folder.
- Verified that the app still runs in the browser using the compiled JS.

---

## 📂 Project Structure
