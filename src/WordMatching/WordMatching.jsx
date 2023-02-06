import React from "react";
import { imageWordsByCategory } from "../../resources/vocab/wordsImages";
import { useState, useEffect } from "react";
import { WordTable } from "./Table/WordTable";
import { Button, TextField, Grid, Typography, Container, ToggleButtonGroup, ToggleButton, Paper, CssBaseline, Checkbox } from '@mui/material';
import { Inputs } from "../RapMem/Inputs/Inputs";
import { CardGame } from "./Card/Card";

export const WordMatching = () => {

    const [words, setWords] = React.useState([]);
    const [isTable, setIsTable] = useState(false);
    const [isWordMatching, setIsWordMatching] = useState(false);
    const [alignment, setAlignment] = useState();


    const onSubmitClick = (from, to, category) => {
        const realTo = Math.min(imageWordsByCategory[category].length, to)
        setWords(imageWordsByCategory[category].slice(from, realTo))
        window.localStorage.setItem('from', from)
        window.localStorage.setItem('to', realTo)
        window.localStorage.setItem('category', category)
    }

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment)
    }

    const renderTable = () => {
        if (isTable){
            return (
                <Grid item xs="auto">
                    <WordTable words={words}/> 
                </Grid>
            )
        }
        return <></>
    }

    const renderWordMatching = () => {
        if (isWordMatching){
            return (
                <Grid item xs={3}>
                    <CardGame words={words}/>
                </Grid>
            )
        }
        return <></>
    }

    const renderGame = () => {
        if (words.length === 0) {
            return <></>
        }
        return (
            <Grid container item spacing={4} xs={12} justifyContent="center">
                {renderTable()}
                {renderWordMatching()}
            </Grid>
        )
    }

    const onClickTable = () => ((isTable) ? setIsTable(false) : setIsTable(true))
    const onClickWordMatching = () => ((isWordMatching) ? setIsWordMatching(false) : setIsWordMatching(true))

    return(
                <Container maxWidth='xl' spacing={2}>
                    <Grid container spacing={4} flexDirection="column">
                        <Grid item container justifyContent="center">
                            <Typography variant="h4">Word Matching Game</Typography>
                        </Grid>
                        <Grid item>
                            <Inputs onSubmit={onSubmitClick} categories={Object.keys(imageWordsByCategory)}/>
                        </Grid>
                        <Grid item container>
                            <ToggleButtonGroup
                            color="primary"
                            value={alignment}
                            onChange={handleAlignment}>
                                <ToggleButton value="Table" onClick={onClickTable} >Table</ToggleButton>
                                <ToggleButton value="WordMatching" onClick={onClickWordMatching} >Word Matching</ToggleButton>
                            </ToggleButtonGroup>
                        </Grid>
                        {renderGame()}
                    </Grid>
                </Container>
    )
}