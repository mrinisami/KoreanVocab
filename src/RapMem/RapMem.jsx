import React from "react";
import {wordsByCategory} from "../../resources/words";
import { useState, useEffect } from "react";
import {CardGame} from './Card/Card'
import { WordTable } from "./Table/WordTable";
import { Button, TextField, Grid, Typography, Container, ToggleButtonGroup, ToggleButton, Paper, Checkbox } from '@mui/material';
import { Inputs } from "./Inputs/Inputs";

export const RapMem = (props) => {
    console.log(wordsByCategory)
    const [words, setWords] = React.useState([]);
    const [isTable, setIsTable] = useState(false);
    const [isCard, setIsCard] = useState(false);
    const [alignment, setAlignment] = useState();

    const onSubmitClick = (from, to, category) => {
        setWords(wordsByCategory[category].slice(from, to))
        window.localStorage.setItem('from', from)
        window.localStorage.setItem('to', to)
        window.localStorage.setItem('category', category)
    }

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
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

    const renderCard = () => {
        if (isCard) {
            return (
                <Grid item xs={4}>
                    <CardGame words={words}/>
                </Grid>
            )
        }
        return <></>
    }
    
    const renderGame = () => {
        if (words.length === 0){
            return <></>
        }
        return (
            <Grid container item xs={12} spacing={3} justifyContent="center">
                {renderTable()}
                {renderCard()}
            </Grid>
                
        )
    }

    const onClickTable = () => ((isTable) ? setIsTable(false) : setIsTable(true))
    const onClickCard = () => ((isCard) ? setIsCard(false) : setIsCard(true))

    return (
                <Container maxWidth="xl" spacing={2}>
                    <Grid container spacing={4} flexDirection="column">
                        <Grid item container justifyContent='center'>
                            <Typography variant="h4">Rapid Memorization Game</Typography>
                        </Grid>
                        <Grid item>
                            <Inputs onSubmit={onSubmitClick} categories={Object.keys(wordsByCategory)}/>
                        </Grid>
                    <Grid item container>
                        <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        onChange={handleAlignment}>
                            <ToggleButton value="Table" onClick={onClickTable} >Table</ToggleButton>
                            <ToggleButton value="FlipCard" onClick={onClickCard} >Flip Card</ToggleButton>
                        </ToggleButtonGroup>
                    </Grid>
                        {renderGame()}
                    </Grid>
                </Container>
    );    
};

