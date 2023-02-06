import React from "react";
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ReactHowler from "react-howler";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import AssignmentIcon from '@mui/icons-material/Assignment';


export const WordTable = (props) => {
    let hideBtn = 'Hide'
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 600}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left" sx={{fontSize: '1.5rem'}}>Rank</TableCell>
                        <TableCell align="left" sx={{fontSize: '1.5rem'}}>English</TableCell>
                        <TableCell align="left"></TableCell>
                        <TableCell align="left" sx={{fontSize: '1.5rem'}}>Korean</TableCell>
                        <TableCell align="left"></TableCell>
                        <TableCell align="left" sx={{fontSize: '1.5rem'}}>Type</TableCell>
                        <TableCell align="left" sx={{fontSize: '1.5rem'}}>Audio</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.words.map((row, i) => 
                        <WordRow key={i} rows={row}/>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

function WordRow(props){
    const [hiddenEn, setHiddenEn] = React.useState(false)
    const [hiddenKo, setHiddenKo] = React.useState(false)
    const [enBtn, setToEn] = React.useState("Hide")
    const [koBtn, setToKo] = React.useState("Hide")
    const [playing, setPlaying] = React.useState(false);

    const onSoundClick = () => {
        setPlaying(true)
    }
    
    const onSoundEnd = () => {
        setPlaying(false)
    }

    const onClickEn = () => {
        if (hiddenEn) {
            setHiddenEn(false)
            setToEn("Hide")
        }
        else{
            setHiddenEn(true)
            setToEn("Show")
        }
    }

    const onClickKo = () => { 
        if (hiddenKo) {
            setHiddenKo(false)
            setToKo("Hide")
        }
        else{
            setHiddenKo(true)
            setToKo("Show")
        }
    }
    console.log(props.rows.mp3Path)
    return (
        <TableRow>
            
            <TableCell sx={{fontSize: '1.3rem'}}>{props.rows.rank}</TableCell>
            {renderEnWord()}
            <TableCell>
                <Button variant="contained" onClick={onClickEn}>{enBtn}</Button>
            </TableCell>
            {renderKoWord()}
            <TableCell>
                <ReactHowler src={props.rows.mp3Path} playing={playing} preload={false} onEnd={onSoundEnd}></ReactHowler>
                <Button variant="contained" onClick={onClickKo}>{koBtn}</Button>
            </TableCell>
            <TableCell align="center" sx={{fontSize: '1.3rem'}}>{props.rows.type}</TableCell>
            <TableCell align="center">
                <Button onClick={onSoundClick}><VolumeUpIcon />
                </Button>    
            </TableCell>
        </TableRow>
    )

    function renderEnWord(){
        if (hiddenEn){
            return <TableCell></TableCell>
        }
        return (
            <TableCell align="center" sx={{fontSize: '1.3rem'}}>{props.rows.en}</TableCell>
        )
    }
    function renderKoWord(){
        if (hiddenKo){
            return <TableCell></TableCell>
        }
        return <TableCell align="center" sx={{fontSize: '1.3rem'}}>{props.rows.ko}</TableCell>
    }
}