
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manage Events - NGO Admin</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background: #f1f7f6;
            color: #173b36;
        }

        .sidebar {
            width: 240px;
            height: 100vh;
            background: #073b36;
            color: white;
            position: fixed;
            padding: 25px 15px;
        }

        .sidebar h2 {
            text-align: center;
            margin-bottom: 35px;
        }

        .sidebar a {
            display: block;
            padding: 15px 12px;
            margin-bottom: 8px;
            color: white;
            text-decoration: none;
            border-radius: 7px;
        }

        .sidebar a:hover,
        .sidebar a.active {
            background: #16845c;
        }

        .main {
            margin-left: 240px;
            padding: 30px;
        }

        .topbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 15px;
            flex-wrap: wrap;
            margin-bottom: 25px;
        }

        .topbar h1 {
            font-size: 28px;
        }

        .topbar p {
            margin-top: 8px;
            color: #637c77;
        }

        button {
            padding: 11px 15px;
            border: none;
            border-radius: 6px;
            background: #16845c;
            color: white;
            cursor: pointer;
        }

        button:hover {
            opacity: 0.85;
        }

        .stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
            margin-bottom: 25px;
        }

        .card {
            background: white;
            padding: 22px;
            border-radius: 12px;
            border: 1px solid #dcebe6;
        }

        .card p {
            color: #637c77;
            margin-bottom: 12px;
        }

        .card h2 {
            color: #16845c;
            font-size: 27px;
        }

        .event-section {
            background: white;
            padding: 22px;
            border-radius: 12px;
        }

        .section-head {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 15px;
            flex-wrap: wrap;
            margin-bottom: 20px;
        }

        input {
            padding: 11px;
            width: 250px;
            max-width: 100%;
            border: 1px solid #cbded8;
            border-radius: 6px;
        }

        .table-wrapper {
            overflow-x: auto;
        }

        table {
            width: 100%;
            min-width: 750px;
            border-collapse: collapse;
        }

        th, td {
            text-align: left;
            padding: 15px 12px;
            border-bottom: 1px solid #e6efeb;
            font-size: 14px;
        }

        th {
            background: #eef6f3;
        }

        .status {
            display: inline-block;
            padding: 6px 10px;
            border-radius: 20px;
            background: #d9f7e9;
            color: #087448;
        }

        .delete-btn {
            background: #dc3545;
        }

        .empty {
            text-align: center;
            padding: 25px;
            color: #637c77;
        }

        .note {
            margin-top: 18px;
            color: #637c77;
            font-size: 14px;
        }

        @media (max-width: 850px) {
            .sidebar {
                width: 180px;
            }

            .main {
                margin-left: 180px;
                padding: 18px;
            }

            .stats {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 550px) {
            .sidebar {
                position: relative;
                width: 100%;
                height: auto;
            }

            .sidebar a {
                display: inline-block;
                padding: 10px;
            }

            .main {
                margin-left: 0;
                padding: 15px;
            }
        }
    </style>
</head>

<body>

    <aside class="sidebar">
        <h2> NGO Admin</h2>

        <a href="admindashboard.html">Dashboard</a>
        <a href="events.html" class="active">Manage Events</a>
        <a href="index.html">Visit Website</a>
        <a href="admin.html">Logout</a>
    </aside>

    <main class="main">

        <div class="topbar">
            <div>
                <h1>Manage Events</h1>
                <p>Create and manage NGO events.</p>
            </div>

            <button onclick="addEvent()">+ Add Event</button>
        </div>

        <section class="stats">
            <div class="card">
                <p>Total Events</p>
                <h2 id="totalEvents">0</h2>
            </div>

            <div class="card">
                <p>Upcoming Events</p>
                <h2 id="upcomingEvents">0</h2>
            </div>

            <div class="card">
                <p>Completed Events</p>
                <h2 id="completedEvents">0</h2>
            </div>
        </section>

        <section class="event-section">

            <div class="section-head">
                <h2>📅 Event List</h2>

                <input
                    type="text"
                    id="searchInput"
                    placeholder="Search event or location..."
                    oninput="displayEvents()"
                >
            </div>

            <div class="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Event Name</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody id="eventTable"></tbody>
                </table>
            </div>

            <p class="note" id="eventCount"></p>

        </section>
    </main>

    <script>
        let events = [
            {
                id: 1,
                name: "Tree Plantation",
                date: "2026-11-05",
                location: "Ahmedabad",
                status: "Upcoming"
            },
            {
                id: 2,
                name: "Food Distribution",
                date: "2026-10-15",
                location: "Naroda",
                status: "Completed"
            },
            {
                id: 3,
                name: "Education Awareness",
                date: "2026-11-20",
                location: "Bapunagar",
                status: "Upcoming"
            }
        ];

        function updateStats() {
            document.getElementById("totalEvents").textContent =
                events.length;

            document.getElementById("upcomingEvents").textContent =
                events.filter(function(event) {
                    return event.status === "Upcoming";
                }).length;

            document.getElementById("completedEvents").textContent =
                events.filter(function(event) {
                    return event.status === "Completed";
                }).length;
        }

        function displayEvents() {
            let search = document
                .getElementById("searchInput")
                .value.toLowerCase();

            let filteredEvents = events.filter(function(event) {
                return event.name.toLowerCase().includes(search) ||
                       event.location.toLowerCase().includes(search);
            });

            let table = document.getElementById("eventTable");
            table.innerHTML = "";

            if (filteredEvents.length === 0) {
                table.innerHTML =
                    '<tr><td colspan="6" class="empty">No events found.</td></tr>';
            }

            filteredEvents.forEach(function(event) {
                let row = `
                    <tr>
                        <td>E${String(event.id).padStart(3, "0")}</td>
                        <td>${event.name}</td>
                        <td>${event.date}</td>
                        <td>${event.location}</td>
                        <td><span class="status">${event.status}</span></td>
                        <td>
                            <button class="delete-btn"
                                onclick="deleteEvent(${event.id})">
                                Delete
                            </button>
                        </td>
                    </tr>
                `;

                table.innerHTML += row;
            });

            document.getElementById("eventCount").textContent =
                "Showing " + filteredEvents.length +
                " of " + events.length + " events";

            updateStats();
        }

        function addEvent() {
            let name = prompt("Enter event name:");
            if (!name || !name.trim()) return;

            let date = prompt("Enter event date (YYYY-MM-DD):");

            if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
                alert("Please enter date in YYYY-MM-DD format.");
                return;
            }

            let location = prompt("Enter event location:");
            if (!location || !location.trim()) return;

            events.push({
                id: events.length
                    ? Math.max(...events.map(e => e.id)) + 1
                    : 1,
                name: name.trim(),
                date: date,
                location: location.trim(),
                status: date < new Date().toISOString().slice(0, 10)
                    ? "Completed"
                    : "Upcoming"
            });

            displayEvents();
            alert("Event added successfully!");
        }

        function deleteEvent(id) {
            let confirmDelete = confirm(
                "Are you sure you want to delete this event?"
            );

            if (confirmDelete) {
                events = events.filter(function(event) {
                    return event.id !== id;
                });

                displayEvents();
                alert("Event deleted successfully!");
            }
        }

        displayEvents();
    </script>

</body>
</html>
