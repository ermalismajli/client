import { Button } from "@mui/material";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <>
      <h2>Error 404</h2>
      <p>Page not found</p>
      <Link to="/">
        <Button variant="contained">Go to the home page</Button>
      </Link>
    </>
  );
}
export default NotFound;
