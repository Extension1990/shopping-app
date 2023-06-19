import {
    Box,
    Button,
    MenuItem,
    TextField,
    Typography,
    useMediaQuery,
    useTheme
  } from "@mui/material";
  import { Formik, Form } from "formik";
  import { useNavigate } from "react-router-dom";
  import * as yup from "yup";
  import { shades } from "../../theme";
  
  const registerSchema = yup.object().shape({
    firstName: yup.string().required("This field is required"),
    lastName: yup.string().required("This field is required"),
    userType: yup.string().required("This field is required"),
    userName: yup.string().required("This field is required"),
    email: yup.string().email("invalid email").required("This field is required"),
    password: yup.string().required("This field is required"),
    confirmPassword: yup.string().required("This field is required")
  });
  
  const initialValuesRegister = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };
  
  const Register = () => {
    const { palette } = useTheme();
    const navigate = useNavigate();
    const isNonMobile = useMediaQuery("(min-width:600px)");
  
    const register = async (values) => {
      const savedUserResponse = await fetch(
        "http://localhost:3000/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values)
        }
      );
  
      const savedUser = await savedUserResponse.json();
    
  
      if (savedUser) {
        console.log(savedUser);
        navigate("/");
      }
    };
  
    const handleFormSubmit = async (values) => {
      console.log("Test");
      console.log(values);
      // await register(values);
    };
  
    return (
      <Formik
        initialValues={initialValuesRegister}
        onSubmit={(values, {resetForm}) => {
             handleFormSubmit(values);
             resetForm()
        }}
        validationSchema={registerSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          resetForm
        }) => (
          <Form onSubmit={handleSubmit}>
            <Box
                width="50%"
                margin="80px auto"
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                    "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }
                }}
            >
                <Typography
                    textAlign="center"
                    sx={{ gridColumn: "span 4" }}
                >
                    <h1>Register</h1>
                </Typography>
              <TextField
                label="First Name *"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={Boolean(touched.firstName) && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                label="Last Name *"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                label="Email *"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={Boolean(touched.email) && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                label="Password *"
                type="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={Boolean(touched.password) && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                label="Confirm Password *"
                type="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.confirmPassword}
                name="confirmPassword"
                error={
                  Boolean(touched.confirmPassword) &&
                  Boolean(errors.confirmPassword)
                }
                helperText={touched.confirmPassword && errors.confirmPassword}
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
                    gridColumn: "span 4"
                  }}
                >
                  Register
                </Button>
                <Typography
                    onClick={() => {
                        navigate("/login");
                        resetForm();
                    }}
                    sx={{
                        textDecoration: "underline",
                        color: palette.secondary.main,
                        gridColumn: "span 4",
                        "&:hover": {
                        cursor: "pointer",
                        color: palette.secondary.light,
                        gridColumn: "span 4"
                        }
                    }}
                >
                    Already have an account? Login here
                </Typography>
            </Box>
          </Form>
        )}
      </Formik>
    );
  };
  
  export default Register;