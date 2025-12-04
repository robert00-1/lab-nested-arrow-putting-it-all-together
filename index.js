function createLoginTracker(userInfo) {
  let attemptCount = 0;

  const loginAttempt = (passwordAttempt) => {
    attemptCount++;

    // If attempts exceed 3
    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    }

    // Correct password
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    }

    // Wrong password (tests expect this exact format)
    return `Attempt ${attemptCount}: Login failed`;
  };

  return loginAttempt;
}



// USER INFO
const userInfo = {
  username: "user1",
  password: "password123"
};

// CREATE TRACKER
const tracker = createLoginTracker(userInfo);

// TEST CALLS (these make the output show in terminal)
console.log(tracker("wrong1"));      // Login failed. Attempt 1
console.log(tracker("wrong2"));      // Login failed. Attempt 2
console.log(tracker("password123")); // Login successful
console.log(tracker("wrong3"));      // Account locked due to too many failed login attempts
console.log(tracker("wrong4"));      // Still locked



module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
