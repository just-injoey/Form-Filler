var currentDate = new Date();
// Extract day, month, and year
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1; // Note: Month starts from 0
var year = currentDate.getFullYear();

// Format the date as yyyy-MM-dd
var formattedDate = year + '-' + ('0' + month).slice(-2) + '-' + ('0' + day).slice(-2);


// Create a new Date object for check-out by adding 1 day to the check-in date
var checkOutDate = new Date(year, month - 1, day + 1);

// Extract day, month, and year from the check-out date
var checkOutDay = checkOutDate.getDate();
var checkOutMonth = checkOutDate.getMonth() + 1; // Note: Month starts from 0
var checkOutYear = checkOutDate.getFullYear();

// Format the check-out date as yyyy-MM-dd
var formattedCheckOutDate = checkOutYear + '-' + ('0' + checkOutMonth).slice(-2) + '-' + ('0' + checkOutDay).slice(-2);

document.getElementById('name').value = "Justin Joseph";
document.getElementById('email').value = "test@gmail.com";
document.getElementById('phone').value = "9999999999";
document.getElementById('check-in').value = formattedDate;
document.getElementById('check-out').value = formattedCheckOutDate;
document.getElementById('room-type').value = "single";
document.getElementById('guests').value = 1;
document.getElementById('special-requests').value = "None";
document.getElementById('newsletter').checked = true;

var fileUrl = 'D:\\OneDrive\\Desktop\\coding\\ApplyIn\\Task2\\idCard.pdf';

fetch(fileUrl)
    .then(response => response.blob())
    .then(blob => {
      var formData = new FormData();
      formData.append('pdfFile', blob, 'file.pdf');

      // Send the form data to the server using AJAX or fetch API
      // Replace the 'upload-url' with your actual server-side upload endpoint
      fetch('upload-url', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        // Handle the server response
        console.log('Upload success!');
      })
      .catch(error => {
        // Handle any errors that occurred during the upload
        console.error('Upload failed:', error);
      });
    })
    .catch(error => {
      console.error('Error retrieving PDF file:', error);
    });

var chkboxes = document.getElementById("email").value;
alert(chkboxes);