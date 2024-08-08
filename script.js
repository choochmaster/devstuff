// scripts.js

// Sample data: replace this with an actual fetch from the server or file system
const files = [
    { name: "aids.txt", content: "AIDS - Epidemic or Weapon of War? By Mr. Dave Emory, November 1991", url: "aids.txt" },
    { name: "auto.txt", content: "The Big Automobile Scam of America", url: "auto.txt" },
    { name: "banks.txt", content: "Billions for the Bankers and Debts for the People - A Study, by Pastor Sheldon Emry", url: "banks.txt" }
];

// Load the files into the table
window.onload = function() {
    const tableBody = document.querySelector("#archiveTable tbody");
    files.forEach(file => {
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        const contentCell = document.createElement("td");
        
        // Create a link for the file name
        const link = document.createElement("a");
        link.href = file.url;
        link.textContent = file.name;
        link.target = "_blank"; // Open link in a new tab

        nameCell.appendChild(link);
        contentCell.textContent = file.content;
        
        row.appendChild(nameCell);
        row.appendChild(contentCell);
        tableBody.appendChild(row);
    });
}

// Search function
function searchTable() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
    const table = document.getElementById("archiveTable");
    const tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
        const td = tr[i].getElementsByTagName("td");
        let match = false;
        
        for (let j = 0; j < td.length; j++) {
            if (td[j]) {
                const txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toLowerCase().indexOf(filter) > -1) {
                    match = true;
                    break;
                }
            }
        }
        
        tr[i].style.display = match ? "" : "none";
    }
}