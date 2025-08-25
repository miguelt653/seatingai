// Basic client-side functionality for the SeatingAi site

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      // Provide a simple confirmation message to the user
      alert('Thank you for your interest! We will reach out to you soon.');
    });
  }

  // Demo call flow simulation
  const demoButton = document.getElementById('demoCallFlow');
  if (demoButton) {
    demoButton.addEventListener('click', () => {
      simulateCallFlow();
    });
  }
});

/**
 * Simulate a simple restaurant reservation call flow using browser prompts.
 * This function guides the user through the high‑level steps used by the
 * SeatingAi voice assistant. It is intended solely for demonstration
 * purposes; actual voice interactions would leverage speech recognition and
 * natural language understanding.
 */
function simulateCallFlow() {
  alert(
    'Welcome to SeatingAi! I\'m your virtual host.\nLet\'s walk through a sample call flow.'
  );
  let action = prompt(
    'Are you calling to make a new reservation, modify/cancel an existing reservation, or ask a question?\nType "new", "modify", or "info".'
  );
  if (!action) return;
  action = action.toLowerCase();
  if (action === 'info') {
    // Provide a simple information response
    alert(
      'Sure! We\'re open daily from 11 AM to 10 PM.\nWe\'re located at 123 Main Street and have both indoor and patio seating.'
    );
  } else if (action === 'modify' || action === 'cancel' || action === 'cancel reservation') {
    // Handle modification or cancellation
    const existingName = prompt('Please provide the name under the reservation:');
    const existingDate = prompt(
      'Enter the date of the reservation (e.g. 2025-09-15):'
    );
    if (!existingName || !existingDate) {
      alert('You must provide a name and date to modify/cancel a reservation.');
      return;
    }
    if (action === 'cancel' || action === 'cancel reservation') {
      alert(
        `Okay, ${existingName}, your reservation on ${existingDate} has been cancelled. We hope to serve you another time!`
      );
    } else {
      const newDate = prompt('Enter the new date you would like (YYYY-MM-DD):');
      const newTime = prompt('Enter the new time you would like (HH:MM):');
      alert(
        `Your reservation has been updated.\nName: ${existingName}\nNew date: ${newDate}\nNew time: ${newTime}`
      );
    }
  } else if (action === 'new' || action === 'new reservation' || action === 'book') {
    // Gather details for a new reservation
    const partySize = prompt('How many guests will be dining?');
    const date = prompt('What date would you like to reserve? (YYYY-MM-DD)');
    const time = prompt('What time would you like to dine? (HH:MM)');
    const special = prompt(
      'Any special requests (e.g. birthday, accessibility, allergies)? If none, leave blank.'
    );
    if (!partySize || !date || !time) {
      alert('You must provide party size, date, and time to make a reservation.');
      return;
    }
    // Simulate availability check. Here we always accept; real logic would query a backend.
    const name = prompt('May I have your name for the reservation?');
    const contact = prompt(
      'Please provide your contact information (email or phone) for confirmation:'
    );
    alert(
      `Thank you, ${name}!\nYour reservation is confirmed.\nParty size: ${partySize}\nDate: ${date}\nTime: ${time}\nSpecial requests: ${special || 'None'}\nA confirmation will be sent to: ${contact}.\nWe look forward to serving you!`
    );
  } else {
    alert('Sorry, I didn\'t understand. Please start over and choose one of the options.');
  }
}
});