/* These functions toggle the display of the project info cards. */

function toggleStickyNotes() {
  $('#javascript-calculator').collapse('hide');
  $('#trinity-account-creator').collapse('hide');
  $('#sticky-notes').collapse('toggle');
}

function toggleJavascriptCalculator() {
  $('#sticky-notes').collapse('hide');
  $('#trinity-account-creator').collapse('hide');
  $('#javascript-calculator').collapse('toggle');
}

function toggleTrinityAccountCreator() {
  $('#sticky-notes').collapse('hide');
  $('#javascript-calculator').collapse('hide');
  $('#trinity-account-creator').collapse('toggle');
}

/* -------------------------------------------------------- */

function togglePdfMergeTool() {
  $('#jquery-todo-list').collapse('hide');
  $('#css-orbit-animation').collapse('hide');
  $('#pdf-merge-tool').collapse('toggle');
}

function togglejQueryTodoList() {
  $('#pdf-merge-tool').collapse('hide');
  $('#css-orbit-animation').collapse('hide');
  $('#jquery-todo-list').collapse('toggle');
}

function toggleCssOrbitAnimation() {
  $('#pdf-merge-tool').collapse('hide');
  $('#jquery-todo-list').collapse('hide');
  $('#css-orbit-animation').collapse('toggle');
}

/* -------------------------------------------------------- */

function toggleHourlyWageTimeCalculator() {
  $('#web-examples').collapse('hide');
  $('#desktop-examples').collapse('hide');
  $('#hourly-wage').collapse('toggle');
}

function toggleOtherWebExamples() {
  $('#hourly-wage').collapse('hide');
  $('#desktop-examples').collapse('hide');
  $('#web-examples').collapse('toggle');
}

function toggleOtherDesktopExamples() {
  $('#hourly-wage').collapse('hide');
  $('#web-examples').collapse('hide');
  $('#desktop-examples').collapse('toggle');
}