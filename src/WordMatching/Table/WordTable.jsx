import React, {useState} from "react";
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


export const WordTable = (props) => {
    console.log(props)
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{fontSize: '1.5rem'}}>English</TableCell>
                        <TableCell sx={{fontSize: '1.5rem'}}></TableCell>
                        <TableCell sx={{fontSize: '1.5rem'}}>Korean</TableCell>
                        <TableCell sx={{fontSize: '1.5rem'}}></TableCell>
                        <TableCell sx={{fontSize: '1.5rem'}}>Enunciation</TableCell>
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

    const [isHiddenEn, setIsHiddenEn] = useState(false)
    const [isHiddenKo, setIsHiddenKo] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)

    const onClickSound = () => {
        setIsPlaying(true)
    }

    const onSoundEnd = () => {
        setIsPlaying(false)
    }

    const onClickEn = () => ((isHiddenEn) ? setIsHiddenEn(false) : setIsHiddenEn(true))
    const onClickKo = () => ((isHiddenKo) ? setIsHiddenKo(false) : setIsHiddenKo(true))
    const EnButtonText = () => ((isHiddenEn) ? "Show" : "Hide")
    const KoButtonText = () => ((isHiddenKo) ? "Show" : "Hide")

    return (
        <TableRow>
            {renderEnWord()}
            <TableCell>
                <Button onClick={onClickEn}>{EnButtonText}</Button>
            </TableCell>
            {renderKoWord()}
            <TableCell>
                <Button onClick={onClickKo}>{KoButtonText}</Button>
            </TableCell>
            <TableCell>
                <Button onClick={onClickSound}>
                    <VolumeUpIcon />
                    <ReactHowler src={props.rows.mp3Path} playing={isPlaying} onEnd={onSoundEnd} preload={false} />
                </Button>
            </TableCell>
        </TableRow>
    )

    function renderEnWord(){
        if (isHiddenEn){
            return <TableCell></TableCell>
        }
        return (
            <TableCell align="center" sx={{fontSize: '1.3rem'}}>{props.rows.en}</TableCell>
        )
    }
    function renderKoWord(){
        if (isHiddenKo){
            return <TableCell></TableCell>
        }
        return <TableCell align="center" sx={{fontSize: '1.3rem'}}>{props.rows.ko}</TableCell>
    }
}

