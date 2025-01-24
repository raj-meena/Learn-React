# React Learning Guide

This repository is designed to help you learn React step by step, along with common interview questions and answers.

## Table of Contents

1. React Basics
   - Components
   - JSX
   - Props
   - State
   - Lifecycle Methods
   - Hooks
   - Context
   - Router

2. Project Structure
   - src/components: Contains all React components
   - src/context: Contains React Context definitions
   - src/App.js: Main application component
   - src/index.js: Entry point

3. Getting Started
```bash
# Install dependencies
npm install

# Start development server
npm start
```

## Common React Interview Questions and Answers

### Basic React Concepts

1. **What is React?**
   - React is a JavaScript library for building user interfaces
   - It was developed by Facebook
   - It uses a virtual DOM for efficient rendering
   - It follows a component-based architecture

2. **What is JSX?**
   - JSX is a syntax extension for JavaScript
   - It allows you to write HTML-like code in JavaScript
   - It gets transformed into regular JavaScript during build

3. **What are Props?**
   - Props are read-only components
   - They are passed from parent to child components
   - They help make components reusable

4. **What is State?**
   - State is a built-in React object that stores data
   - State can be modified using setState() or useState hook
   - State changes trigger re-rendering

5. **What are Hooks?**
   - Hooks are functions that allow you to use state and lifecycle features in functional components
   - Common hooks include:
     - useState: For managing state
     - useEffect: For handling side effects
     - useContext: For consuming context
     - useRef: For creating mutable references

6. **What is the Virtual DOM?**
   - It's a lightweight copy of the actual DOM
   - React uses it to improve performance
   - It helps minimize direct DOM manipulation

7. **Explain Component Lifecycle**
   - Mounting: Component is created and inserted into DOM
   - Updating: Component is re-rendered
   - Unmounting: Component is removed from DOM

8. **Class vs Functional Components**
   - Functional Components:
     - Simpler syntax
     - Use hooks for state and lifecycle
     - Preferred in modern React
   - Class Components:
     - Use class syntax
     - Have lifecycle methods
     - Can be more verbose

### Advanced Concepts

9. **What is Context API?**
   - Context provides a way to pass data through the component tree without passing props manually
   - It's useful for sharing global data (theme, user preferences, authentication state)
   - It helps avoid prop drilling
   - Created using React.createContext()

10. **What are Custom Hooks?**
   - Custom hooks are JavaScript functions that start with 'use'
   - They can call other hooks
   - Allow you to extract component logic into reusable functions
   - Help in sharing stateful logic between components

11. **Explain React Router**
   - React Router is a standard routing library for React
   - It enables navigation between views in a React application
   - Key components include:
     - BrowserRouter: Wrapper component for routing
     - Route: Defines a route and its component
     - Link: Creates navigation links
     - useNavigate: Hook for programmatic navigation
     - useParams: Hook for accessing URL parameters

12. **What are Protected Routes?**
   - Routes that can only be accessed by authenticated users
   - Implement by checking authentication state
   - Redirect unauthorized users to login page
   - Example shown in Profile component

13. **What is Form Handling in React?**
   - Forms can be controlled or uncontrolled
   - Controlled components: Form data handled by React state
   - Use onChange event handlers to update state
   - Form validation can be implemented using state
   - Submit handlers prevent default form behavior

14. **What is the difference between React Router v5 and v6?**
    - V6 introduces new hooks (useNavigate instead of useHistory)
    - Switch is replaced with Routes
    - Exact prop is no longer needed
    - More intuitive route nesting
    - Improved route matching algorithm

15. **How do you handle authentication with React Router?**
    - Create protected route components
    - Check authentication state using context or state management
    - Redirect unauthorized users
    - Store auth tokens in secure storage
    - Implement login/logout functionality

16. **What are the best practices for React Router?**
    - Keep routes organized and modular
    - Use lazy loading for route components
    - Implement proper error boundaries
    - Handle 404 routes
    - Use meaningful route names
    - Implement proper navigation guards

### Redux and State Management

17. **What is Redux and why use it?**
    - Redux is a predictable state container for JavaScript apps
    - Helps manage global application state
    - Provides a single source of truth
    - Makes state changes predictable through pure functions
    - Useful for large applications with complex state management

18. **Explain the core concepts of Redux**
    - Store: Holds the global state
    - Actions: Plain objects describing what happened
    - Reducers: Pure functions that specify state changes
    - Dispatch: Method to send actions to the store
    - Selectors: Functions to extract specific pieces of state

