import { getIn } from "formik";
import { Box, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";
import { shades } from "../../theme";

const Register = ({
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
        <Box width="80%" m="100px auto">
            <Box
                display="grid"
                gap="15px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
            >
                <TextField
                    fullWidth
                    type="text"
                    label="First Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    // value={values.firstName}
                    // name={formattedName("firstName")}
                    // error={formattedError("firstName")}
                    // helperText={formattedHelper("firstName")}
                    sx={{ gridColumn: "span 2" }}
                />
                <TextField
                    fullWidth
                    type="text"
                    label="Last Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    // value={values.lastName}
                    // name={formattedName("lastName")}
                    // error={formattedError("lastName")}
                    // helperText={formattedHelper("lastName")}
                    sx={{ gridColumn: "span 2" }}
                />
                <TextField
                    fullWidth
                    type="text"
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    // value={values.email}
                    // name={formattedName("email")}
                    // error={formattedError("email")}
                    // helperText={formattedHelper("email")}
                    sx={{ gridColumn: "span 4" }}
                />
                <TextField
                    fullWidth
                    type="text"
                    label="Password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    // value={values.password}
                    // name={formattedName("password")}
                    // error={formattedError("password")}
                    // helperText={formattedHelper("password")}
                    sx={{ gridColumn: "span 2" }}
                />
                <TextField
                    fullWidth
                    type="text"
                    label="Confirm Password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    // value={values.password}
                    // name={formattedName("passwordConfirm")}
                    // error={formattedError("passwordConfirm")}
                    // helperText={formattedHelper("passwordConfirm")}
                    sx={{ gridColumn: "span 2" }}
                />
                <Button
                    fullWidth
                    type="submit"
                    color="primary"
                    variant="contained"
                    sx={{
                        backgroundColor: shades.primary[400],
                        boxShadow: "none",
                        color: "white",
                        borderRadius: 1,
                        padding: "15px 40px",
                    }}
                >
                    RGISTER
                </Button>
            </Box>
        </Box>
    )
}

export default Register;