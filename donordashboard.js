
 // Donor dashboard
(function () {
  // Check login and role
  var user = NGO.requireRole('Donor');
  if (!user) return;

  // Donation causes
  var causes = {
    education: {
      name: 'Education',
      img: 'images/educ.jpg',
      unit: 750,
      label: 'school kits'
    },
    healthcare: {
      name: 'Healthcare',
      img: 'images/health.jpg',
      unit: 4000,
      label: 'health camps'
    },
    environment: {
      name: 'Environment',
      img: 'images/environment.jpg',
      unit: 50,
      label: 'saplings'
    },
    community: {
      name: 'Community Support',
      img: 'images/com.jpg',
      unit: 250,
      label: 'ration kits'
    }
  };

  var STORAGE_KEY = NGO.userKey('ngo_donations', user);
  var PEOPLE_PER_RUPEE = 1 / 950;

  // Example donation history
  var sampleDonations = [
    { id: 1, date: '2026-07-05', cause: 'environment', amount: 7500 },
    { id: 2, date: '2026-08-20', cause: 'healthcare', amount: 5000 },
    { id: 3, date: '2026-09-12', cause: 'education', amount: 2000 },
    { id: 4, date: '2026-10-12', cause: 'education', amount: 2000 }
  ];

  var donations = loadDonations();
  var selectedAmount = 1000;

  // Load saved donation history
  function loadDonations() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {}

    return sampleDonations.slice();
  }

  // Save donation history
  function saveDonations() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(donations));
    } catch (e) {}
  }

  // Include donations made through the shared donation form
  function allDonations() {
    return donations.concat(NGO.sharedDonationsFor(user));
  }

  // Format amount in rupees
  function money(amount) {
    return '₹' + (Number(amount) || 0).toLocaleString('en-IN');
  }

  // Format date
  function prettyDate(date) {
    return new Date(date + 'T00:00:00').toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  }

  // Get today's date
  function todayISO() {
    return NGO.todayISO();
  }

  // Get the amount donated to one cause
  function totalFor(cause) {
    return allDonations()
      .filter(function (donation) {
        return donation.cause === cause;
      })
      .reduce(function (total, donation) {
        return total + (Number(donation.amount) || 0);
      }, 0);
  }

  // Show donation statistics
  function renderStats() {
    var all = allDonations();

    var total = all.reduce(function (sum, donation) {
      return sum + (Number(donation.amount) || 0);
    }, 0);

    var people = Math.round(total * PEOPLE_PER_RUPEE);
    var month = todayISO().slice(0, 7);

    var thisMonth = all
      .filter(function (donation) {
        return donation.date && donation.date.slice(0, 7) === month;
      })
      .reduce(function (sum, donation) {
        return sum + (Number(donation.amount) || 0);
      }, 0);

    document.getElementById('statTotal').textContent = money(total);
    document.getElementById('statCount').textContent = all.length;
    document.getElementById('statPeople').textContent = people;
    document.getElementById('statMonth').textContent = money(thisMonth);
    document.getElementById('bannerPeople').textContent = people;
  }

  // Show the impact of donations
  function renderImpact() {
    var html = '';

    Object.keys(causes).forEach(function (key) {
      var cause = causes[key];
      var amount = totalFor(key);
      var units = Math.floor(amount / cause.unit);

      html +=
        '<div class="card">' +
          '<img src="' + cause.img + '" alt="' + cause.name + '">' +
          '<div class="card-body">' +
            '<h3>' + cause.name + '</h3>' +
            '<p>' + money(amount) + ' given</p>' +
            '<span class="tag">' + units + ' ' + cause.label + '</span>' +
          '</div>' +
        '</div>';
    });

    document.getElementById('impactCards').innerHTML = html;
  }

  // Show donation history
  function renderHistory() {
    var body = document.getElementById('historyBody');

    var sorted = allDonations().sort(function (a, b) {
      return a.date < b.date ? 1 : -1;
    });

    if (sorted.length === 0) {
      body.innerHTML = '<tr><td colspan="4">No donations yet.</td></tr>';
      return;
    }

    body.innerHTML = sorted.map(function (donation) {
      var cause = causes[donation.cause];

      return '<tr>' +
        '<td>' + prettyDate(donation.date) + '</td>' +
        '<td>' + (cause ? cause.name : 'Community Support') + '</td>' +
        '<td>' + money(donation.amount) + '</td>' +
        '<td>' + (cause ? cause.name : 'Community Support') + '</td>' +
      '</tr>';
    }).join('');
  }

  // Show the latest donation message
  function renderLatest() {
    var element = document.getElementById('latestUpdate');
    var all = allDonations();

    if (all.length === 0) {
      element.textContent = 'Your donation history will appear here.';
      return;
    }

    all.sort(function (a, b) {
      return a.date < b.date ? 1 : -1;
    });

    var last = all[0];
    var cause = causes[last.cause];

    if (!cause) {
      element.textContent = 'Thank you for supporting our NGO!';
      return;
    }

    var units = Math.floor(last.amount / cause.unit);

    element.textContent = 'Your ' + money(last.amount) + ' for ' +
      cause.name +
      (units > 0
        ? ' can support about ' + units + ' ' + cause.label + '.'
        : ' has been recorded. Thank you!');
  }

  // Update all dashboard sections
  function renderAll() {
    renderStats();
    renderImpact();
    renderHistory();
    renderLatest();
  }

  // Donation amount selection
  var chipButtons = document.querySelectorAll('#amountChips button');
  var customInput = document.getElementById('customAmount');
  var donateBtn = document.getElementById('donateBtn');
  var message = document.getElementById('message');

  function updateButton() {
    donateBtn.textContent = 'Donate ' + money(selectedAmount);
  }

  chipButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      chipButtons.forEach(function (chip) {
        chip.classList.remove('selected');
      });

      button.classList.add('selected');
      selectedAmount = Number(button.dataset.amount);
      customInput.value = '';
      updateButton();
    });
  });

  customInput.addEventListener('input', function () {
    chipButtons.forEach(function (button) {
      button.classList.remove('selected');
    });

    selectedAmount = Number(customInput.value);
    updateButton();
  });

  // Save a demo donation
  donateBtn.addEventListener('click', function () {
    message.className = 'message';

    if (!Number.isFinite(selectedAmount) || selectedAmount < 10) {
      message.textContent = 'Please enter an amount of at least ₹10.';
      message.className = 'message error';
      return;
    }

    var causeKey = document.getElementById('causeSelect').value;

    if (!causes[causeKey]) {
      message.textContent = 'Please select a valid cause.';
      message.className = 'message error';
      return;
    }

    NGO.addSharedDonation(user, causeKey, selectedAmount);

    renderAll();

    message.textContent = 'Demo donation of ' + money(selectedAmount) +
      ' recorded for ' + causes[causeKey].name +
      '. No payment was processed.';

    // Reset the amount after saving
    selectedAmount = 1000;
    customInput.value = '';

    chipButtons.forEach(function (button) {
      button.classList.remove('selected');
    });

    updateButton();
  });

  // Download a text receipt
  document.getElementById('historyBody').addEventListener('click', function (event) {
    var button = event.target.closest('button[data-id]');
    if (!button) return;

    var id = Number(button.dataset.id);

    var donation = allDonations().find(function (item) {
      return Number(item.id) === id;
    });

    if (!donation) return;

    var cause = causes[donation.cause];

    var receipt =
      'NGO - Together for a Better Tomorrow\n' +
      'Donation receipt (demo record)\n\n' +
      'Receipt no: NGO-' + String(donation.id).padStart(5, '0') + '\n' +
      'Date: ' + prettyDate(donation.date) + '\n' +
      'Cause: ' + (cause ? cause.name : 'Community Support') + '\n' +
      'Amount: ' + money(donation.amount) + '\n\n' +
      'This is a demo receipt, not proof of a processed payment.\n' +
      'Thank you for your support.';

    var file = new Blob([receipt], { type: 'text/plain' });
    var url = URL.createObjectURL(file);
    var link = document.createElement('a');

    link.href = url;
    link.download = 'receipt-' + donation.id + '.txt';
    link.click();

    setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 1000);
  });

  // Show donor name and greeting
  function renderProfile() {
    var name = user.name || 'Donor';

    document.getElementById('greeting').textContent =
      'Welcome, ' + name.split(' ')[0];

    document.getElementById('avatar').textContent = name
      .split(' ')
      .map(function (word) { return word[0] || ''; })
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }

  // Log out
  document.getElementById('logoutBtn').addEventListener('click', function () {
    NGO.logout();
  });

  // Start the dashboard
  updateButton();
  renderProfile();
  renderAll();

})();
