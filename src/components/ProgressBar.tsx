import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
const ProgressBar = styled(LinearProgress)(({ theme }) => ({
    height: 5,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        // backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        backgroundImage: 'linear-gradient(310deg, #2152ff 0%, #21d4fd 100%)'
    },
}));
export default ProgressBar;