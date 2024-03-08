/** @format */

const STYLE = require('./style');

const HTML = {
  EXERCISE_FORM: `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exercise Form</title>
    <style>${STYLE.DEFAULT}</style>
  </head>
  <body>
    <h1>Exercise Form</h1>
    <form id="exercise-form">
      <!-- Exercise Type -->
      <label for="exercise-type">Exercise type:</label><br />
      <select id="exercise-type" name="exercise-type">
        <option value="null">Select type</option>
        <option value="cardio">Cardio</option>
        <option value="weightlifting">Weightlifting</option>
        <option value="plyometrics">Plyometrics</option>
        <option value="powerlifting">Powerlifting</option>
        <option value="strength">Strength Training</option>
        <option value="stretching">Stretching</option>
        <option value="strongman">Strongman Training</option>
      </select>
      <br />
  
      <!-- Muscle Group -->
      <label for="muscle-group">Muscle Group:</label><br />
      <select id="muscle-group" name="muscle-group">
        <option value="null">Select muscle group</option>
        <option value="abdominals">Abdominals</option>
        <option value="biceps">Biceps</option>
        <option value="chest">Chest</option>
        <option value="calves">Calves</option>
        <option value="glutes">Glutes</option>
        <option value="hamstrings">Hamstrings</option>
        <option value="quadriceps">Quadriceps</option>
        <option value="triceps">Triceps</option>
        <!-- Add more options as needed -->
      </select>
      <br />
  
      <!-- Difficulty -->
      <label for="difficulty">Difficulty:</label><br />
      <select id="difficulty" name="difficulty">
        <option value="null">Select difficulty</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
      <br />
  
      <!-- Submit button -->
      <button type="submit">Generate Exercise</button>
    </form>

    <div id="exercise-result"></div>
  
    <!-- Include your script.js file -->
    <script src="script.js"></script>
  </body>
  </html>
  
    `,
};

module.exports = HTML;
