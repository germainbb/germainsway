import { Link } from "react-router-dom";
import "./topbar.css";
import SimpleDrawer from "./Drawer";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function TopBar() {
  return (
    <div className="top">
      <SimpleDrawer />
      <h2 className="name">MyBine Marketplace</h2>
      
      <SearchOutlinedIcon/>
    </div>
  );
}
