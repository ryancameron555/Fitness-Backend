/** @format */

const STYLE = {
  DEFAULT: `/** @format */

    body {
      font-family: Arial, sans-serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    
    h1 {
      text-align: center;
      margin-bottom: 30px;
    }
    
    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    
    label {
      font-weight: bold;
    }
    
    select,
    button {
      padding: 5px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }
    
    button {
      cursor: pointer;
      background-color: #4caf50;
      color: white;
      border-color: #4caf50;
    }
    
    button:hover {
      background-color: #45a049;
      border-color: #3e8e41;
    }
    
    #exercise-result {
      border: 1px solid #ccc;
      padding: 10px;
      margin-top: 20px;
      border-radius: 5px;
    }
    `,
};

module.exports = STYLE;
