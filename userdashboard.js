 // User dashboard
(function () {
  // Check whether a User is logged in
  var user = NGO.requireRole('User');
  if (!user) return;

  // Details of NGO causes
  var causes = {
    education: {
      name: 'Education',
      img: 'images/educ.jpg',
      text: 'Quality education for a brighter future.'
    },
    healthcare: {
      name: 'Healthcare',
      img: 'images/health.jpg',
      text: 'Improving health and well-being.'
    },
    environment: {
      name: 'Environment',
      img: 'images/environment.jpg',
      text: 'A greener, cleaner tomorrow.'
    },
    community: {
      name: 'Community Support',
      img: 'images/com.jpg',
      text: 'Helping families and vulnerable groups.'
    }
  };

  // Available NGO events
  var events = [
    { id: 1, title: 'School Kit Drive', cause: 'education', date: '2026-11-02', time: '9:00 AM', hours: 4 },
    { id: 2, title: 'Free Health Camp', cause: 'healthcare', date: '2026-11-08', time: '8:00 AM', hours: 6 },
    { id: 3, title: 'Tree Plantation Day', cause: 'environment', date: '2026-11-16', time: '7:00 AM', hours: 3 }
  ];

  // Dashboard values
  var MONTHLY_GOAL = 5000;
  var BASE_HOURS = 18;
  var BASE_EVENTS = 4;
  var RUPEES_PER_LIFE = 950;
  var KEY = NGO.userKey('ngo_user_data', user);

  // Example donations
  var sampleDonations = [
    { date: '2026-08-15', cause: 'environment', amount: 2000 },
    { date: '2026-09-02', cause: 'healthcare', amount: 3500 },
    { date: '2026-10-12', cause: 'education', amount: 5000 }
  ];

  // Load saved dashboard data
  var data = load();

  function load() {
    try {
      var saved = localStorage.getItem(KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {}

    return {
      name: user.name,
      joined: [],
      donations: sampleDonations.slice()
    };
  }

  // Save dashboard data
  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(data));
    } catch (e) {}
  }

  // Get this user's donations
  function allDonations() {
    return data.donations.concat(NGO.sharedDonationsFor(user));
  }

  // Show amount in rupees
  function money(amount) {
    return '₹' + Number(amount).toLocaleString('en-IN');
  }

  // Show date in a simple format
  function prettyDate(date, withYear) {
    var options = { day: 'numeric', month: 'short' };

    if (withYear) {
      options.year = 'numeric';
    }

    return new Date(date + 'T00:00:00').toLocaleDateString('en-IN', options);
  }

  // Get the first letters of the user's name
  function initials(name) {
    return name.split(' ')
      .map(function (word) {
        return word[0];
      })
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }

  // Show donation and event totals
  function renderStats() {
    var total = allDonations().reduce(function (sum, donation) {
      return sum + donation.amount;
    }, 0);

    var joinedEvents = events.filter(function (event) {
      return data.joined.indexOf(event.id) !== -1;
    });

    var hours = BASE_HOURS + joinedEvents.reduce(function (sum, event) {
      return sum + event.hours;
    }, 0);

    document.getElementById('statDonated').textContent = money(total);
    document.getElementById('statEvents').textContent = BASE_EVENTS + joinedEvents.length;
    document.getElementById('statHours').textContent = hours;
    document.getElementById('statLives').textContent =
      Math.round(total / RUPEES_PER_LIFE) + joinedEvents.length * 5;
  }

  // Show event cards
  function renderEvents() {
    var html = events.map(function (event) {
      var joined = data.joined.indexOf(event.id) !== -1;

      return '<div class="card">' +
        '<img src="' + causes[event.cause].img + '" alt="' + causes[event.cause].name + '">' +
        '<div class="card-body">' +
        '<h3>' + event.title + '</h3>' +
        '<p>' + prettyDate(event.date) + ' · ' + event.time + '</p>' +
        '<div class="row">' +
        '<span class="tag">' + causes[event.cause].name + '</span>' +
        '<button class="btn solid small' + (joined ? ' done' : '') + '" data-id="' + event.id + '">' +
        (joined ? 'Registered ✓' : 'Register') +
        '</button>' +
        '</div></div></div>';
    }).join('');

    document.getElementById('eventCards').innerHTML = html;
  }

  // Show NGO causes
  function renderCauses() {
    document.getElementById('causeCards').innerHTML =
      Object.keys(causes).map(function (key) {
        var cause = causes[key];

        return '<div class="card">' +
          '<img src="' + cause.img + '" alt="' + cause.name + '">' +
          '<div class="card-body">' +
          '<h3>' + cause.name + '</h3>' +
          '<p>' + cause.text + '</p>' +
          '</div></div>';
      }).join('');
  }

  // Show recent donations
  function renderDonations() {
    var list = allDonations()
      .sort(function (a, b) {
        return a.date < b.date ? 1 : -1;
      })
      .slice(0, 5);

    document.getElementById('donationBody').innerHTML =
      list.map(function (donation) {
        var causeName = causes[donation.cause]
          ? causes[donation.cause].name
          : 'Community Support';

        return '<tr><td>' + prettyDate(donation.date, true) +
          '</td><td>' + causeName +
          '</td><td>' + money(donation.amount) +
          '</td></tr>';
      }).join('');
  }

  // Show this month's donation goal
  function renderGoal() {
    var month = NGO.todayISO().slice(0, 7);

    var done = allDonations()
      .filter(function (donation) {
        return donation.date.slice(0, 7) === month;
      })
      .reduce(function (sum, donation) {
        return sum + donation.amount;
      }, 0);

    var percent = Math.min(100, Math.round(done / MONTHLY_GOAL * 100));

    document.getElementById('goalText').textContent =
      'Goal for this month: ' + money(MONTHLY_GOAL);

    document.getElementById('goalBar').style.width = percent + '%';

    document.getElementById('goalNumbers').textContent =
      money(done) + ' of ' + money(MONTHLY_GOAL) + ' (' + percent + '%)';
  }

  // Show the user's name and initials
  function renderProfile() {
    document.getElementById('profileName').textContent =
      data.name + ' · Ahmedabad';

    document.getElementById('avatar').textContent = initials(data.name);

    document.getElementById('greeting').textContent =
      'Welcome, ' + data.name.split(' ')[0];
  }

  // Refresh all dashboard sections
  function renderAll() {
    renderStats();
    renderEvents();
    renderDonations();
    renderGoal();
    renderProfile();
  }

  // Register or cancel an event
  document.getElementById('eventCards').addEventListener('click', function (event) {
    var button = event.target.closest('button[data-id]');
    if (!button) return;

    var id = Number(button.dataset.id);
    var pos = data.joined.indexOf(id);

    if (pos === -1) {
      data.joined.push(id);
    } else {
      data.joined.splice(pos, 1);
    }

    save();
    renderStats();
    renderEvents();
  });

  // Make a donation
  document.getElementById('donateBtn').addEventListener('click', function () {
    var message = document.getElementById('message');
    var amount = Number(document.getElementById('amountInput').value);
    var cause = document.getElementById('causeSelect').value;

    if (!amount || amount < 10) {
      message.textContent = 'Please enter an amount of at least ₹10.';
      message.className = 'message error';
      return;
    }

    NGO.addSharedDonation(user, cause, amount);

    renderStats();
    renderDonations();
    renderGoal();

    message.className = 'message';
    message.textContent =
      'Thank you! ' + money(amount) + ' donated to ' + causes[cause].name + '.';
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

  // Log out of the dashboard
  document.getElementById('logoutBtn').addEventListener('click', function () {
    NGO.logout();
  });

  // Start the dashboard
  renderCauses();
  renderAll();
})();
