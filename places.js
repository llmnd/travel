function showInfo(destinationId) {
    document.querySelectorAll('.destination-info').forEach(function(info) {
        info.style.display = 'none';
    });
    document.getElementById(destinationId).style.display = 'block';
}
