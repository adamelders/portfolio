/* These functions toggle the display of the project info cards. */

function toggleStickyNotes() {
  
  /* Hide other project info panels on other rows */
  $('#jquery-todo-list').collapse('hide');
  $('#css-orbit-animation').collapse('hide');
  $('#pdf-merge-tool').collapse('hide');
  $('#web-examples').collapse('hide');
  $('#desktop-examples').collapse('hide');
  $('#hourly-wage').collapse('hide');
  
  /* Show the current info panel */
  $('#javascript-calculator').collapse('hide');
  $('#trinity-account-creator').collapse('hide');
  $('#sticky-notes').collapse('toggle');
}

function toggleJavascriptCalculator() {
  
  /* Hide other project info panels on other rows */
  $('#jquery-todo-list').collapse('hide');
  $('#css-orbit-animation').collapse('hide');
  $('#pdf-merge-tool').collapse('hide');
  $('#web-examples').collapse('hide');
  $('#desktop-examples').collapse('hide');
  $('#hourly-wage').collapse('hide');
  
  /* Show the current info panel */
  $('#sticky-notes').collapse('hide');
  $('#trinity-account-creator').collapse('hide');
  $('#javascript-calculator').collapse('toggle');
}

function toggleTrinityAccountCreator() {
  
  /* Hide other project info panels on other rows */
  $('#jquery-todo-list').collapse('hide');
  $('#css-orbit-animation').collapse('hide');
  $('#pdf-merge-tool').collapse('hide');
  $('#web-examples').collapse('hide');
  $('#desktop-examples').collapse('hide');
  $('#hourly-wage').collapse('hide');
  
  /* Show the current info panel */
  $('#sticky-notes').collapse('hide');
  $('#javascript-calculator').collapse('hide');
  $('#trinity-account-creator').collapse('toggle');
}

/* -------------------------------------------------------- */

function togglePdfMergeTool() {
  
  /* Hide other project info panels on other rows */
  $('#sticky-notes').collapse('hide');
  $('#trinity-account-creator').collapse('hide');
  $('#javascript-calculator').collapse('hide');
  $('#web-examples').collapse('hide');
  $('#desktop-examples').collapse('hide');
  $('#hourly-wage').collapse('hide');
  
  /* Show the current info panel */
  $('#jquery-todo-list').collapse('hide');
  $('#css-orbit-animation').collapse('hide');
  $('#pdf-merge-tool').collapse('toggle');
}

function togglejQueryTodoList() {
  
  /* Hide other project info panels on other rows */
  $('#sticky-notes').collapse('hide');
  $('#trinity-account-creator').collapse('hide');
  $('#javascript-calculator').collapse('hide');
  $('#web-examples').collapse('hide');
  $('#desktop-examples').collapse('hide');
  $('#hourly-wage').collapse('hide');
  
  /* Show the current info panel */
  $('#pdf-merge-tool').collapse('hide');
  $('#css-orbit-animation').collapse('hide');
  $('#jquery-todo-list').collapse('toggle');
}

function toggleCssOrbitAnimation() {
  
  /* Hide other project info panels on other rows */
  $('#sticky-notes').collapse('hide');
  $('#trinity-account-creator').collapse('hide');
  $('#javascript-calculator').collapse('hide');
  $('#web-examples').collapse('hide');
  $('#desktop-examples').collapse('hide');
  $('#hourly-wage').collapse('hide');
  
  /* Show the current info panel */
  $('#pdf-merge-tool').collapse('hide');
  $('#jquery-todo-list').collapse('hide');
  $('#css-orbit-animation').collapse('toggle');
}

/* -------------------------------------------------------- */

function toggleHourlyWageTimeCalculator() {
  
  /* Hide other project info panels on other rows */
  $('#sticky-notes').collapse('hide');
  $('#javascript-calculator').collapse('hide');
  $('#trinity-account-creator').collapse('hide');
  $('#pdf-merge-tool').collapse('hide');
  $('#jquery-todo-list').collapse('hide');
  $('#css-orbit-animation').collapse('hide');
  
  /* Show the current info panel */
  $('#web-examples').collapse('hide');
  $('#desktop-examples').collapse('hide');
  $('#hourly-wage').collapse('toggle');
}

function toggleOtherWebExamples() {
  
  /* Hide other project info panels on other rows */
  $('#sticky-notes').collapse('hide');
  $('#javascript-calculator').collapse('hide');
  $('#trinity-account-creator').collapse('hide');
  $('#pdf-merge-tool').collapse('hide');
  $('#jquery-todo-list').collapse('hide');
  $('#css-orbit-animation').collapse('hide');
  
  /* Show the current info panel */
  $('#hourly-wage').collapse('hide');
  $('#desktop-examples').collapse('hide');
  $('#web-examples').collapse('toggle');
}

function toggleOtherDesktopExamples() {
  
  /* Hide other project info panels on other rows */
  $('#sticky-notes').collapse('hide');
  $('#javascript-calculator').collapse('hide');
  $('#trinity-account-creator').collapse('hide');
  $('#pdf-merge-tool').collapse('hide');
  $('#jquery-todo-list').collapse('hide');
  $('#css-orbit-animation').collapse('hide');
  
  /* Show the current info panel */
  $('#hourly-wage').collapse('hide');
  $('#web-examples').collapse('hide');
  $('#desktop-examples').collapse('toggle');
}