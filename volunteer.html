
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Volunteer Registration - NGO</title>

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
            margin-bottom: 10px;
        }

        .intro {
            margin-bottom: 22px;
            line-height: 1.5;
        }

        label {
            display: block;
            margin: 14px 0 6px;
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
            resize: vertical;
            min-height: 90px;
        }

        button {
            width: 100%;
            margin-top: 20px;
            padding: 12px;
            background: #16845c;
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 16px;
            cursor: pointer;
        }

        button:hover {
            background: #106744;
        }

        #message {
            margin-top: 15px;
            text-align: center;
            color: #16845c;
        }

        @media (max-width: 600px) {
            .container {
                margin: 20px 12px;
                padding: 20px;
            }

            header {
                padding: 15px;
            }
        }
    </style>
</head>

<body>

<header>
    <h2 style="color:white;">NGO Volunteers</h2>
    <a href="userdashboard.html" id="backLink">Back to Dashboard</a>
</header>

<div class="container">
    <h2>Become a Volunteer</h2>
    <p class="intro">
        Join us to help people and make a positive difference in society.
    </p>

    <form id="volunteerForm">
        <label for="name">Full Name</label>
        <input type="text" id="name" required>

        <label for="email">Email Address</label>
        <input type="email" id="email" required>

        <label for="mobile">Mobile Number</label>
        <input type="tel" id="mobile" pattern="[0-9]{10}"
               maxlength="10" required>

        <label for="area">Area of Interest</label>
        <select id="area" required>
            <option value="">Select an area</option>
            <option value="Education">Education</option>
            <option value="Environment">Environment</option>
            <option value="Food Distribution">Food Distribution</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Event Management">Event Management</option>
        </select>

        <label for="availability">Availability</label>
        <select id="availability" required>
            <option value="">Select availability</option>
            <option value="Weekdays">Weekdays</option>
            <option value="Weekends">Weekends</option>
            <option value="Both">Both</option>
        </select>

        <label for="reason">Why do you want to volunteer?</label>
        <textarea id="reason" required
                  placeholder="Write a few words..."></textarea>

        <button type="submit">Submit Application</button>
        <p id="message"></p>
    </form>
</div>

<script>
    // Check whether the user is logged in
    var loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser == null) {
        window.location.href = "login.html";
    } else {
        var user = JSON.parse(loggedInUser);

        document.getElementById("name").value = user.name;
        document.getElementById("email").value = user.email;

        var backPages = { User: "userdashboard.html", Volunteer: "volunteerdashboard.html", Donor: "donordashboard.html" };
        document.getElementById("backLink").href = backPages[user.role] || "userdashboard.html";
    }

    // Save volunteer application in browser storage
    document.getElementById("volunteerForm").addEventListener("submit", function(event) {
        event.preventDefault();

        var application = {
            name: document.getElementById("name").value.trim(),
            email: document.getElementById("email").value.trim(),
            mobile: document.getElementById("mobile").value.trim(),
            area: document.getElementById("area").value,
            availability: document.getElementById("availability").value,
            reason: document.getElementById("reason").value.trim(),
            status: "Pending"
        };

        var applications = JSON.parse(
            localStorage.getItem("volunteerApplications") || "[]"
        );

        applications.push(application);

        localStorage.setItem(
            "volunteerApplications",
            JSON.stringify(applications)
        );

        document.getElementById("message").innerText =
            "Application submitted successfully!";

        document.getElementById("volunteerForm").reset();

        document.getElementById("name").value = user.name;
        document.getElementById("email").value = user.email;
    });
</script>

</body>
</html>
