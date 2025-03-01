function addMarker(lat, lng) {
    L.marker([lat, lng]).addTo(map);
}

document.getElementById('search').addEventListener('input', function()
{
    const query = this.value.toLowerCase();
    const results = places.filter(place => place.name.toLowerCase().includes(query));

    if (results.length > 0) {
        const firstResult = results[0];
        map.setView([firstResult.lat, firstResult.lng], 13);
        addMarker(firstResult.lat, firstResult.lng);
    }
}
);