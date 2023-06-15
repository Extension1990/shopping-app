import { Box } from "@mui/material";
import ProfilePicture from "../../assets/pp.jpeg";

const Profile = () => {
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
                        flexDirection: 'column',
                        borderRadius: 4,
                        backdropFilter: "saturate(200%) blur(30px)",
                        backgroundColor: 'rgba(245, 245, 245, 0.9);',
                        height: '120px',
                        position: "relative"
                    }}
                >
                    <img src="" alt="" />
                </Box>
        </Box>
    )
}

export default Profile;