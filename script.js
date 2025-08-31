// your code here
 const baseUrl = "https://localhost:8080/";

        document.getElementById("button").addEventListener("click", function() {
            // Get values from input fields
            const name = document.getElementById("name").value.trim();
            const year = document.getElementById("year").value.trim();

            // Construct query string based on input
            let query = [];
            if (name) query.push(`name=${encodeURIComponent(name)}`);
            if (year) query.push(`year=${encodeURIComponent(year)}`);

            // Combine base URL with query string (if exists)
            const finalUrl = query.length > 0 ? baseUrl + "?" + query.join("&") : baseUrl;

            // Update the h3 text
            document.getElementById("url").textContent = finalUrl;
        });