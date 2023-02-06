import { useState } from "react";
import { Button, TextField, Typography, Grid, Select, FormControl, InputLabel, MenuItem} from "@mui/material";

export const Inputs = (props) => {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [category, setCategory] = useState("all");

    const handFromInput = (event) => {
        setFrom(event.target.value)
    }
    
    const handToInput = (event) => {
        setTo(event.target.value)
    }

    const onSubmitClick = () => {
        props.onSubmit(Number(from), Number(to), category)
    }

    const onLoadClick = () => {
        setFrom(Number(localStorage.getItem('from')))
        setTo(Number(localStorage.getItem('to')))
        setCategory(localStorage.getItem('category'))
    }

    const handleCategorySelect = (event) => {
        setCategory(event.target.value);
    }

    return (
        <Grid container spacing={2} flexDirection="column">
            <Grid item>
                <Typography variant="h6">Choose the Words by ID</Typography>
            </Grid>
            <Grid container item spacing={2} xs={12} md={4}>
                <Grid item xs={2}>
                    <TextField label="From" variant="filled" value={from} onChange={handFromInput}/>
                </Grid>
                <Grid item xs={2}>
                    <TextField label="To" variant="filled" value={to} onChange={handToInput}/>
                </Grid>
                <Grid item xs={4}>
                    <FormControl fullWidth variant="filled" color="secondary">
                        <InputLabel id="word_cat">Word Category</InputLabel>
                        <Select labelId="word_cat" value={category} onChange={handleCategorySelect}>
                            <MenuItem value="all"></MenuItem>
                            {props.categories.map((cat, i) =>
                                <MenuItem value={cat} key={i}>{cat}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    
                </Grid>   
            <Grid container item spacing={2}>
                <Grid item>
                    <Button variant="contained" onClick={onSubmitClick} color="secondary">Submit</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" onClick={onLoadClick} color="secondary">Load</Button>
                </Grid>
            </Grid>
            </Grid> 
        </Grid>
    );
}