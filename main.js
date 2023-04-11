
function getMap() {
    fetch("https://coe892lab42022g500897490.azurewebsites.net/map")
      .then((response) => response.json())
      .then((data) => {
        const xdim = data.MAP.xdim;
        const ydim = data.MAP.ydim;
        const out = data.MAP.map;
        let count = 0;
        const map = new Array(xdim).fill().map(() => new Array(ydim).fill(0));
        for (let i = 0; i < xdim; i++) {
          for (let j = 0; j < ydim; j++) {
            map[i][j] = out[count];
            count++;
          }
        }
  
        // Create a URL with query parameters to pass the data to the new HTML page
        const url = new URL("map.html", window.location.href);
        url.searchParams.set("xdim", xdim);
        url.searchParams.set("ydim", ydim);
        url.searchParams.set("map", JSON.stringify(map));
  
        // Set the window location to the new HTML page with the data
        window.location.href = url.toString();
      });
  }
  

  
  function displayMapData() {
    // Get the data from the query parameters in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const xdim = urlParams.get("xdim");
    const ydim = urlParams.get("ydim");
    const map = JSON.parse(urlParams.get("map"));
    
    // Populate the HTML elements with the data
    document.getElementById("xdim").textContent = xdim;
    document.getElementById("ydim").textContent = ydim;
    const table = document.getElementById("mapTable");
    for (let i = 0; i < xdim; i++) {
      const row = table.insertRow();
      for (let j = 0; j < ydim; j++) {
        const cell = row.insertCell();
        cell.textContent = map[i][j];
      }
    }
  }
  
  function goToIndex() {
    window.location.href = "index.html";
  }
  
  // Check if this is the map.html page and display the data
  if (window.location.pathname.endsWith("map.html")) {
    displayMapData();
  }
  
  
  
  function putMap() {
    const xdim = document.getElementById("xdim").value;
    const ydim = document.getElementById("ydim").value;
    const upmap = { xdim: parseInt(xdim), ydim: parseInt(ydim) };
    fetch("https://coe892lab42022g500897490.azurewebsites.net/map", {
      method: "PUT",
      body: JSON.stringify(upmap),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  
  function getMines() {
    fetch("https://coe892lab42022g500897490.azurewebsites.net/mines")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  
  function getMinesid() {
    const id = document.getElementById("mineId").value;
    fetch(`https://coe892lab42022g500897490.azurewebsites.net/mines/${id}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  
  function deleteMineid() {
    const id = document.getElementById("mineId").value;
    fetch(`https://coe892lab42022g500897490.azurewebsites.net/mines/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  
  function postMine() {
    const x = document.getElementById("mineX").value;
    const y = document.getElementById("mineY").value;
    const serial_num = document.getElementById("mineSerialNum").value;
    const mine = { x: parseInt(x), y: parseInt(y), serial_num };
    fetch("https://coe892lab42022g500897490.azurewebsites.net/mines", {
      method: "POST",
      body: JSON.stringify(mine),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  function putMine() {
    const id = document.getElementById("PutmineId").value;
    const x = document.getElementById("PutxMine").value;
    const y = document.getElementById("PutyMine").value;
    const serial_num = document.getElementById("Putserial_numMine").value;
    const mine = { x, y, serial_num };
    fetch(`https://coe892lab42022g500897490.azurewebsites.net/mines/${id}`, {
      method: "PUT",
      body: JSON.stringify(mine),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  
  function getrovers() {
    fetch("https://coe892lab42022g500897490.azurewebsites.net/rovers")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  
  function getRoverById() {
    const id = document.getElementById("getroverId").value;
    fetch(`https://coe892lab42022g500897490.azurewebsites.net/rovers/${id}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  
  function postRover() {
    const roverStatus = "Not Started"; 
    const x = 0; 
    const y = 0; 
    const moves = document.getElementById("createrovermoves").value;
    const rover = { roverStatus, x, y, moves };
    fetch("https://coe892lab42022g500897490.azurewebsites.net/rovers/", {
      method: "POST",
      body: JSON.stringify(rover),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  
  function deleteRoverById() {
    const id = document.getElementById("DelroverId").value;
    fetch(`https://coe892lab42022g500897490.azurewebsites.net/rovers/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  
  function DispatchRover() {
    const id = document.getElementById("DispatchRoverId").value;
    fetch(`https://coe892lab42022g500897490.azurewebsites.net/rovers/${id}/dispatch`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }