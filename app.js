const roleBtn = document.getElementById('role-button');
const roleAns = document.getElementById('role-answer');
const fluentBtn = document.getElementById('fluent-button');
const fluentAns = document.getElementById('fluent-answer');
const lifeBtn = document.getElementById('life-button');
const lifeAns = document.getElementById('life-answer');
const helpBtn = document.getElementById('help-button');
const helpAns = document.getElementById('help-answer');
const exampleBtn = document.getElementById('example-button');
const exampleAns = document.getElementById('example-answer');
const efficiencyBtn = document.getElementById('efficiency-button');
const efficiencyAns = document.getElementById('efficiency-answer');
const feedbackBtn = document.getElementById('feedback-button');
const feedbackAns = document.getElementById('feedback-answer');
const challengeBtn = document.getElementById('challenge-button');
const challengeAns = document.getElementById('challenge-answer');

let role = document.createElement('p');
let fluent = document.createElement('p');
let life = document.createElement('p');
let help = document.createElement('p');
let example = document.createElement('p');
let efficiency = document.createElement('p');
let feedback = document.createElement('p');
let challenge = document.createElement('p');

role.innerHTML = `<p>Master is Abdusaid Abdulrasov<br />Presenter is Emmanuel Kamala</p>`;
fluent.innerHTML = `<p>Yes, code writing and thinking aloud went really smooth.</p>`;
life.innerHTML = `<p>No</p>`;
help.innerHTML = `<p>They were not stuck at any point</p>`;
example.innerHTML = `<p>No</p>`;
efficiency.innerHTML = `<p>Yes</p>`;
feedback.innerHTML = `<p>The presenter was happy to discover some room for improvements.</p>`;
challenge.innerHTML = `<p>Find All Numbers Disappeared in an Array (Leetcode)</p>`;

displayRoleResult = () => roleAns.appendChild(role);
displayFluentResult = () => fluentAns.appendChild(fluent);
displayLifeResult = () => lifeAns.appendChild(life);
displayHelpResult = () => helpAns.appendChild(help);
displayExampleResult = () => exampleAns.appendChild(example);
displayEfficiencyResult = () => efficiencyAns.appendChild(efficiency);
displayFeedbackResult = () => feedbackAns.appendChild(feedback);
displayChallengeResult = () => challengeAns.appendChild(challenge);

roleBtn.addEventListener('click', displayRoleResult);
fluentBtn.addEventListener('click', displayFluentResult);
lifeBtn.addEventListener('click', displayLifeResult);
helpBtn.addEventListener('click', displayHelpResult);
exampleBtn.addEventListener('click', displayExampleResult);
efficiencyBtn.addEventListener('click', displayEfficiencyResult);
feedbackBtn.addEventListener('click', displayFeedbackResult);
challengeBtn.addEventListener('click', displayChallengeResult);
