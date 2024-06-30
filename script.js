function getDay() {
    const dateInput = document.getElementById('date').value;
    if (dateInput) {
        const date = new Date(dateInput);
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayName = days[date.getDay()];
        document.getElementById('result').innerText = `The day is: ${dayName}`;
    } else {
        document.getElementById('result').innerText = 'Please select a date.';
    }
}
