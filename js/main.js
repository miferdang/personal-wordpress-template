// Function show navbar menu mobile
function showMenuMobile(id){
  var chosenMenu = document.getElementById(id);
  if (chosenMenu.style.display === 'block') {
    chosenMenu.style.display = 'none';
  } else {
    chosenMenu.style.display = 'block';
  }
};
