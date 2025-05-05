function onSelectTab(clickedTab) {
  const tabs = document.querySelectorAll('.navbar-tab');
  tabs.forEach(item => item.classList.remove('active-tab'));
  clickedTab.classList.add('active-tab');
}

function onFilterSelect(clickedFilter) {
  const filters = document.querySelectorAll('.filter-option');

  if (clickedFilter.classList.contains('active-filter')) {
    clickedFilter.classList.remove('active-filter');
  } else {
    clickedFilter.classList.add('active-filter');
  }
}
