// InterviewQuestion.js
import React, { useState } from 'react';
import questionAnswerData from '../SubPackages/QuestionAnswerData';
import QuestionAnswerCard from '../SubPackages/QuestineAnswerCard';
import { Typography, FormControl, Select, MenuItem, Grid } from '@mui/material';

const InterviewQuestion = () => {
  const [selectedExperienceLevel, setSelectedExperienceLevel] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');

  const filterQuestions = () => {
    return questionAnswerData.filter(
      (qa) =>
        (!selectedExperienceLevel || qa.expLevel === selectedExperienceLevel) &&
        (!selectedTopic || qa.topic === selectedTopic)
    );
  };

  return (
    <div>
      <Typography variant="h2">Interview Questions</Typography>

      <FormControl>
        <label>Select Experience Level:</label>
        <Select
          value={selectedExperienceLevel}
          onChange={(e) => setSelectedExperienceLevel(e.target.value)}
        >
          <MenuItem value="">All Levels</MenuItem>
          <MenuItem value="Beginner">Beginner</MenuItem>
          <MenuItem value="Intermediate">Intermediate</MenuItem>
          {/* Add more experience levels */}
        </Select>
      </FormControl>

      <FormControl>
        <label>Select Topic:</label>
        <Select
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value)}
        >
          <MenuItem value="">All Topics</MenuItem>
          <MenuItem value="JavaScript Basics">JavaScript Basics</MenuItem>
          <MenuItem value="JavaScript Concepts">JavaScript Concepts</MenuItem>
          {/* Add more topics */}
        </Select>
      </FormControl>

      <Grid container spacing={2}>
        {filterQuestions().map((qa) => (
          <Grid item key={qa.id}>
            <QuestionAnswerCard questionData={qa} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default InterviewQuestion;
