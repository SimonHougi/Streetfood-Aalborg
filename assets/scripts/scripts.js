// Denne funktion er til at få burgermenuen til at virke og vise navigationspunkterne
function burgerMenu() {
  let x = document.getElementById("mobile-links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Denne funktion er til at lave en "vise mere" knap
function showDiv() {
  let x = document.getElementById("show-concept-div");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// Denne funktion er til at lave en "vise mere" knap til en aboutus.html Mission og Vision
function showMission() {
  let x = document.getElementById("show-about-mission-vision");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// Denne funktion er til at lave en "vise mere" knap til en aboutus.html Holdet Bag
function showStaff() {
  let x = document.getElementById("show-about-staff");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// Denne funktion er til at lave en "vise mere" knap til en aboutus.html Historien
function showHistory() {
  let x = document.getElementById("show-about-history");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// Denne funktion er til at lave en "vise mere" knap til en kitchens.html The Dosa Spot
function showDosa() {
  let x = document.getElementById("show-kitchens-dosa");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// Denne funktion er til at lave en "vise mere" knap til en activities.html Boardgames
function showBoardgames() {
  let x = document.getElementById("show-activities-boardgames");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// Denne funktion får Google Maps API til at virke 

function initMap() {
  let location = {lat: 57.057130, lng: 9.897390};
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: location
  });

  let marker = new google.maps.Marker ({
    position: location,
    map: map
  });
}

