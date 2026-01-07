# Namaste React 🚀

## Parcel

What all Parcel does
- Dev Build
- Local Server Creation
- HMR (Hot Module Replacement)
- File Watching Algorithm - writter in C++
- Provides Faster Builds using Caching
- Parcel does Image Optimization
- It does Minification 
- Bundles the files (Bundling) and optimizes it
- Compression (It removes all unwanted things from the code like whitespace or empty lines and compress the code which result in fast performance of our website)
- Consistent Hashing 
- Code Splitting
- Differential Bundling -> Support Older Browsers
- Error Handling 
- HTTPs
- Tree Shaking -> Remove unused code

## Food APP Structure
/**
 * 
 * Header
 * - Logo
 * - Na Items
 * 
 * Body
 * - Search
 * - Restaurant Card Container (containing Restaurant Cards)
 *   - Restaurant Card
 *     - Image of Restaurant of food
 *     - Name of Restaurant
 *     - Start Rating of Restaurant
 *     - Cuisines
 *     - Delivery Time
 * 
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 * 
 */


Two Types of Export/Import

- Default Export/Import

- export default ComponentName;
- import ComponentName from "path";

- Named Export/Import

- export default ComponentName; 
In named export export is directly written before the defining the object or component it is used in cases where we have multiple components in one file, because default export only allows one export.

import {ComponentName} from "path";

## React Hooks 
These are nothing but normal JavaScript utility functions.

- useState()
- useEffect()

We need to import these hooks from react as named import in our code.