19. **What is Redux Toolkit and its benefits?**
    - Official, opinionated toolset for Redux
    - Simplifies common Redux use cases
    - Includes utilities for:
      - Creating slices of state
      - Immutable state updates
      - Creating the store
    - Reduces boilerplate code
    - Includes Redux Thunk for async actions

20. **Explain Redux middleware**
    - Functions that run between dispatching an action and reaching the reducer
    - Can modify actions, dispatch new actions, or perform side effects
    - Common uses:
      - Logging
      - Crash reporting
      - Async requests
      - Routing

21. **What are Redux Thunks?**
    - Middleware for handling async logic
    - Allow action creators to return functions instead of actions
    - Functions can dispatch multiple actions
    - Useful for API calls and complex async logic

22. **Best practices for Redux**
    - Keep store data normalized
    - Use Redux Toolkit
    - Minimize state duplication
    - Use selectors for accessing state
    - Follow Redux style guide
    - Implement proper error handling

23. **Redux vs Context API**
    - Redux:
      - Better for complex state logic
      - Built-in dev tools
      - Middleware support
      - Better performance for large apps
    - Context:
      - Simpler setup
      - Built into React
      - Good for simple state sharing
      - Less boilerplate

### React Query and Error Handling

24. **What is React Query?**
    - A powerful data-fetching and caching library
    - Manages server state in React applications
    - Features include:
      - Automatic background updates
      - Caching and cache invalidation
      - Error handling
      - Loading states
      - Pagination and infinite scroll

25. **What problems does React Query solve?**
    - Eliminates manual loading and error states
    - Prevents unnecessary API calls
    - Handles cache invalidation
    - Manages data synchronization
    - Provides optimistic updates
    - Reduces boilerplate code

26. **Key features of React Query**
    - Automatic background refetching
    - Window focus refetching
    - Request deduplication
    - Parallel queries
    - Dependent queries
    - Infinite queries
    - Optimistic updates

27. **What are Error Boundaries?**
    - React components that catch JavaScript errors
    - Prevent entire app from crashing
    - Can display fallback UI
    - Only catch errors in:
      - Render phase
      - Lifecycle methods
      - Child component tree

28. **Error Boundary limitations**
    - Don't catch errors in:
      - Event handlers
      - Async code
      - Server-side rendering
      - Errors in the boundary itself
    - Must be class components

29. **Best practices for error handling**
    - Use Error Boundaries for UI errors
    - Try-catch for async operations
    - Proper error messages
    - Fallback UI components
    - Error logging services
    - Recovery mechanisms

30. **React Query vs Traditional Fetching**
    - React Query:
      - Automatic caching
      - Built-in loading/error states
      - Automatic background updates
      - DevTools
    - Traditional:
      - Manual cache management
      - Custom loading/error handling
      - Manual refetching
      - No built-in optimization

### Performance Optimization

39. **What is React.memo?**
    - Higher-order component for performance optimization
    - Prevents unnecessary re-renders
    - Memoizes component based on props
    - Performs shallow comparison of props
    - Can provide custom comparison function

40. **When to use useMemo vs useCallback?**
    - useMemo:
      - Memoizes computed values
      - Prevents expensive calculations
      - Returns memoized value
    - useCallback:
      - Memoizes functions
      - Prevents function recreation
      - Important for child component optimization

41. **Code Splitting techniques**
    - React.lazy for component splitting
    - Dynamic imports for code chunks
    - Route-based splitting
    - Component-based splitting
    - Library splitting

42. **What is the Suspense component?**
    - Handles loading states
    - Works with React.lazy
    - Shows fallback UI
    - Manages async dependencies
    - Improves user experience

43. **Performance optimization techniques**
    - Virtual scrolling for long lists
    - Debouncing and throttling
    - Image lazy loading
    - Code splitting
    - Memoization
    - Tree shaking

44. **Common performance issues**
    - Unnecessary re-renders
    - Large bundle sizes
    - Unoptimized images
    - Memory leaks
    - Expensive computations
    - Network waterfall

45. **How to measure React performance?**
    - React DevTools Profiler
    - Chrome Performance tab
    - Lighthouse audits
    - Bundle analyzers
    - Performance monitoring tools
    - Custom performance marks

