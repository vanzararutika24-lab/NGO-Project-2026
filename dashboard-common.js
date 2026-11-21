
 // Common code for all dashboards

var NGO = (function () {

  // Dashboard pages for each role
  var dashboards = {
    User: 'userdashboard.html',
    Volunteer: 'volunteerdashboard.html',
    Donor: 'donordashboard.html'
  };

  // Get the logged-in user
  function currentUser() {
    try {
      var user = JSON.parse(localStorage.getItem('loggedInUser'));

      if (user && user.email) {
        return user;
      }
    } catch (e) {}

    return null;
  }

  // Get the correct dashboard page
  function dashboardFor(role) {
    return dashboards[role] || dashboards.User;
  }

  // Check login and user role
  function requireRole(role) {
    var user = currentUser();

    if (!user) {
      window.location.href = 'login.html';
      return null;
    }

    if (user.role !== role) {
      window.location.href = dashboardFor(user.role);
      return null;
    }

    return user;
  }

  // Log out the user
  function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
  }

  // Make a separate storage key for each user
  function userKey(key, user) {
    return key + ':' + user.email.toLowerCase();
  }

  // Convert donation purpose into a cause name
  function causeFromPurpose(purpose) {
    var value = String(purpose || '').toLowerCase();

    if (value === 'education') return 'education';
    if (value === 'healthcare') return 'healthcare';
    if (value === 'environment') return 'environment';

    return 'community';
  }

  // Cause names used by the dashboard
  var purposeFromCause = {
    education: 'Education',
    healthcare: 'Healthcare',
    environment: 'Environment',
    community: 'General Support'
  };

  // Get all donations saved in the browser
  function allDonations() {
    try {
      return JSON.parse(localStorage.getItem('donations') || '[]');
    } catch (e) {
      return [];
    }
  }

  // Get donations made by the logged-in user
  function sharedDonationsFor(user) {
    var donations = allDonations();
    var result = [];

    donations.forEach(function (donation, index) {
      if (
        String(donation.donorEmail || '').toLowerCase() !==
        user.email.toLowerCase()
      ) {
        return;
      }

      result.push({
        id: 1000 + index,
        date: donation.isoDate || todayISO(),
        cause: donation.cause || causeFromPurpose(donation.purpose),
        amount: Number(donation.amount) || 0
      });
    });

    return result;
  }

  // Save a donation so the admin page can see it
  function addSharedDonation(user, cause, amount) {
    var donations = allDonations();

    donations.push({
      donorName: user.name,
      donorEmail: user.email,
      amount: amount,
      purpose: purposeFromCause[cause] || 'General Support',
      cause: cause,
      message: 'Quick donate from dashboard',
      date: new Date().toLocaleDateString(),
      isoDate: todayISO(),
      status: 'Demo Record - Not Paid'
    });

    try {
      localStorage.setItem('donations', JSON.stringify(donations));
    } catch (e) {}
  }

  // Get today's date in YYYY-MM-DD format
  function todayISO() {
    var date = new Date();

    var month = String(date.getMonth() + 1).padStart(2, '0');
    var day = String(date.getDate()).padStart(2, '0');

    return date.getFullYear() + '-' + month + '-' + day;
  }

  // Make these functions available to other files
  return {
    currentUser: currentUser,
    dashboardFor: dashboardFor,
    requireRole: requireRole,
    logout: logout,
    userKey: userKey,
    sharedDonationsFor: sharedDonationsFor,
    addSharedDonation: addSharedDonation,
    todayISO: todayISO
  };

})();
