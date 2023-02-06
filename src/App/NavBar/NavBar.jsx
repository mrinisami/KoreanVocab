import {AppBar, Toolbar, Button} from "@mui/material";
import {useNavigate} from "react-router-dom"

export const NavBar = () => {

    const naviguate = useNavigate()
    const onClickWordMatching = () => naviguate("/wordmatching")
    const onClickRapMem = () => naviguate("/rapmem")

    return (
        <AppBar position="static">
            <Toolbar>
                <Button variant="contained" onClick={onClickWordMatching} sx={{mr: 1}}>Word Matching</Button>
                <Button variant="contained" onClick={onClickRapMem}>Rapid Memorization</Button>
            </Toolbar>
        </AppBar>
    )
}