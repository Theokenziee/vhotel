

function validate() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var checkin = document.getElementById("checkin").value;
    var datein = new Date(checkin);
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var checkout = document.getElementById("checkout").value;
    var dateout = new Date(checkout);
    var room = document.getElementById("room");
    var selectedValue = room.value;
    if (name.value.length < 5) {
        alert("usename length must be more than 5 characthers");
        error++;
    } else if (!email.value.endsWith("@gmail.com")) {
        alert("Email must ends with @gmail.com");
        error++;
    } else if (isNaN(datein)) {
        alert('Invalid date format');
        error++;
    } else if (checkInDate < tomorrow) {
        alert('Check-in date must be at least tomorrow');
        error++;
    } else if (isNaN(dateout)) {
        alert('Invalid date format');
        error++;
    } else if (datein > dateout) {
        alert('Invalid date range: Check-out date must be after check-in date');
        error++;
    }
    else if (selectedValue === 'Select One') {
        alert('Please select an option');
        error++;
    }

}