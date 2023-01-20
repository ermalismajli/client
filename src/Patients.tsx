import { Button } from "@mui/material";
import { Link } from "react-router-dom";
function Patients() {
  return (
    <Link to="/">
      <Button variant="contained">Go back to the home page</Button>
    </Link>
  );
}
export default Patients;
