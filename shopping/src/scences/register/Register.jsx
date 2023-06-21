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
  import { useDispatch, useSelector } from "react-redux";
  import { useFormik } from "formik";
  import { signup } from "../../redux/actions";
  
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
  
    const dispatch = useDispatch();
  const signupLoading = useSelector((state) => state.cart.user_loading);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: yup.object({
      firstName: yup.string()
        .max(15, "Must be 15 characters or less")
        .required("This field is required"),
      lastName: yup.string()
        .max(20, "Must be 20 characters or less")
        .required("This field is required"),
      email: yup.string().email("Invalid email address").required("This field is required"),
      password: yup.string()
        .min(4, "Must be 4 characters or more")
        .required("Password is required"),
      passwordConfirm: yup.string()
        .required("Confirm your password")
        .oneOf([yup.ref("password"), null], "Passwords must match"),
    }),

    onSubmit: (values, actions) => {
      console.log(values)
      // alert(JSON.stringify(values, null, 2));
      function alterFormToAPIResult(error, success) {
        if (error) {
          actions.setFieldTouched("password", false);
          actions.setFieldValue("password", "");

          actions.setFieldTouched("passwordConfirm", false);
          actions.setFieldValue("passwordConfirm", "");
        }
      }
      dispatch(signup(values, alterFormToAPIResult));
    },
  });
  
    return (
      <Formik
        initialValues={initialValuesRegister}
        onSubmit={(values, {resetForm}) => {
          formik.handleSubmit(values);
             resetForm()
        }}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          resetForm
        }) => (
          <Form>
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
                id="firstName"
                name="firstName"
                type="text"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                sx={{ gridColumn: "span 2" }}
                error={Boolean(formik.touched.firstName) && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName ? (
                  <Typography className="text-danger" color="red">
                    {formik.errors.firstName}
                  </Typography>
                ) : null}
              />
              <TextField
                label="Last Name *"
                name="lastName"
                type="text"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                sx={{ gridColumn: "span 2" }}
                error={Boolean(formik.touched.lastName) && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName ? (
                  <Typography className="text-danger" color="red">
                    {formik.errors.lastName}
                  </Typography>
                ) : null}
              />
              <TextField
                label="Email *"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                sx={{ gridColumn: "span 4" }}
                error={Boolean(formik.touched.email) && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email ? (
                  <Typography className="text-danger" color="red">
                    {formik.errors.email}
                  </Typography>
                ) : null}
              />
              <TextField
                label="Password *"
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                sx={{ gridColumn: "span 2" }}
                error={Boolean(formik.touched.password) && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password ? (
                  <Typography className="text-danger" color="red">
                    {formik.errors.password}
                  </Typography>
                ) : null}
              />
              <TextField
                label="Confirm Password *"
                name="passwordConfirm"
                type="password"
                value={formik.values.passwordConfirm}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                sx={{ gridColumn: "span 2" }}
                error={Boolean(formik.touched.passwordConfirm) && Boolean(formik.errors.passwordConfirm)}
                helperText={formik.touched.passwordConfirm && formik.errors.passwordConfirm ? (
                  <Typography className="text-danger" color="red">
                    {formik.errors.passwordConfirm}
                  </Typography>
                ) : null}
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