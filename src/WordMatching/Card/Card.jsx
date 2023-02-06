import React from "react";
import ReactHowler from "react-howler";
import shuffle from "shuffle-array";
import { useState, useEffect } from "react";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import {Card, CardContent, CardMedia, Grid, Button} from "@mui/material"

export const CardGame = (props) => {

    const [wordIndex, setWordIndex] = useState(-1)
    const [wordsCard, setWordsCard] = useState(props.words)
    const [chosenLang, setChosenLang] = useState('ko')
    const [isAnswer, setIsAnswer] = useState(false)
    const [isShowAns, setIsShowAns] = useState(false)
    const [playing, setPlaying] = useState(false)
    
    const onClickStart = () => {
        setWordIndex(wordIndex + 1)
        setWordsCard(shuffle(props.words, {copy:true}))
    }

    useEffect(() => {
        setWordIndex(-1)
        setIsAnswer(false)
    }, [props.words])

    const onClickNext = () => {
        if (wordIndex === wordsCard.length - 1){
            setWordIndex(0)
            setWordsCard(shuffle(props.words, {copy:true}))
        }
        else {
            setWordIndex(wordIndex + 1)
        }
    }

    function changeLang(lang) {
        if (lang === 'ko'){
            return 'en'
        }
        return 'ko'
    }

    const onClickDefLang = () => setChosenLang(changeLang(chosenLang))
    const onClickShowAns = () => setIsShowAns(!isShowAns)
    const onClickAns = () => setIsAnswer(!isAnswer)
    const onSoundEnd = () => setPlaying(false)
    const onClickSound = () => setPlaying(true)

    function renderGame(){

        const currentWord = (isAnswer) ? wordsCard[wordIndex][changeLang(chosenLang)] : wordsCard[wordIndex][chosenLang]
        const currentImg = wordsCard[wordIndex].imgPath
        const showAnsTxt = (isShowAns) ? "Hide" : "Show"
        const ansWordTxt = (isAnswer) ? "Word" : "Answer"
        const nextTxt = (wordIndex === wordsCard.length - 1) ? "Restart" : "Next"

        return(
            <Card variant="outlined">
                <CardContent>
                    <Grid container flexDirection="column" spacing={2} alignItems="center">
                        <Grid item>What Does this Image Represent ?</Grid>
                        <Grid item>
                            <CardMedia component='img' square src={currentImg} height="300"/>
                        </Grid>
                        <Grid item container flexDirection="column">
                            <Grid item container justifyContent="center">
                                <Grid item>
                                    <Button onClick={onClickAns}>{ansWordTxt}</Button>
                                </Grid>
                                <Grid item>
                                    <Button onClick={onClickShowAns}>{showAnsTxt}</Button>
                                </Grid>
                            </Grid>
                            <Grid item container justifyContent="center">
                                {renderWord()}
                                <Button onClick={onClickSound}><VolumeUpIcon />
                                    <ReactHowler src={wordsCard[wordIndex].mp3Path} playing={playing} preload={false} onEnd={onSoundEnd}></ReactHowler>
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container item justifyContent="space-between">
                            <Grid item>
                                <Button onClick={onClickDefLang}>{chosenLang}</Button>
                            </Grid>
                            <Grid item>
                                <Button onClick={onClickNext}>{nextTxt}</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        )
        function renderWord(){
            if (isShowAns) {
                return <Grid item>{currentWord}</Grid>
            }
            return <Grid item></Grid>
        }
    }

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

    if (wordIndex === -1) {return renderStart()}
    return renderGame()
}