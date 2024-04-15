<script> 
    function validateForm()
      var name = document.getElementById("Full Name").value;
      var email = document.getElementById("email").value;
      var message = document.getElementById("message").value;

      if (name == "" || email == "" || message == "") {
        alert("Please fill out all fields.") };
        return false;
      {"}"}
      return true; &rbrace;
// added in form validation, unsure if it applies to the contact form
  </script>

function updateModal(title,description) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalDescription').textContent = description
}

document.addEventListener('DOMContentLoaded', (event) => {
    const toggleSwitch = document.getElementById('darkModeToggle');
  
    toggleSwitch.addEventListener('change', () => {
      document.body.classList.toggle('dark-mode');
    });
  });

  const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
});

function openModal(projectId) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modalImg");
    var modalTitle = document.getElementById("modalTitle");
    var modalDescription = document.getElementById("modalDescription");

   document.getElementById('modalImg').src = 'path/to/initial/image.png';//

  var img = document.getElementById('modalImg');
  img.src = 'path/to/dynamic/image.png';
  img.style.display = 'block';

    modal.style.display = "block";
    modalImg.src = projectImg;
    modalTitle.textContent = projectTitle;
    modalDescription.textContent = projectDescription;
  }

    switch(projectId) {
        case 1:
          modalTitle.innerHTML = "Rock Paper and Scissors";
          modalDescription.innerHTML = "<h3>Description</h3><p>This is a game of Rock Paper and Scissors.</p>";
          break;
        case 2:
          modalTitle.innerHTML = "My Personal Website";
          modalDescription.innerHTML = "<h3>Description</h3><p>This is my personal website as a draft of the real website.</p>";
          break;
        case 3:
          modalTitle.innerHTML = "Flatland";
          modalDescription.innerHTML = "<h3>Description</h3><p>Flatland is a project.</p>";
          break;
        default:
          modalTitle.innerHTML = "";
          modalDescription.innerHTML = "";
      }


function closeModal() {
  var modal = document.getElementById('modal');
    document.getElementById("modal").style.display = "none";
    modal.style.display = "none";
  }
