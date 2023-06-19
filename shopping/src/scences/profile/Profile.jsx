import { Box, Typography, useTheme, Grid } from "@mui/material";
import ProfilePicture from "../../assets/pp.jpeg";
import ProfileImage from "../../assets/myPicture.jpeg";

const Profile = () => {
    const {
        palette: { neutral },
    } = useTheme();
    return (
        <Box width="80%" margin="80px auto">
            <Box
                sx={{
                    color: 'darkslategray',
                    backgroundImage: `url(${ProfilePicture})`,
                    padding: 8,
                    borderRadius: 4,
                    height: '300px'
                }}
            >
            </Box>
            <Box
                width="100%"
                sx={{
                    m: '-64px auto',
                    p: '16px',
                    width: '90%',
                    display: 'flex',
                    flexDirection: 'row',
                    borderRadius: 4,
                    backdropFilter: "saturate(200%) blur(30px)",
                    backgroundColor: 'rgba(245, 245, 245, 0.9);',
                    position: "relative"
                }}
            >
                <img
                    alt="Profile"
                    width="120px"
                    height="100px"
                    src={ProfileImage}
                    style={{ cursor: "pointer", borderRadius: "10px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
                />
                <Box mt="3px" p="10px">
                    <Typography fontWeight="bold" fontSize="20px">
                        Freddy Smallings
                    </Typography>
                    <Typography fontWeight="bold" color={neutral.dark}>CEO / Co-Founder</Typography>
                    <Typography fontWeight="bold" fontSize="15px">FASHION SHOP</Typography>
                </Box>
            </Box>
            <Grid container spacing={3} sx={{ width: '94%', m: '80px auto', pr: '20px' }} columns={16} margin="80px auto" direction={{xs: "column", md: "row"}}>
              <Grid item xs={8}>
              <Box
                    backgroundColor={neutral.light}
                    sx={{
                        borderRadius: "10px",
                        padding: "10px",
                        width: "100%"
                    }}
                >
                    <Typography fontWeight="bold" fontSize="15px" ml="20px">
                        <h3>Personal Information</h3>
                    </Typography>
                    <Typography ml="20px">
                        <p><b>Full Name:</b> Freddy Smalling</p>
                    </Typography>
                    <Typography ml="20px">
                        <p><b>Mobile:</b> (011) 734 5599</p>
                    </Typography>
                    <Typography ml="20px">
                        <p><b>Email:</b> freddy.s@gmail.com</p>
                    </Typography>
                    <Typography ml="20px">
                        <p><b>Occupation:</b> CEO / Co-Founder</p>
                    </Typography>
                    <Typography ml="20px">
                        <p><b>Company:</b> Fashion Shop</p>
                    </Typography>
                    <Typography ml="20px">
                        <p><b>Location:</b> RSA</p>
                    </Typography>
                </Box>
              </Grid>
              <Grid item xs={8}>
              <Box
                    backgroundColor={neutral.light}
                    sx={{
                        borderRadius: "10px",
                        padding: "10px",
                        width: "100%"
                    }}
                >
                    <Typography fontWeight="bold" fontSize="15px" ml="20px">
                        <h3>Personal Information</h3>
                    </Typography>
                    <Typography ml="20px">
                        <p><b>Full Name:</b> Freddy Smalling</p>
                    </Typography>
                    <Typography ml="20px">
                        <p><b>Mobile:</b> (011) 734 5599</p>
                    </Typography>
                    <Typography ml="20px">
                        <p><b>Email:</b> freddy.s@gmail.com</p>
                    </Typography>
                    <Typography ml="20px">
                        <p><b>Occupation:</b> CEO / Co-Founder</p>
                    </Typography>
                    <Typography ml="20px">
                        <p><b>Company:</b> Fashion Shop</p>
                    </Typography>
                    <Typography ml="20px">
                        <p><b>Location:</b> RSA</p>
                    </Typography>
                </Box>
              </Grid>
            </Grid>
        </Box>
    )
}

export default Profile;