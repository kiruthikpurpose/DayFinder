function getDay() {
    const dateInput = document.getElementById('date').value;
    if (dateInput) {
        const date = new Date(dateInput);
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayName = days[date.getDay()];
        
        document.getElementById('result').innerText = `The day is: ${dayName}`;
        showDayInfo(dayName);
        changeBackground(dayName);
    } else {
        document.getElementById('result').innerText = 'Please select a date.';
        document.getElementById('day-info').innerText = '';
    }
}

function showDayInfo(dayName) {
    const dayInfo = {
        'Sunday': 'Sunday is considered a day of rest in most Western cultures. It’s a great time to unwind!',
        'Monday': 'Monday is often seen as the start of the workweek and can be challenging for many.',
        'Tuesday': 'Tuesday is known as a productive day—people are usually back in full swing.',
        'Wednesday': 'Wednesday is often called "Hump Day" as it’s the middle of the workweek.',
        'Thursday': 'Thursday is known for being close to the weekend, boosting people’s moods!',
        'Friday': 'Friday brings the excitement of the upcoming weekend! It’s often a more relaxed day at work.',
        'Saturday': 'Saturday is traditionally a day for leisure and spending time with family or pursuing hobbies.'
    };
    document.getElementById('day-info').innerText = dayInfo[dayName];
}

function changeBackground(dayName) {
    const colors = {
        'Sunday': 'linear-gradient(to right, #ff9a9e, #fad0c4)',
        'Monday': 'linear-gradient(to right, #a1c4fd, #c2e9fb)',
        'Tuesday': 'linear-gradient(to right, #fbc2eb, #a6c1ee)',
        'Wednesday': 'linear-gradient(to right, #ffecd2, #fcb69f)',
        'Thursday': 'linear-gradient(to right, #cfd9df, #e2ebf0)',
        'Friday': 'linear-gradient(to right, #d4fc79, #96e6a1)',
        'Saturday': 'linear-gradient(to right, #fdfbfb, #ebedee)'
    };
    
    document.body.style.background = colors[dayName];
}
