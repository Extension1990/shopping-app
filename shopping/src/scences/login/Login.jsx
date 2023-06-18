import { getIn } from "formik";
import { Box, Typography, useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";

const Login = ({
    type,
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
  }) => {

    const isNonMobile = useMediaQuery("(min-width:600px)");
    // these functions allow for better code readability
    const formattedName = (field) => `${type}.${field}`;

    const formattedError = (field) =>
    Boolean(
      getIn(touched, formattedName(field)) &&
        getIn(errors, formattedName(field))
    );

    const formattedHelper = (field) =>
        getIn(touched, formattedName(field)) && getIn(errors, formattedName(field));

    return (
        <Box width="80%" margin="80px auto">
            <Typography>
                <h1>Login</h1>
            </Typography>
        </Box>
    )
}

export default Login;