import CategoryNavLinks from "./CategoryNavLinks.tsx";
import "./HeaderDropdown.css";
export default function HeaderDropdown() {
  return (
    <div className="header-dropdown">
      <button className="button categories-button">Categories</button>
      <CategoryNavLinks />
    </div>
  );
}
