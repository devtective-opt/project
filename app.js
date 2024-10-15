// Simulated schedule data (can be fetched from a cloud server)
const scheduleData = [
    { time: '11:20', medicines: [{ name: 'Medicine A', dose: 2 }, { name: 'Medicine B', dose: 2 }] },
    { time: '13:00', medicines: [{ name: 'Medicine B', dose: 1 }] },
    { time: '18:30', medicines: [{ name: 'Medicine C', dose: 2 }, { name: 'Medicine A', dose: 1 }] }
];

// Function to dynamically update the schedule in the HTML
function updateSchedule() {
    const scheduleList = document.getElementById('schedule-list');

    // Clear any previous content
    scheduleList.innerHTML = '';

    // Iterate over the schedule data
    scheduleData.forEach(schedule => {
        // Create a div for each time slot
        const scheduleItem = document.createElement('div');
        scheduleItem.classList.add('schedule-item');
        
        // Add the time of the schedule
        const timeElement = document.createElement('p');
        timeElement.classList.add('time');
        timeElement.textContent = `🕒 ${schedule.time}`;
        scheduleItem.appendChild(timeElement);

        // Add each medicine and dose for the current time slot, each on a new line
        schedule.medicines.forEach(med => {
            const medElement = document.createElement('p');
            medElement.classList.add('medicine-item');
            medElement.textContent = `${med.name}: ${med.dose}`;
            scheduleItem.appendChild(medElement);
        });

        // Append the schedule item to the main list
        scheduleList.appendChild(scheduleItem);
    });
}

// Simulate cloud sync (replace with real cloud fetching)
function fetchScheduleFromCloud() {
    // Simulate an asynchronous fetch request (e.g., from Firebase or a cloud API)
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(scheduleData);  // Simulated data fetch
        }, 1000);  // Simulate network delay
    });
}

// Fetch and update the schedule on page load
document.addEventListener('DOMContentLoaded', async () => {
    const schedule = await fetchScheduleFromCloud();  // Fetch from cloud
    updateSchedule(schedule);  // Update HTML with schedule data
});
