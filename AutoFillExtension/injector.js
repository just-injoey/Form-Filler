var currentDate = new Date();
// Extract day, month, and year
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1; // Note: Month starts from 0
var year = currentDate.getFullYear();

// Format the date as yyyy-MM-dd
var formattedDate = year + '-' + ('0' + month).slice(-2) + '-' + ('0' + day).slice(-2);


// Create a new Date object for check-out by adding 1 day to the check-in date
var checkOutDate = new Date(year, month - 1, day + 1);


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

// Adding guest names
var guestNames = ["Anu Das", "Noore Ahmed", "Elon Musk"]; // Example guest names
var guestNameInputs = document.getElementsByClassName('guest-name-input');

function addGuestInput() {
  const container = document.getElementById('guest-names-container');
  const inputGroup = document.createElement('div');
  inputGroup.className = 'guest-input-group';
  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'guest-name-input';
  input.name = 'guest-name[]';
  input.required = true;
  const addButton = document.createElement('button');
  addButton.className = 'add-guest-button';
  addButton.type = 'button';
  addButton.textContent = '+';
  addButton.onclick = addGuestInput;

  const lastInputGroup = container.lastElementChild;
  const lastAddButton = lastInputGroup.querySelector('.add-guest-button');
  lastAddButton.remove();


  inputGroup.appendChild(input);
  inputGroup.appendChild(addButton);
  container.appendChild(inputGroup);
}


// for (var i = 0; i < guestNames.length && i < guestNameInputs.length; i++) {
//   guestNameInputs[i].value = guestNames[i];
// }


//To remove the last empty text field
for (var i = 0; i < guestNames.length; i++) {
  addGuestInput();
  guestNameInputs[i].value = guestNames[i];
}
const container = document.getElementById('guest-names-container');
const lastInputGroup = container.lastElementChild;
lastInputGroup.remove();



// Set the path to your PDF file
var pdfFilePath = 'idCard.pdf';
// Create a new File object for the PDF file
var pdfFile = new File([pdfFilePath], 'attachment.pdf', { type: 'application/pdf' });
// Create a new DataTransfer object and add the PDF file to it
var dataTransfer = new DataTransfer();
dataTransfer.items.add(pdfFile);

var fileInput = document.getElementById('identity-proof');
// Set the files property of the file input element with the DataTransfer object containing the PDF file
fileInput.files = dataTransfer.files;


var chkboxes = document.getElementById("email").value;
alert(chkboxes);