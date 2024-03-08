/** @format */
$(document).ready(function () {
  // Function to fetch exercise data from the backend API
  function fetchExerciseData() {
    $.ajax({
      url: 'http://localhost:8082/apiPull', // Replace with your backend API endpoint
      method: 'GET',
      success: function (response) {
        // Check if data was successfully fetched
        if (response.success) {
          // Clear previous results
          $('#exercise-result').empty();
          // Loop through the fetched exercise data and append it to the result area
          response.data.forEach(function (exercise) {
            $('#exercise-result').append('<div>' + exercise.name + '</div>');
          });
        } else {
          // Display an error message if data fetching failed
          $('#exercise-result').html(
            'Error fetching exercise data: ' + response.message
          );
        }
      },
      error: function (xhr, status, error) {
        // Display an error message if the AJAX request fails
        $('#exercise-result').html('Error fetching exercise data: ' + error);
      },
    });
  }

  // Call the fetchExerciseData function when the page loads
  fetchExerciseData();
});
