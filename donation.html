
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Donate - NGO</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background: #f4f7f5;
            color: #333;
        }

        header {
            background: #16845c;
            color: white;
            padding: 18px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 15px;
        }

        header a {
            color: white;
            text-decoration: none;
        }

        .container {
            max-width: 650px;
            margin: 35px auto;
            padding: 25px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 3px 12px #ddd;
        }

        h2 {
            color: #16845c;
            margin-bottom: 12px;
        }

        .intro {
            line-height: 1.6;
            margin-bottom: 20px;
        }

        label {
            display: block;
            margin: 15px 0 7px;
            font-weight: bold;
        }

        input, select, textarea {
            width: 100%;
            padding: 11px;
            border: 1px solid #ccc;
            border-radius: 6px;
            font-size: 15px;
        }

        textarea {
            min-height: 80px;
            resize: vertical;
        }

        .amount-options {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
            margin-top: 8px;
        }

        .amount-options button {
            padding: 12px 5px;
            border: 1px solid #16845c;
            border-radius: 6px;
            background: white;
            color: #16845c;
            cursor: pointer;
        }

        .amount-options button:hover,
        .amount-options button.selected {
            background: #16845c;
            color: white;
        }

        .submit-btn {
            width: 100%;
            margin-top: 22px;
            padding: 13px;
            background: #16845c;
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 16px;
            cursor: pointer;
        }

        .submit-btn:hover {
            background: #106744;
        }

        #message {
            margin-top: 18px;
            line-height: 1.5;
            text-align: center;
            color: #16845c;
            font-weight: bold;
        }

        .note {
            margin-top: 15px;
            font-size: 13px;
            color: #666;
            line-height: 1.5;
        }

        @media (max-width: 500px) {
            header {
                padding: 15px;
            }

            .container {
                margin: 20px 12px;
                padding: 20px;
            }

            .amount-options {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    </style>
</head>

<body>

<header>
    <h2 style="color:white; margin:0;">NGO Donations</h2>
    <a href="userdashboard.html" id="backLink">Back to Dashboard</a>
</header>

<div class="container">

    <h2>Make a Donation</h2>

    <p class="intro">
        Your support can make a positive difference in someone's life.
        Fill in the form to record a demo donation.
    </p>

    <form id="donationForm">

        <label for="donorName">Full Name</label>
        <input type="text" id="donorName" required>

        <label for="donorEmail">Email Address</label>
        <input type="email" id="donorEmail" required>

        <label>Select Donation Amount (₹)</label>

        <div class="amount-options">
            <button type="button" onclick="selectAmount(100, this)">₹100</button>
            <button type="button" onclick="selectAmount(500, this)">₹500</button>
            <button type="button" onclick="selectAmount(1000, this)">₹1,000</button>
            <button type="button" onclick="selectAmount(2000, this)">₹2,000</button>
        </div>

        <label for="amount">Or Enter Custom Amount (₹)</label>
        <input type="number" id="amount" min="1" step="1"
               placeholder="Enter amount" required>

        <label for="purpose">Donation Purpose</label>
        <select id="purpose" required>
            <option value="">Select purpose</option>
            <option value="Education">Education</option>
            <option value="Food Distribution">Food Distribution</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Environment">Environment</option>
            <option value="General Support">General Support</option>
        </select>

        <label for="messageText">Message (Optional)</label>
        <textarea id="messageText"
                  placeholder="Write a message..."></textarea>

        <button type="submit" class="submit-btn">
            Submit Demo Donation
        </button>
        <p id="message" role="status" aria-live="polite"></p>

       

    </form>
</div>

<script>
    // Check user login
    var userData = localStorage.getItem("loggedInUser");
    var user = null;

  
if (userData === null) {
    window.location.href = "login.html";
} else {
    try {
        user = JSON.parse(userData);

        if (!user || !user.name || !user.email) {
            localStorage.removeItem("loggedInUser");
            window.location.href = "login.html";
        } else {
            document.getElementById("donorName").value = user.name;
            document.getElementById("donorEmail").value = user.email;

            // Back link goes to this person's own dashboard
            var backPages = { User: "userdashboard.html", Volunteer: "volunteerdashboard.html", Donor: "donordashboard.html" };
            document.getElementById("backLink").href = backPages[user.role] || "userdashboard.html";
        }
    } catch (error) {
        localStorage.removeItem("loggedInUser");
        window.location.href = "login.html";
    }
}


    // Select a suggested donation amount
    function selectAmount(amount, button) {
        document.getElementById("amount").value = amount;

        var buttons = document.querySelectorAll(".amount-options button");

        buttons.forEach(function(btn) {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");
    }

    // Purpose -> cause key used by the dashboards
    function causeFromPurpose(purpose) {
        var p = purpose.toLowerCase();
        if (p === "education" || p === "healthcare" || p === "environment") return p;
        return "community";
    }

    // Save demo donation
    document.getElementById("donationForm").addEventListener("submit", function(event) {
        event.preventDefault();

        var amount = Number(document.getElementById("amount").value);

        if (!Number.isSafeInteger(amount) || amount < 1) {
            document.getElementById("message").innerText =
                "Please enter a valid whole amount.";
            return;
        }

        var donation = {
            donorName: document.getElementById("donorName").value.trim(),
            donorEmail: document.getElementById("donorEmail").value.trim(),
            amount: amount,
            purpose: document.getElementById("purpose").value,
            message: document.getElementById("messageText").value.trim(),
            date: new Date().toLocaleDateString(),
            isoDate: new Date().toISOString().slice(0, 10),
            cause: causeFromPurpose(document.getElementById("purpose").value),
            status: "Demo Record - Not Paid"
        };

        var donations = JSON.parse(
            localStorage.getItem("donations") || "[]"
        );

        donations.push(donation);

        localStorage.setItem("donations", JSON.stringify(donations));

        document.getElementById("message").innerText =
            "Demo donation record saved successfully! No payment was made.";

        document.getElementById("donationForm").reset();

        if (user) {
            document.getElementById("donorName").value = user.name;
            document.getElementById("donorEmail").value = user.email;
        }

        document.querySelectorAll(".amount-options button").forEach(function(btn) {
            btn.classList.remove("selected");
        });
    });
</script>

</body>
</html>
