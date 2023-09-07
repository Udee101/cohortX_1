const express = require('express');
const { addMinutes, minusMinutes, twoMinutesDifferenceUTCValidator } = require('./helper')

const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  const { slack_name, track } = req.query;

  if (!slack_name || !track) {
    return res.status(400).json({ 
      message: 'slack_name and track query parameters are required' 
    });
  }

  // validation of +/- 2 minutes
  upperTimeDeviation = addMinutes(2);
  lowerTimeDeviation = minusMinutes(2);
  let utc_time = twoMinutesDifferenceUTCValidator(upperTimeDeviation, lowerTimeDeviation)

  const response_data = {
    slack_name,
    current_day: new Date().toLocaleString('en-US', { weekday: 'long'}),
    utc_time: utc_time,
    track,
    github_file_url: "https://github.com/udee101/cohortX_1/index.js",
    github_repo_url: "https://github.com/udee101/cohortX_1",
    status_code: 200
  }

  res.status(200).json(response_data);
})

app.listen(port, () => {
  console.log(`endpoint is running on http://localhost:${port}`);
});
