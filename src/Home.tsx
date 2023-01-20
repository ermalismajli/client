import { Button } from "@mui/material";
import { Link } from "react-router-dom";
function Home() {
  return (
    <Link to="/patients1">
      <Button variant="contained">Go to patients page</Button>
    </Link>
  );
}
export default Home;
