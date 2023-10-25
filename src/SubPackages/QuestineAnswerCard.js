// QuestineAnswerCard.js
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Drawer,
  Box,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const QuestionAnswerCard = ({ questionData }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleToggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <Card style={{ margin: '1rem', width: '22.5rem' , backgroundColor:'#80808f',color:'#D0E7D2'}}>
      <CardContent>
        <Typography variant="h4" color={'White'}>
          {questionData.question}
        </Typography>
        <Typography variant="body1">Experience Level: {questionData.expLevel}</Typography>
        <Typography variant="body1">Topic: {questionData.topic}</Typography>
        <Button variant="contained" color="primary" onClick={handleToggleAnswer}>
          {showAnswer ? 'Hide Answer' : 'Show Answer'}
        </Button>
        <Drawer
          anchor="right"
          open={showAnswer}
          onClose={handleToggleAnswer}
          sx={{ '& .MuiDrawer-paper': { width: '100%', maxWidth: '400px' } }}
        >
          <Box sx={{ padding: 2, display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" color={'greenyellow'}>
              Answer
            </Typography>
            <IconButton onClick={handleToggleAnswer}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={{ padding: 2 }}>
            <Typography variant="body1">{questionData.answer}</Typography>
          </Box>
        </Drawer>
        <Typography variant="body1">
          Related Topics: {questionData.relatedTopic.join(', ')}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default QuestionAnswerCard;
