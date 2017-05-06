function initMap() {
    var chapelHillNC = {
        lat: 35.913200,
        lng: -79.055847
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: chapelHillNC,
        scrollwheel: false
    });
    var marker = new google.maps.Marker({
        position: chapelHillNC,
        map: map
    });
}
