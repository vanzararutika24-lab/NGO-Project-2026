
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NGO Admin Dashboard</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background: #f4f7f6;
            color: #24332f;
        }

        .sidebar {
            width: 245px;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            background: #173b36;
            color: white;
            padding: 22px 14px;
            overflow-y: auto;
        }

        .logo {
            font-size: 23px;
            font-weight: bold;
            padding: 10px;
            margin-bottom: 30px;
        }

        .logo span {
            color: #72d6a4;
        }

        .sidebar p {
            color: #9fb9b1;
            font-size: 11px;
            margin: 15px 10px 8px;
            text-transform: uppercase;
        }

        .sidebar a {
            display: block;
            text-decoration: none;
            color: #d6e5df;
            padding: 13px 12px;
            margin: 5px 0;
            border-radius: 7px;
            font-size: 14px;
        }

        .sidebar a:hover,
        .sidebar a.active {
            background: #16845c;
            color: white;
        }

        .main {
            margin-left: 245px;
            min-height: 100vh;
        }

        .topbar {
            background: white;
            padding: 18px 28px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 8px #0000000b;
            gap: 15px;
        }

        .topbar p {
            color: #84918c;
            font-size: 13px;
            margin-top: 5px;
        }

        .logout {
            border: none;
            border-radius: 6px;
            background: #e74c3c;
            color: white;
            padding: 11px 17px;
            cursor: pointer;
        }

        .content {
            padding: 28px;
        }

        .welcome {
            margin-bottom: 25px;
        }

        .welcome h2 {
            margin-bottom: 8px;
        }

        .welcome p {
            color: #7c8984;
            font-size: 14px;
        }

        .stats {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 18px;
            margin-bottom: 25px;
        }

        .stat-card {
            padding: 22px;
            color: white;
            border-radius: 9px;
            min-height: 145px;
            box-shadow: 0 4px 12px #0000000d;
        }

        .stat-card .symbol {
            font-size: 25px;
            margin-bottom: 13px;
        }

        .stat-card h3 {
            font-size: 27px;
            margin-bottom: 7px;
        }

        .stat-card p {
            font-size: 13px;
        }

        .blue {
            background: linear-gradient(135deg, #3985ed, #1763ca);
        }

        .green {
            background: linear-gradient(135deg, #24a879, #13835b);
        }

        .orange {
            background: linear-gradient(135deg, #f3b83f, #e69a12);
            color: #30250b;
        }

        .purple {
            background: linear-gradient(135deg, #9770dc, #7650bb);
        }

        .panels {
            display: grid;
            grid-template-columns: 1.5fr 1fr;
            gap: 20px;
            margin-bottom: 25px;
        }

        .panel {
            background: white;
            border-radius: 9px;
            padding: 22px;
            box-shadow: 0 3px 12px #00000009;
        }

        .panel h3 {
            margin-bottom: 7px;
        }

        .panel .description {
            color: #89958f;
            font-size: 13px;
            margin-bottom: 20px;
        }

        .chart {
            height: 210px;
            display: flex;
            align-items: end;
            gap: 15px;
            padding: 15px 8px 0;
            border-bottom: 1px solid #e5eae7;
            border-left: 1px solid #e5eae7;
        }

        .chart-column {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: end;
            align-items: center;
            height: 100%;
            gap: 8px;
        }

        .bar {
            width: 65%;
            max-width: 36px;
            background: #36a779;
            border-radius: 5px 5px 0 0;
            min-height: 8px;
        }

        .chart-column span {
            color: #89958f;
            font-size: 11px;
            padding-bottom: 7px;
        }

        .distribution {
            display: flex;
            align-items: center;
            gap: 22px;
            padding: 12px 0;
        }

        .donut {
            width: 125px;
            height: 125px;
            border-radius: 50%;
            background: conic-gradient(
                #16845c 0 45%,
                #3985ed 45% 72%,
                #f3b83f 72% 90%,
                #dfe8e3 90% 100%
            );
            position: relative;
            flex-shrink: 0;
        }

        .donut::after {
            content: "";
            position: absolute;
            inset: 24px;
            border-radius: 50%;
            background: white;
        }

        .legend p {
            font-size: 13px;
            margin: 12px 0;
        }

        .dot {
            display: inline-block;
            width: 9px;
            height: 9px;
            border-radius: 50%;
            margin-right: 7px;
        }

        .management {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 18px;
            margin-bottom: 25px;
        }

        .manage-card {
            background: white;
            padding: 22px;
            border-radius: 9px;
            box-shadow: 0 3px 12px #00000009;
        }

        .manage-card .icon {
            font-size: 25px;
            margin-bottom: 15px;
        }

        .manage-card h3 {
            margin-bottom: 9px;
            font-size: 17px;
        }

        .manage-card p {
            color: #7c8984;
            font-size: 13px;
            line-height: 1.6;
            min-height: 42px;
            margin-bottom: 15px;
        }

        .manage-card a {
            color: #16845c;
            text-decoration: none;
            font-size: 13px;
            font-weight: bold;
        }

        .activity {
            background: white;
            border-radius: 9px;
            padding: 22px;
        }

        .activity h3 {
            margin-bottom: 17px;
        }

        .activity-row {
            display: flex;
            justify-content: space-between;
            gap: 12px;
            padding: 14px 0;
            border-bottom: 1px solid #edf0ee;
            font-size: 13px;
        }

        .activity-row:last-child {
            border-bottom: none;
        }

        .activity-row span:last-child {
            color: #16845c;
        }

        footer {
            text-align: center;
            padding: 20px;
            color: #8a9690;
            font-size: 12px;
        }

        @media (max-width: 1100px) {
            .stats {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .management {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .panels {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 650px) {
            .sidebar {
                width: 175px;
                padding: 15px 8px;
            }

            .logo {
                font-size: 18px;
            }

            .sidebar a {
                font-size: 12px;
                padding: 11px 7px;
            }

            .main {
                margin-left: 175px;
            }

            .content {
                padding: 14px;
            }

            .stats,
            .management {
                grid-template-columns: 1fr;
            }

            .topbar {
                padding: 14px;
                align-items: flex-start;
                flex-direction: column;
            }

            .distribution {
                flex-direction: column;
            }
        }
    </style>
</head>

<body>

    <aside class="sidebar">
        <div class="logo"> Admin NGO <span>Panel</span></div>

        <p>Main Menu</p>
        <a href="admindashboard.html" class="active"> &nbsp; Dashboard</a>

        <p>User Management</p>
        <a href="manage-users.html"> &nbsp; Manage Users</a>
        <a href="manage-volunteers.html"> &nbsp; Manage Volunteers</a>
        <a href="manage-donors.html"> &nbsp; Manage Donors</a>

        <p>NGO Activities</p>
        <a href="manage-donations.html"> &nbsp; Manage Donations</a>
        <a href="manage-events.html"> &nbsp; Manage Events</a>

        <p>Website</p>
        <a href="index.html"> &nbsp; Visit Website</a>
    </aside>

    <div class="main">

        <header class="topbar">
            <div>
                <h2>Admin Dashboard</h2>
                <p>Home / Dashboard</p>
            </div>

            <button class="logout" onclick="logoutAdmin()">
                Logout
            </button>
        </header>

        <main class="content">

            <section class="welcome">
                <h2>Welcome, Admin! </h2>
                <p>Here is what's happening with your NGO today.</p>
            </section>

            <section class="stats">
                <div class="stat-card blue">
                    <div class="symbol"></div>
                    <h3 id="totalUsers">0</h3>
                    <p>Registered Users</p>
                </div>

                <div class="stat-card green">
                    <div class="symbol"></div>
                    <h3 id="totalVolunteers">0</h3>
                    <p>Volunteers</p>
                </div>

                <div class="stat-card orange">
                    <div class="symbol"></div>
                    <h3 id="totalDonors">0</h3>
                    <p>Donors</p>
                </div>

                <div class="stat-card purple">
                    <div class="symbol"></div>
                    <h3 id="totalDonations">₹0</h3>
                    <p>Donation Records Total</p>
                </div>
            </section>

            <section class="panels">

                <div class="panel">
                    <h3>Donation Overview</h3>
                    

                    <div class="chart">
                        <div class="chart-column">
                            <div class="bar" style="height: 35%"></div>
                            <span>Jan</span>
                        </div>
                        <div class="chart-column">
                            <div class="bar" style="height: 55%"></div>
                            <span>Feb</span>
                        </div>
                        <div class="chart-column">
                            <div class="bar" style="height: 43%"></div>
                            <span>Mar</span>
                        </div>
                        <div class="chart-column">
                            <div class="bar" style="height: 78%"></div>
                            <span>Apr</span>
                        </div>
                        <div class="chart-column">
                            <div class="bar" style="height: 62%"></div>
                            <span>May</span>
                        </div>
                        <div class="chart-column">
                            <div class="bar" style="height: 90%"></div>
                            <span>Jun</span>
                        </div>
                    </div>
                </div>

                <div class="panel">
                    <h3>User Distribution</h3>
                    <p class="description">Registered account roles</p>

                    <div class="distribution">
                        <div class="donut"></div>

                        <div class="legend">
                            <p><span class="dot" style="background:#16845c"></span>User</p>
                            <p><span class="dot" style="background:#3985ed"></span>Volunteer</p>
                            <p><span class="dot" style="background:#f3b83f"></span>Donor</p>
                            <p><span class="dot" style="background:#dfe8e3"></span>Other</p>
                        </div>
                    </div>
                </div>

            </section>

            <h2 style="margin-bottom: 17px;">Quick Management</h2>

            <section class="management">

                <div class="manage-card">
                    <div class="icon"></div>
                    <h3>Manage Users</h3>
                    <p>View registered users and their account details.</p>
                    <a href="manage-users.html">Open Page →</a>
                </div>

                <div class="manage-card">
                    <div class="icon"></div>
                    <h3>Manage Volunteers</h3>
                    <p>View and manage volunteer applications.</p>
                    <a href="manage-volunteers.html">Open Page →</a>
                </div>

                <div class="manage-card">
                    <div class="icon"></div>
                    <h3>Manage Donors</h3>
                    <p>View donor information and records.</p>
                    <a href="manage-donors.html">Open Page →</a>
                </div>

                <div class="manage-card">
                    <div class="icon"></div>
                    <h3>Manage Donations</h3>
                    <p>Review donation records saved by the project.</p>
                    <a href="manage-donations.html">Open Page →</a>
                </div>

                <div class="manage-card">
                    <div class="icon"></div>
                    <h3>Manage Events</h3>
                    <p>View NGO events and participation.</p>
                    <a href="manage-events.html">Open Page →</a>
                </div>

            </section>

            <section class="activity">
                <h3>Recent Activity</h3>

                <div class="activity-row">
                    <span>Registered users</span>
                    <span id="activityUsers">0 accounts</span>
                </div>

                <div class="activity-row">
                    <span>Volunteer accounts</span>
                    <span id="activityVolunteers">0 accounts</span>
                </div>

                <div class="activity-row">
                    <span>Donor accounts</span>
                    <span id="activityDonors">0 accounts</span>
                </div>

                <div class="activity-row">
                    <span>Donation records</span>
                    <span id="activityDonations">0 records</span>
                </div>
            </section>

        </main>

        <footer>
            NGO Management System | Admin Panel
        </footer>
    </div>

    <script>
        // Admin login check
        if (localStorage.getItem("adminLoggedIn") !== "true") {
            window.location.replace("admin.html");
        }

        // Read registered accounts
        var users = JSON.parse(
            localStorage.getItem("users") || "[]"
        );

        var totalUsers = users.filter(function(user) {
            return user.role === "User";
        }).length;

        var totalVolunteers = users.filter(function(user) {
            return user.role === "Volunteer";
        }).length;

        var totalDonors = users.filter(function(user) {
            return user.role === "Donor";
        }).length;

        document.getElementById("totalUsers").textContent = totalUsers;
        document.getElementById("totalVolunteers").textContent = totalVolunteers;
        document.getElementById("totalDonors").textContent = totalDonors;

        document.getElementById("activityUsers").textContent =
            totalUsers + " accounts";

        document.getElementById("activityVolunteers").textContent =
            totalVolunteers + " accounts";

        document.getElementById("activityDonors").textContent =
            totalDonors + " accounts";

        // Read donation records
        var donations = JSON.parse(
            localStorage.getItem("donations") || "[]"
        );

        var totalAmount = donations.reduce(function(sum, donation) {
            return sum + (Number(donation.amount) || 0);
        }, 0);

        document.getElementById("totalDonations").textContent =
            "₹" + totalAmount.toLocaleString("en-IN");

        document.getElementById("activityDonations").textContent =
            donations.length + " records";

        // Admin logout
        function logoutAdmin() {
            localStorage.removeItem("adminLoggedIn");
            window.location.href = "admin.html";
        }
    </script>

</body>
</html>