46. **Best practices for optimization**
    - Use production builds
    - Implement code splitting
    - Optimize images and assets
    - Minimize re-renders
    - Use appropriate data structures
    - Cache expensive operations

### Advanced React Concepts

47. **Custom Hooks**
    - Purpose and benefits
    - Rules of hooks
    - Common use cases
    - Best practices
    - Composition patterns

48. **Portals**
    - Use cases
    - Implementation
    - Event bubbling
    - Modal dialogs
    - Tooltips

49. **Refs and forwardRef**
    - DOM manipulation
    - Imperative handles
    - Timer management
    - Focus management
    - Measurements

50. **Higher-Order Components**
    - Purpose
    - Implementation patterns
    - Common use cases
    - Composition
    - Best practices

51. **Advanced Patterns**
    - Compound components
    - Render props
    - State reducers
    - Controlled vs Uncontrolled
    - Component composition

52. **React Internals**
    - Virtual DOM
    - Reconciliation
    - Fiber architecture
    - Event system
    - Batching updates

53. **Build & Deployment**
    - Production builds
    - Environment variables
    - Code splitting
    - Deployment strategies
    - CI/CD integration

54. **Best Practices**
    - Project structure
    - Code organization
    - Naming conventions
    - Documentation
    - Security considerations

### Deployment & PWA

55. **Production Build**
    ```bash
    # Install dependencies
    npm install

    # Create production build
    npm run build

    # Test production build locally
    npx serve -s build
    ```

56. **Environment Configuration**
    - `.env.development`: Development settings
    - `.env.production`: Production settings
    - Environment variables must start with `REACT_APP_`
    - Access via `process.env.REACT_APP_*`

57. **PWA Features**
    - Offline capability
    - Install to home screen
    - Push notifications
    - Background sync
    - Cache management

58. **Deployment Options**
    1. **Netlify**
       - Connect to GitHub repository
       - Configure build settings
       - Enable HTTPS
       - Set up environment variables

    2. **Vercel**
       - Import from Git
       - Automatic deployments
       - Preview deployments
       - Environment configuration

    3. **GitHub Pages**
       ```bash
       # Add homepage to package.json
       "homepage": "https://username.github.io/repo-name"

       # Install gh-pages
       npm install --save-dev gh-pages

       # Add deploy scripts
       "scripts": {
         "predeploy": "npm run build",
         "deploy": "gh-pages -d build"
       }

       # Deploy
       npm run deploy
       ```

59. **Performance Checklist**
    - Enable text compression
    - Configure caching headers
    - Optimize images
    - Minify resources
    - Use CDN
    - Enable PWA

60. **Security Best Practices**
    - Set security headers
    - Enable HTTPS
    - Sanitize user input
    - Protect API keys
    - Update dependencies
    - Handle CORS

### Testing React Applications

31. **What is React Testing Library?**
    - A testing utility for React
    - Focuses on testing components like users interact with them
    - Encourages good testing practices
    - Provides simple and complete testing utilities
    - Works with Jest and other test runners

32. **Key principles of React Testing Library**
    - Test behavior, not implementation
    - Find elements by accessibility roles
    - Test from user's perspective
    - Avoid testing implementation details
    - Write maintainable tests

33. **Common Testing Library queries**
    - getBy*: Find one element or throw error
    - queryBy*: Find one element or return null
    - findBy*: Async version of getBy*
    - getAllBy*: Find multiple elements
    - Common suffixes:
      - ByRole
      - ByLabelText
      - ByText
      - ByTestId

34. **What to test in React components?**
    - Rendering without errors
    - User interactions
    - State changes
    - Props handling
    - Async operations
    - Error states
    - Integration with external services

35. **Testing best practices**
    - Write tests that mirror user behavior
    - Use data-testid as last resort
    - Test accessibility
    - Mock external dependencies
    - Keep tests simple and readable
    - Use setup and cleanup functions

36. **Common testing patterns**
    - Component rendering tests
    - Event handling tests
    - Async operation tests
    - Integration tests
    - Snapshot tests
    - Error boundary tests

37. **Testing Redux applications**
    - Test reducers independently
    - Test action creators
    - Mock store for component tests
    - Test async actions
    - Test selectors
    - Integration with store

38. **Testing React Query**
    - Mock API responses
    - Test loading states
    - Test error states
    - Test cache behavior
    - Test refetch functionality
    - Integration with components

Follow along with the examples in this repository to master these concepts!
#   l e a r n - r e a c t 
 
 