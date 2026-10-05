# Shopping List Application Development Plan (V2 - JSON & Collaboration Focus)

## 1. Technology Stack Recommendation

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Frontend** | **TypeScript + React (or Next.js)** | Provides strong typing and component-based architecture for a responsive UI. |
| **Backend** | **Node.js + Express (or simple Server setup)** | Lightweight server primarily responsible for handling HTTP requests and file I/O. |
| **Data Storage** | **Local JSON File** | Persistence is handled by reading/writing a single JSON file on application startup and shutdown. |
| **Real-time** | **Socket.io** | Used for instant synchronization and updates across users viewing the same shared list. |

## 2. Requirements

*   **Persistence:** The application must persist all list data in a local JSON file. The system must read this file on startup and write to it whenever any change occurs (add item, check off, list rename).
*   **Collaboration (No Auth):** Users must be able to create new lists. Each list must have a unique, shareable URL (e.g., `myapp.com/list/:listId`).
*   **Access Control (URL-Based):** The system must determine list access based on the URL query parameters. If a user visits a list URL without the correct parameters, they should be prompted to join or denied access.
*   **List Functionality:**
    *   Create a new list.
    *   Add new items to a specific list.
    *   Mark items as purchased (toggle `isPurchased`).
    *   Permanently remove items from a list.
*   **Responsiveness:** The UI must be fully responsive and optimized for mobile, tablet, and desktop views.

## 3. Data Model Design (JSON Structure)

The entire state of the application will be managed in a single JSON file (e.g., `lists.json`).

**ShoppingList Object Structure:**
```json
{
  "listId": "uuid-unique-id",
  "listName": "Name of the shopping list",
  "ownerId": "user-identifier-placeholder", // Placeholder for unique client/session ID (since no auth)
  "members": [
    "user-identifier-placeholder-1",
    "user-identifier-placeholder-2"
  ],
  "items": [
    {
      "itemId": "item-uuid",
      "itemName": "Milk",
      "isPurchased": false,
      "addedBy": "user-identifier-placeholder-1",
      "createdAt": "timestamp"
    }
  ]
}
```

## 4. Feature Breakdown & Implementation Phases

### Phase 1: Foundation (Data Persistence & Sharing)
*   **Setup:** Initialize the TS/React/Express project structure. Set up the basic server.
*   **JSON I/O:** Implement the service layer to handle reading and writing to the `lists.json` file on application lifecycle events (startup/shutdown/write).
*   **List Creation API:** Endpoint to create a new list object in the JSON file.
*   **URL Routing:** Implement the frontend routing to handle dynamic list URLs and extract the `listId`.

### Phase 2: Core Functionality (List & Item Management)
*   **List Display:** Frontend component to fetch and display the list based on the `listId` from the URL.
*   **Item CRUD:** API endpoints to add, toggle `isPurchased`, and delete items.
*   **Persistence on Change:** Ensure that any update to the list (item added/removed/toggled) immediately triggers a write operation to the `lists.json` file.

### Phase 3: Collaboration & Real-time Sync
*   **Sharing Logic:** Implement the logic on the server to check if a visiting user is authorized to view/edit the list based on the shared parameters/list ID.
*   **Socket.io Implementation:** Integrate Socket.io to allow active users viewing the same list to see updates in real-time (e.g., when one user checks an item, all others see it instantly).

### Phase 4: Polish & Responsiveness
*   **Responsive UI:** Finalize CSS/Tailwind implementation to ensure a seamless experience across all devices.
*   **Client-Side State:** Use a state management solution (Context/Redux) to manage the current list's state efficiently.
*   **Error Handling:** Implement user-friendly feedback for failed operations (e.g., \"List not found,\" \"Failed to save list\").

## 5. Development Roadmap

*   **Sprint 1 (Week 1):** Setup, JSON file I/O (Read/Write), basic List Creation API, and URL routing structure.
*   **Sprint 2 (Week 2):** Frontend List Display, Item CRUD API, and implementing persistence on item changes.
*   **Sprint 3 (Week 3):** Implementing URL Access Logic (sharing), and integrating Socket.io for real-time updates.
*   **Sprint 4 (Week 4):** Full Responsive UI implementation, State Management, Error Handling, and final testing of the sharing mechanism.