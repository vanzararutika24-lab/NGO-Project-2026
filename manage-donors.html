<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manage Donors - NGO Admin</title>

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
            top: 0;
            left: 0;
            padding: 25px 15px;
        }

        .sidebar h2 {
            text-align: center;
            margin-bottom: 35px;
        }

        .sidebar a {
            display: block;
            color: white;
            text-decoration: none;
            padding: 15px 12px;
            margin-bottom: 8px;
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
            margin-bottom: 25px;
            gap: 12px;
        }

        .topbar h1 {
            font-size: 28px;
        }

        .topbar p {
            color: #637c77;
            margin-top: 8px;
        }

        .stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
            margin-bottom: 25px;
        }

        .stat-card {
            background: white;
            padding: 23px;
            border-radius: 12px;
            border: 1px solid #dcebe6;
            box-shadow: 0 3px 10px #173b3608;
        }

        .stat-card p {
            color: #637c77;
            margin-bottom: 12px;
        }

        .stat-card h2 {
            color: #16845c;
            font-size: 27px;
        }

        .donor-section {
            background: white;
            padding: 22px;
            border-radius: 12px;
            box-shadow: 0 3px 12px #173b3608;
        }

        .section-head {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 15px;
            flex-wrap: wrap;
            margin-bottom: 20px;
        }

        .controls {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        input {
            padding: 11px;
            border: 1px solid #cbded8;
            border-radius: 6px;
            width: 240px;
        }

        button {
            padding: 10px 14px;
            border: none;
            border-radius: 6px;
            background: #16845c;
            color: white;
            cursor: pointer;
        }

        button:hover {
            background: #106b49;
        }

        .table-wrapper {
            overflow-x: auto;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            min-width: 750px;
        }

        th,
        td {
            text-align: left;
            padding: 15px 12px;
            border-bottom: 1px solid #e6efeb;
            font-size: 14px;
        }

        th {
            background: #eef6f3;
            color: #315c51;
        }

        .status {
            display: inline-block;
            background: #d9f7e9;
            color: #087448;
            padding: 6px 10px;
            border-radius: 20px;
        }

        .view-btn {
            background: white;
            border: 1px solid #16845c;
            color: #16845c;
        }

        .view-btn:hover {
            color: white;
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

            .topbar h1 {
                font-size: 23px;
            }
        }

        @media (max-width: 550px) {
            .sidebar {
                width: 100%;
                height: auto;
                position: relative;
            }

            .sidebar h2 {
                margin-bottom: 15px;
            }

            .sidebar a {
                display: inline-block;
                padding: 10px;
            }

            .main {
                margin-left: 0;
                padding: 15px;
            }

            .topbar {
                align-items: flex-start;
                flex-direction: column;
            }

            input {
                width: 100%;
            }
        }
    </style>
</head>

<body>

    <aside class="sidebar">

        <a href="admindashboard.html">Dashboard</a>
        <a href="index.html">Visit Website</a>
        <a href="admin.html">Logout</a>
    </aside>

    <main class="main">

        <div class="topbar">
            <div>
                <h1>Manage Donors</h1>
                <p>View and manage registered donors and their donations.</p>
            </div>

            <button onclick="addDonor()">+ Add Donor</button>
        </div>

        <section class="stats">
            <div class="stat-card">
                <p>Total Donors</p>
                <h2 id="totalDonors">0</h2>
            </div>

            <div class="stat-card">
                <p>Total Donations</p>
                <h2 id="totalAmount">₹0</h2>
            </div>

            <div class="stat-card">
                <p>Active Donors</p>
                <h2 id="activeDonors">0</h2>
            </div>
        </section>

        <section class="donor-section">

            <div class="section-head">
                <h2>👥 Donor List</h2>

                <div class="controls">
                    <input type="text" id="searchInput" placeholder="Search name, email or mobile..."
                        oninput="displayDonors()">
                </div>
            </div>

            <div class="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Donation</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody id="donorTable"></tbody>
                </table>
            </div>

            <p class="note" id="donorCount"></p>

        </section>
    </main>

    <script>
        // Sample donor data
        let donors = [
            {
                id: 1,
                name: "Riya Patel",
                email: "riya@gmail.com",
                mobile: "9876543210",
                amount: 2500,
                status: "Active"
            },
            {
                id: 2,
                name: "Amit Sharma",
                email: "amit@gmail.com",
                mobile: "9876501234",
                amount: 1200,
                status: "Active"
            },
            {
                id: 3,
                name: "Neha Shah",
                email: "neha@gmail.com",
                mobile: "9876512345",
                amount: 1800,
                status: "Active"
            },
            {
                id: 4,
                name: "Karan Mehta",
                email: "karan@gmail.com",
                mobile: "9876587654",
                amount: 950,
                status: "Inactive"
            },
            {
                id: 5,
                name: "Pooja Patel",
                email: "pooja@gmail.com",
                mobile: "9876598765",
                amount: 3100,
                status: "Active"
            }
        ];

        function updateStats() {
            document.getElementById("totalDonors").textContent =
                donors.length;

            let total = donors.reduce(function (sum, donor) {
                return sum + donor.amount;
            }, 0);

            document.getElementById("totalAmount").textContent =
                "₹" + total.toLocaleString("en-IN");

            let active = donors.filter(function (donor) {
                return donor.status === "Active";
            }).length;

            document.getElementById("activeDonors").textContent = active;
        }

        function displayDonors() {
            let search = document
                .getElementById("searchInput")
                .value.toLowerCase();

            let filteredDonors = donors.filter(function (donor) {
                return donor.name.toLowerCase().includes(search) ||
                    donor.email.toLowerCase().includes(search) ||
                    donor.mobile.includes(search);
            });

            let table = document.getElementById("donorTable");
            table.innerHTML = "";

            if (filteredDonors.length === 0) {
                table.innerHTML =
                    '<tr><td colspan="7" class="empty">No donors found.</td></tr>';
            }

            filteredDonors.forEach(function (donor) {
                let row = `
                    <tr>
                        <td>D${String(donor.id).padStart(3, "0")}</td>
                        <td>${donor.name}</td>
                        <td>${donor.email}</td>
                        <td>${donor.mobile}</td>
                        <td>₹${donor.amount.toLocaleString("en-IN")}</td>
                        <td>
                            <span class="status">${donor.status}</span>
                        </td>
                        <td>
                        <button class="view-btn"
                        onclick="viewDonor(${donor.id})">
                        View Details
                    </button>

                     <button
                      onclick="deleteDonor(${donor.id})"
                      style="background:#dc3545;">
                        Delete
                    </button>
                </td>
            </tr>
                `;

                table.innerHTML += row;
            });

            document.getElementById("donorCount").textContent =
                "Showing " + filteredDonors.length +
                " of " + donors.length + " donors";

            updateStats();
        }

        function viewDonor(id) {
            let donor = donors.find(function (item) {
                return item.id === id;
            });

            if (donor) {
                alert(
                    "Donor Details\n\n" +
                    "Name: " + donor.name + "\n" +
                    "Email: " + donor.email + "\n" +
                    "Mobile: " + donor.mobile + "\n" +
                    "Total Donation: ₹" + donor.amount + "\n" +
                    "Status: " + donor.status
                );
            }
        }
        function deleteDonor(id) {
            let confirmDelete = confirm(
                "Are you sure you want to delete this donor?"
            );

            if (confirmDelete) {
                donors = donors.filter(function (donor) {
                    return donor.id !== id;
                });

                displayDonors();

                alert("Donor deleted successfully!");
            }
        }

        function addDonor() {
            let name = prompt("Enter donor name:");
            if (!name || !name.trim()) return;

            let email = prompt("Enter donor email:");
            if (!email || !email.trim()) return;

            let mobile = prompt("Enter donor mobile number:");
            if (!mobile || !mobile.trim()) return;

            let amount = prompt("Enter donation amount:");

            if (amount === null || amount.trim() === "" ||
                !Number.isFinite(Number(amount)) || Number(amount) < 0) {
                alert("Please enter a valid donation amount.");
                return;
            }

            donors.push({
                id: donors.length
                    ? Math.max(...donors.map(d => d.id)) + 1
                    : 1,
                name: name.trim(),
                email: email.trim(),
                mobile: mobile.trim(),
                amount: Number(amount),
                status: "Active"
            });

            displayDonors();
            alert("Donor added successfully!");
        }

        displayDonors();
    </script>

</body>

</html>