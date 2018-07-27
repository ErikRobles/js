// Init GitHub
const github = new Github;


// Search Input
const searchUser = document.getElementById('searchUser');

// search inut event listner
searchUser.addEventListener('keyup', (e) => {
  // Get input text 
  const userText = e.target.value;
  // Init UI
  const ui = new UI;

  if (userText !== '') {
    // Make http call
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show Alert
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          // Show Profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});