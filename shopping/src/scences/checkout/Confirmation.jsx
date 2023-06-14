import { Box, Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import shades from "../../theme";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();
  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        You have successfully made an Order —{" "}
        <strong>Congrats on Making your Purchase</strong>
      </Alert>
      <Button
        onClick={() => navigate("/")}
        sx={{
          backgroundColor: shades.primary[400],
          boxShadow: "none",
          color: "white",
          borderRadius: 0,
          padding: "15px 40px",
          marginTop: "30px"
        }}
      >
        Back To Home
      </Button>
    </Box>
  );
};

export default Confirmation;