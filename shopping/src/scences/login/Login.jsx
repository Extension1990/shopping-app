import {
    Box,
    Button,
    MenuItem,
    TextField,
    Typography,
    useMediaQuery,
    useTheme,
    Grid
  } from "@mui/material";
  import { Formik, Form } from "formik";
  import { useNavigate } from "react-router-dom";
  import * as yup from "yup";
  import { shades } from "../../theme";
  
  const loginSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("This field is required"),
    password: yup.string().required("This field is required")
  });
  
  const initialValuesRegister = {
    email: "",
    password: ""
  };
  
  const Login = () => {
    const { palette } = useTheme();
    const navigate = useNavigate();
    const isNonMobile = useMediaQuery("(min-width:600px)");
  
    const login = async (values) => {
      const savedUserResponse = await fetch(
        "http://localhost:3000/auth/login",
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
        validationSchema={loginSchema}
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
                    <h1>Login</h1>
                </Typography>
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
                sx={{ gridColumn: "span 4" }}
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
                  Login
                </Button>
                <Typography
                    onClick={() => {
                        navigate("/register");
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
                    Don't have an account yet? Register here
                </Typography>
            </Box>
          </Form>
        )}
      </Formik>
    );
  };
  
  export default Login;