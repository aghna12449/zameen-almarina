// Function to render a zone with a given name and color
function renderZone(zoneName, color) {  
    const zoneElement = document.createElement('div');
    zoneElement.className = 'zone';
    zoneElement.style.backgroundColor = color;
    zoneElement.textContent = zoneName;
    
    // Append the zone element to the body or a specific container
    document.body.appendChild(zoneElement);
}
// Example usage
renderZone('Zone 1', 'lightblue');  