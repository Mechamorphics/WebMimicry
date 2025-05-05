function onSelectTab(clickedTab) {
  const tabs = document.querySelectorAll('.navbar-tab');
  tabs.forEach(item => item.classList.remove('active-tab'));
  clickedTab.classList.add('active-tab');
}