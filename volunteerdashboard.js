
// Volunteer dashboard
(function () {

  // Check whether a Volunteer is logged in
  var user = NGO.requireRole('Volunteer');
  if (!user) return;

  // NGO causes
  var causes = {
    education: { name: 'Education', img: 'images/educ.jpg' },
    healthcare: { name: 'Healthcare', img: 'images/health.jpg' },
    environment: { name: 'Environment', img: 'images/environment.jpg' },
    community: { name: 'Community Support', img: 'images/com.jpg' }
  };

  // Available volunteer events
  var events = [
    { id: 1, title: 'Weekend Teaching Drive', cause: 'education', date: '2026-11-01', place: 'Govt. School, Ahmedabad', hours: 4, needed: 6 },
    { id: 2, title: 'Free Health Camp', cause: 'healthcare', date: '2026-11-08', place: 'Community Hall, Naroda', hours: 6, needed: 8 },
    { id: 3, title: 'Tree Plantation Day', cause: 'environment', date: '2026-11-15', place: 'Sabarmati Riverfront', hours: 3, needed: 20 },
    { id: 4, title: 'Ration Kit Distribution', cause: 'community', date: '2026-11-22', place: 'Vatva, Ahmedabad', hours: 5, needed: 12 },
    { id: 5, title: 'Evening Study Support', cause: 'education', date: '2026-11-29', place: 'Learning Centre, Maninagar', hours: 2, needed: 6 }
  ];

  // Volunteer badges
  var badges = [
    { name: 'First Steps', at: 10 },
    { name: 'Green Starter', at: 50 },
    { name: '100 Hours', at: 100 },
    { name: 'Hero', at: 150 },
    { name: 'Champion', at: 200 }
  ];

  var GOAL = 200;
  var PEOPLE_PER_HOUR = 0.7;
  var KEY = NGO.userKey('ngo_volunteer_data', user);

  // Default volunteer tasks
  var defaultTasks = [
    { text: 'Confirm attendance for Teaching Drive', done: true },
    { text: 'Submit hours for last event', done: false },
    { text: 'Complete safety orientation', done: false }
  ];

  // Load saved data
  var data = load();

  function load() {
    try {
      var saved = localStorage.getItem(KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {}

    return {
      name: user.name,
      baseHours: 128,
      baseEvents: 14,
      joined: [1, 2, 3],
      tasks: defaultTasks.map(function (task) {
        return { text: task.text, done: task.done };
      })
    };
  }

  // Save volunteer data
  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(data));
    } catch (e) {}
  }

  // Format event date
  function prettyDate(date) {
    return new Date(date + 'T00:00:00').toLocaleDateString('en-IN', {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    });
  }

  // Get initials for the profile icon
  function initials(name) {
    return name.split(' ')
      .map(function (word) { return word[0]; })
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }

  // Check whether the volunteer joined an event
  function isJoined(id) {
    return data.joined.indexOf(id) !== -1;
  }

  // Get earned badges
  function earnedBadges() {
    return badges.filter(function (badge) {
      return data.baseHours >= badge.at;
    });
  }

  // Show volunteer statistics
  function renderStats() {
    var people = Math.round(data.baseHours * PEOPLE_PER_HOUR);

    document.getElementById('statHours').textContent = data.baseHours;
    document.getElementById('statEvents').textContent = data.baseEvents;
    document.getElementById('statPeople').textContent = people;
    document.getElementById('statBadges').textContent = earnedBadges().length;

    document.getElementById('bannerText').textContent =
      "You've helped " + people + ' people so far. You are registered for ' +
      data.joined.length + ' upcoming event(s).';
  }

  // Create an event card
  function eventCard(event, buttonText, buttonClass, showNeeded) {
    var neededText = showNeeded
      ? event.needed + ' volunteers needed<br>'
      : '';

    return '<div class="card">' +
      '<img src="' + causes[event.cause].img + '" alt="' + causes[event.cause].name + '">' +
      '<div class="card-body">' +
      '<h3>' + event.title + '</h3>' +
      '<p>' + neededText + prettyDate(event.date) + '<br>' + event.place + '</p>' +
      '<div class="row">' +
      '<span class="tag">' + causes[event.cause].name + '</span>' +
      '<button class="btn solid small ' + buttonClass + '" data-id="' + event.id + '">' +
      buttonText + '</button>' +
      '</div></div></div>';
  }

  // Show joined events and available events
  function renderEvents() {
    var mine = events.filter(function (event) {
      return isJoined(event.id);
    });

    var others = events.filter(function (event) {
      return !isJoined(event.id);
    });

    document.getElementById('myEventCards').innerHTML = mine.length
      ? mine.map(function (event) {
          return eventCard(event, 'Cancel', 'done', false);
        }).join('')
      : '<p class="empty">You have not registered for any event yet. Pick one below.</p>';

    document.getElementById('oppCards').innerHTML = others.length
      ? others.map(function (event) {
          return eventCard(event, 'Join', '', true);
        }).join('')
      : '<p class="empty">You have joined everything available. Thank you!</p>';
  }

  // Show the volunteer task checklist
  function renderTasks() {
    document.getElementById('taskList').innerHTML =
      data.tasks.map(function (task, index) {
        return '<label class="task' + (task.done ? ' done' : '') + '">' +
          '<input type="checkbox" data-i="' + index + '"' +
          (task.done ? ' checked' : '') + '>' +
          '<span>' + task.text + '</span></label>';
      }).join('');
  }

  // Show progress and badges
  function renderGoal() {
    var percent = Math.min(100, Math.round(data.baseHours / GOAL * 100));

    document.getElementById('goalTitle').textContent = 'Goal: ' + GOAL + ' hours';
    document.getElementById('goalBar').style.width = percent + '%';
    document.getElementById('goalNumbers').textContent =
      data.baseHours + ' of ' + GOAL + ' hours (' + percent + '%)';

    document.getElementById('badgeList').innerHTML =
      badges.map(function (badge) {
        var earned = data.baseHours >= badge.at;

        return '<span class="' + (earned ? '' : 'locked') + '">' +
          (earned ? '' : '🔒 ') + badge.name + '</span>';
      }).join('');
  }

  // Show profile details and greeting
  function renderProfile() {
    document.getElementById('profileName').textContent = data.name + ' · Ahmedabad';
    document.getElementById('avatar').textContent = initials(data.name);
    document.getElementById('greeting').textContent =
      'Welcome, ' + data.name.split(' ')[0];
  }

  // Refresh all dashboard sections
  function renderAll() {
    renderStats();
    renderEvents();
    renderTasks();
    renderGoal();
    renderProfile();
  }

  // Join or cancel an event
  function toggleEvent(event) {
    var button = event.target.closest('button[data-id]');
    if (!button) return;

    var id = Number(button.dataset.id);
    var position = data.joined.indexOf(id);

    if (position === -1) {
      data.joined.push(id);
    } else {
      data.joined.splice(position, 1);
    }

    save();
    renderStats();
    renderEvents();
  }

  document.getElementById('myEventCards').addEventListener('click', toggleEvent);
  document.getElementById('oppCards').addEventListener('click', toggleEvent);

  // Mark a task as complete
  document.getElementById('taskList').addEventListener('change', function (event) {
    var index = event.target.dataset.i;
    if (index === undefined) return;

    data.tasks[index].done = event.target.checked;
    save();
    renderTasks();
  });

  // Add volunteer hours
  document.getElementById('logBtn').addEventListener('click', function () {
    var message = document.getElementById('message');
    var input = document.getElementById('hoursInput');
    var hours = Number(input.value);
    var oldBadges = earnedBadges().length;

    if (!hours || hours < 1 || hours > 24) {
      message.textContent = 'Please enter hours between 1 and 24.';
      message.className = 'message error';
      return;
    }

    data.baseHours += hours;
    save();
    renderStats();
    renderGoal();

    input.value = '';
    message.className = 'message';
    message.textContent = hours + ' hour(s) added.';

    if (earnedBadges().length > oldBadges) {
      message.textContent += ' You unlocked a new badge!';
    }
  });

  // Change the profile name
  document.getElementById('editProfile').addEventListener('click', function () {
    var name = prompt('Enter your name', data.name);

    if (name && name.trim()) {
      data.name = name.trim();
      save();
      renderProfile();
    }
  });

  // Log out
  document.getElementById('logoutBtn').addEventListener('click', function () {
    NGO.logout();
  });

  // Start the dashboard
  renderAll();

})();
