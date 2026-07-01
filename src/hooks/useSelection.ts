// Thin re-export so components can `import { useSelection } from "../hooks/useSelection"`
// without reaching into context internals directly.

export { useSelectionContext as useSelection } from "../context/SelectionContext";
