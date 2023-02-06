import React from "react";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ReactHowler from "react-howler";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import shuffle from "shuffle-array";
import { useState, useEffect } from "react";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

export const CardGame = (props) => {
    const [wordsCard, setWordsCard] = React.useState(props.words)
    const [chosenLang, setChosenLang] = React.useState("ko")
    const [isAnswer, setIsAnswer] = React.useState(false)
    const [wordIndex, setWordIndex] = React.useState(-1)
    const [playing, setPlaying] = React.useState(false)

    const playBtnText = () => {
        if (wordIndex === -1){
            return "Start"
        }
        if (wordIndex === wordsCard.length -1){
            return "Restart"
        }
        return "Next"
    }

    function changeLang(lang){
        if (lang === 'ko'){
            return 'en'
        }
        return 'ko'
    }

    const onClickStart = () => {
        setWordIndex(wordIndex + 1)
        setWordsCard(shuffle(props.words, {copy:true}))
    }

    useEffect(() => {
        setWordIndex(-1)
        setIsAnswer(false)
    }, [props.words])

    const onClickDefLang = () => setChosenLang(changeLang(chosenLang))
    const onClickAns = () => setIsAnswer(!isAnswer)
    const onClickSound = () => setPlaying(true)
    const onSoundEnd = () => setPlaying(false)

    const onClickNext = () => {
        if (wordIndex === wordsCard.length -1) {
            setWordIndex(0)
            setWordsCard(shuffle(props.words, {copy:true}))
        }
        else {
            setWordIndex(wordIndex + 1)
            setPlaying(false    )
        }
    }

    if (wordIndex === -1) {return renderStart()}
    return renderGame()

    function renderStart(){
        return(
            <Card variant="outlined">
            <CardContent>
                <Grid container flexDirection="column" spacing={4}>
                    <Grid item align="center" sx={{fontSize: "2rem"}}>Start the Game</Grid>
                    <Grid container item  justifyContent="center">
                        <Button onClick={onClickStart} variant="outlined">Start</Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
        )
    }

    function renderGame(){
        const ansText = (isAnswer) ? "Word" : "Answer"
        const title = (isAnswer) ? "Answer is" : "Translate this"
        const currentWord = (isAnswer) ? wordsCard[wordIndex][changeLang(chosenLang)] : wordsCard[wordIndex][chosenLang]
        return(
        <Card variant="outlined">
            <CardContent>
                <Grid container flexDirection="column" spacing={12}>
                    <Grid item align="center" sx={{fontSize:"2rem"}}>{title}</Grid>
                    <Grid container item justifyContent="space-between">
                        <Grid item xs={2}><Button onClick={onClickAns} variant="outlined">{ansText}</Button></Grid>                           
                        <Grid item sx={{fontSize: "2rem"}}>{currentWord}</Grid>
                        <Grid container item xs={2} justifyContent="center">
                            <Button onClick={onClickSound}><VolumeUpIcon />
                            <ReactHowler src={wordsCard[wordIndex].mp3Path} playing={playing} preload={true} onEnd={onSoundEnd}></ReactHowler>
                            </Button>
                        </Grid>                          
                    </Grid>
                    <Grid item container justifyContent="space-between">
                        <Grid item ><Button onClick={onClickDefLang} variant="outlined">{chosenLang}</Button></Grid>
                        <Grid item ><Button onClick={onClickNext} variant="outlined">{playBtnText()}</Button></Grid>
                    </Grid> 
                </Grid>
            </CardContent>
        </Card>
    )}
}