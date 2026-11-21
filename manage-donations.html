
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manage Donations - NGO</title>

    <style>
        * {
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background: #f4f7f5;
            color: #333;
            margin: 0;
        }

        header {
            background: #16845c;
            color: white;
            padding: 18px 25px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
        }

        header h2 {
            margin: 0;
        }

        .container {
            max-width: 1100px;
            margin: 30px auto;
            padding: 20px;
        }

        .donation-card {
            background: white;
            padding: 20px;
            margin-bottom: 18px;
            border-radius: 10px;
            box-shadow: 0 2px 8px #ddd;
        }

        .donation-card h3 {
            color: #16845c;
            margin-top: 0;
        }

        .donation-card p {
            line-height: 1.6;
            overflow-wrap: anywhere;
        }

        .status {
            color: #a15c00;
            font-weight: bold;
        }

        .back-btn {
            background: white;
            color: #16845c;
            padding: 10px 15px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
        }

        .empty {
            background: white;
            padding: 25px;
            border-radius: 10px;
        }

        @media (max-width: 500px) {
            header {
                padding: 15px;
            }

            .container {
                padding: 12px;
            }
        }
    </style>
</head>

<body>

<header>
    <h2>Manage Donations</h2>
    <button class="back-btn"
        onclick="window.location.href='admindashboard.html'">
        Back to Dashboard
    </button>
</header>

<div class="container">
    <h2>Donation Records</h2>
    <p>Here you can view submitted demo donation records.</p>

    <h3 id="totalAmount">Total Demo Donations: ₹0</h3>

    <div id="donationList"></div>
</div>

<script>
    // Check admin login
    if (localStorage.getItem("adminLoggedIn") !== "true") {
        window.location.href = "admin.html";
    } else {
        showDonations();
    }

    function showDonations() {
        var donations = JSON.parse(
            localStorage.getItem("donations") || "[]"
        );

        var list = document.getElementById("donationList");
        var total = 0;

        list.innerHTML = "";

        if (donations.length === 0) {
            list.innerHTML =
                '<div class="empty">No donation records found. ' +
                'Submit a demo donation using a user account first.</div>';

            document.getElementById("totalAmount").innerText =
                "Total Demo Donations: ₹0";

            return;
        }

        donations.forEach(function(donation) {
            total += Number(donation.amount) || 0;

            var card = document.createElement("div");
            card.className = "donation-card";

            var title = document.createElement("h3");
            title.textContent = donation.donorName || "Unknown Donor";

            var details = document.createElement("p");
            details.textContent =
                "Email: " + (donation.donorEmail || "Not provided") +
                " | Amount: ₹" + (donation.amount || 0) +
                " | Purpose: " + (donation.purpose || "Not specified");

            var date = document.createElement("p");
            date.textContent = "Date: " + (donation.date || "Not available");

            var status = document.createElement("p");
            status.className = "status";
            status.textContent =
                "Status: " + (donation.status || "Demo Record - Not Paid");

            var message = document.createElement("p");
            message.textContent =
                "Message: " + (donation.message || "No message");

            card.appendChild(title);
            card.appendChild(details);
            card.appendChild(date);
            card.appendChild(status);
            card.appendChild(message);

            list.appendChild(card);
        });

        document.getElementById("totalAmount").innerText =
            "Total Demo Donations: ₹" + total;
    }
</script>

</body>
</html>
