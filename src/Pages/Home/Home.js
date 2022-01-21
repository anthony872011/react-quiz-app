import { Button, MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react';
import './Home.css';
import Chapters, { } from "../../Data/Chapters";
import { useHistory } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
const Home = ({ name, setName, fetchQuestions }) => {
    const [book, setBook] = useState("");
    const [chapter, setChapter] = useState("");
    const [error, setError] = useState(false);
    const history = useHistory();
    const handleSubmit = () => {
        if (!book || !chapter||!name){
            setError(true);
            return;
        }
        else{
            setError(false);
            fetchQuestions(book,chapter);
            history.push("/quiz");
        }
    };
    return (
        <div className='content'>
            <div className='settings'>
                <span style={{fontSize: 30 }}> Quiz Settings</span>
                <div className="settings_select">
                    {error &&<ErrorMessage> Please fill out</ErrorMessage>}
                    <TextField 
                        style ={{marginBottom: 25}}
                        label ="Enter name"
                        variant = "outlined" 
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                    select
                    label = "Select Book"
                    variant = "outlined"
                    style = {{marginBottom: 30 }}
                    onChange={(e) => setBook(e.target.value)}
                    value = {book}
                    >
                        <MenuItem key = "Ruth" value ="Ruth">
                            Ruth
                        </MenuItem>
                        <MenuItem key = "1 King" value ="1 King">
                            1 King 
                        </MenuItem>
                    </TextField>

                    <TextField
                    select
                    label = 'Select Chapter'
                    variant = "outlined"
                    style = {{marginBottom: 30}}
                    onChange={(e) => setChapter(e.target.value)}
                    value = {chapter}                    
                    >
                        {Chapters.map((cat)=>(
                            <MenuItem 
                            key = {cat.value} 
                            value={cat.value}>
                                {cat.label}
                            </MenuItem>
                            ))
                        }
                        
                    </TextField>
                    <Button 
                    variant='contained' 
                    color='primary' 
                    size ="large"
                    onClick= {handleSubmit}
                    >
                        Start Quiz
                    </Button>
                </div>
            </div>

            <img src='/download.jfif' className='banner' alt='quiz img'/>
        </div>
    )
}

export default Home
