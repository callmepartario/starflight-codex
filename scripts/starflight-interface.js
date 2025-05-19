/* Map Legend Toggles */
let territoryToggle = false;
let alienscriptToggle = false;
let nebulaedetailToggle = false;
let gridToggle = false;
let starfieldToggle = false;
let constellationsToggle = false;
let fluxesToggle = false;
let coloniesToggle = false;
let pointsofinterestToggle = false;
let artifactlocationsToggle = false;

/* Lore and Mechanics Toggles */
let historyToggle = false;
let scienceToggle = false;
let engineeringToggle = false;
let combatToggle = false;
let artifacttechToggle = false;

let interstelToggle = false;
let elowanToggle = false;
let gazurtoidToggle = false;
let mechansToggle = false;
let speminToggle = false;
let thrynnToggle = false;
let uhlekToggle = false;
let veloxToggle = false;
let otheraliensToggle = false;

$(document).ready(function() {
  /* Toggle Territory */
  $("#toggle-territory").click(function() {
    if (territoryToggle == false) {
      $("#territories").removeClass("d-block");
      $("#territories").addClass("d-none");
      $("#territoriesdetail").removeClass("d-none");
      $("#territoriesdetail").addClass("d-block");
      $("#toggle-territory").removeClass("btn-primary-off");
      $("#toggle-territory").addClass("btn-primary-on");
      territoryToggle = true;
    }
    else {
      $("#territories").removeClass("d-none");
      $("#territories").addClass("d-block");
      $("#territoriesdetail").removeClass("d-block");
      $("#territoriesdetail").addClass("d-none");
      $("#toggle-territory").removeClass("btn-primary-on");
      $("#toggle-territory").addClass("btn-primary-off");
      territoryToggle = false;
    }
  });
  /* Toggle Alien Script */
  $("#toggle-alienscript").click(function() {
    if (alienscriptToggle == false) {
      $("#alienscript").addClass("d-none");
      $("#alienscript").removeClass("d-block");
      $("#toggle-alienscript").removeClass("btn-primary-on");
      $("#toggle-alienscript").addClass("btn-primary-off");
      alienscriptToggle = true;
    }
    else {
      $("#alienscript").addClass("d-block");
      $("#alienscript").removeClass("d-none");
      $("#toggle-alienscript").removeClass("btn-primary-off");
      $("#toggle-alienscript").addClass("btn-primary-on");
      alienscriptToggle = false;
    }
  });
  /* Toggle Nebulae Detail */
  $("#toggle-nebulaedetail").click(function() {
    if (nebulaedetailToggle == false) {
      $("#nebulae").removeClass("d-block");
      $("#nebulae").addClass("d-none");
      $("#nebulaedetail").removeClass("d-none");
      $("#nebulaedetail").addClass("d-block");
      $("#toggle-nebulaedetail").removeClass("btn-primary-off");
      $("#toggle-nebulaedetail").addClass("btn-primary-on");
      nebulaedetailToggle = true;
    }
    else {
      $("#nebulae").removeClass("d-none");
      $("#nebulae").addClass("d-block");
      $("#nebulaedetail").removeClass("d-block");
      $("#nebulaedetail").addClass("d-none");
      $("#toggle-nebulaedetail").removeClass("btn-primary-on");
      $("#toggle-nebulaedetail").addClass("btn-primary-off");
      nebulaedetailToggle = false;
    }
  });
  /* Toggle Grid */
  $("#toggle-grid").click(function() {
    if (gridToggle == false) {
      $("#grid").addClass("d-none");
      $("#grid").removeClass("d-block");
      $("#directions").addClass("d-none");
      $("#directions").removeClass("d-block");
      $("#toggle-grid").removeClass("btn-primary-on");
      $("#toggle-grid").addClass("btn-primary-off");
      gridToggle = true;
    }
    else {
      $("#grid").addClass("d-block");
      $("#grid").removeClass("d-none");
      $("#directions").addClass("d-block");
      $("#directions").removeClass("d-none");
      $("#toggle-grid").removeClass("btn-primary-off");
      $("#toggle-grid").addClass("btn-primary-on");
      gridToggle = false;
    }
  });
  /* Toggle Starfield */
  $("#toggle-starfield").click(function() {
    if (starfieldToggle == false) {
      $("#starfield").addClass("d-none");
      $("#starfield").removeClass("d-block");
      $("#toggle-starfield").removeClass("btn-primary-on");
      $("#toggle-starfield").addClass("btn-primary-off");
      starfieldToggle = true;
    }
    else {
      $("#starfield").addClass("d-block");
      $("#starfield").removeClass("d-none");
      $("#toggle-starfield").removeClass("btn-primary-off");
      $("#toggle-starfield").addClass("btn-primary-on");
      starfieldToggle = false;
    }
  });
  /* Toggle Constellations */
  $("#toggle-constellations").click(function() {
    if (constellationsToggle == false) {
      $("#constellations").removeClass("d-none");
      $("#constellations").addClass("d-block");
      $("#toggle-constellations").removeClass("btn-primary-off");
      $("#toggle-constellations").addClass("btn-primary-on");
      constellationsToggle = true;
    }
    else {
      $("#constellations").removeClass("d-block");
      $("#constellations").addClass("d-none");
      $("#toggle-constellations").removeClass("btn-primary-on");
      $("#toggle-constellations").addClass("btn-primary-off");
      constellationsToggle = false;
    }
  });
  /* Toggle Fluxes */
  $("#toggle-fluxes").click(function() {
    if (fluxesToggle == false) {
      $("#fluxes").removeClass("d-none");
      $("#fluxes").addClass("d-block");
      $("#toggle-fluxes").removeClass("btn-primary-off");
      $("#toggle-fluxes").addClass("btn-primary-on");
      fluxesToggle = true;
    }
    else {
      $("#fluxes").removeClass("d-block");
      $("#fluxes").addClass("d-none");
      $("#toggle-fluxes").removeClass("btn-primary-on");
      $("#toggle-fluxes").addClass("btn-primary-off");
      fluxesToggle = false;
    }
  });
  /* Toggle Colonizable Planets */
  $("#toggle-colonies").click(function() {
    if (coloniesToggle == false) {
      $("#colonies").removeClass("d-none");
      $("#colonies").addClass("d-block");
      $("#toggle-colonies").removeClass("btn-primary-off");
      $("#toggle-colonies").addClass("btn-primary-on");
      coloniesToggle = true;
    }
    else {
      $("#colonies").removeClass("d-block");
      $("#colonies").addClass("d-none");
      $("#toggle-colonies").removeClass("btn-primary-on");
      $("#toggle-colonies").addClass("btn-primary-off");
      coloniesToggle = false;
    }
  });
  /* Toggle Points of Interest */
  $("#toggle-pointsofinterest").click(function() {
    if (pointsofinterestToggle == false) {
      $("#pointsofinterest").removeClass("d-none");
      $("#pointsofinterest").addClass("d-block");
      $("#toggle-pointsofinterest").removeClass("btn-primary-off");
      $("#toggle-pointsofinterest").addClass("btn-primary-on");
      pointsofinterestToggle = true;
    }
    else {
      $("#pointsofinterest").removeClass("d-block");
      $("#pointsofinterest").addClass("d-none");
      $("#toggle-pointsofinterest").removeClass("btn-primary-on");
      $("#toggle-pointsofinterest").addClass("btn-primary-off");
      pointsofinterestToggle = false;
    }
  });
  /* Toggle Artifact Locations */
  $("#toggle-artifactlocations").click(function() {
    if (artifactlocationsToggle == false) {
      $("#artifactlocations").removeClass("d-none");
      $("#artifactlocations").addClass("d-block");
      $("#toggle-artifactlocations").removeClass("btn-primary-off");
      $("#toggle-artifactlocations").addClass("btn-primary-on");
      artifactlocationsToggle = true;
    }
    else {
      $("#artifactlocations").removeClass("d-block");
      $("#artifactlocations").addClass("d-none");
      $("#toggle-artifactlocations").removeClass("btn-primary-on");
      $("#toggle-artifactlocations").addClass("btn-primary-off");
      artifactlocationsToggle = false;
    }
  });
  /* Select History */
  $("#toggle-history").click(function() {
    if (historyToggle == false) {
      disableSelection();
      $("#history").removeClass("d-none");
      $("#history").addClass("d-block");
      $("#toggle-history").removeClass("btn-secondary-off");
      $("#toggle-history").addClass("btn-secondary-on");
      historyToggle = true;
    }
    else {
      disableSelection();
    }
  });
  /* Select Science */
  $("#toggle-science").click(function() {
    if (scienceToggle == false) {
      disableSelection();
      $("#science").removeClass("d-none");
      $("#science").addClass("d-block");
      $("#toggle-science").removeClass("btn-secondary-off");
      $("#toggle-science").addClass("btn-secondary-on");
      scienceToggle = true;
    }
    else {
        disableSelection();
    }
  });
  /* Select Engineering */
  $("#toggle-engineering").click(function() {
    if (engineeringToggle == false) {
      disableSelection();
      $("#engineering").removeClass("d-none");
      $("#engineering").addClass("d-block");
      $("#toggle-engineering").removeClass("btn-secondary-off");
      $("#toggle-engineering").addClass("btn-secondary-on");
      engineeringToggle = true;
    }
    else {
      disableSelection();
    }
  });
  /* Select Combat */
  $("#toggle-combat").click(function() {
    if (combatToggle == false) {
      disableSelection();
      $("#combat").removeClass("d-none");
      $("#combat").addClass("d-block");
      $("#toggle-combat").removeClass("btn-secondary-off");
      $("#toggle-combat").addClass("btn-secondary-on");
      combatToggle = true;
    }
    else {
        disableSelection();
    }
  });
  /* Select Artifact Tech */
  $("#toggle-artifacttech").click(function() {
    if (artifacttechToggle == false) {
      disableSelection();
      $("#artifacttech").removeClass("d-none");
      $("#artifacttech").addClass("d-block");
      $("#toggle-artifacttech").removeClass("btn-secondary-off");
      $("#toggle-artifacttech").addClass("btn-secondary-on");
      artifacttechToggle = true;
    }
    else {
      disableSelection();
    }
  });
  /* Select Interstel */
  $("#toggle-interstel").click(function() {
    if (interstelToggle == false) {
        disableSelection();
        $("#aliens-interstel").removeClass("d-none");
        $("#aliens-interstel").addClass("d-block");
        $("#toggle-interstel").removeClass("btn-secondary-off");
        $("#toggle-interstel").addClass("btn-secondary-on");
        interstelToggle = true;
    }
    else {
        disableSelection();
    }
  });
  /* Select Elowan */
  $("#toggle-elowan").click(function() {
    if (elowanToggle == false) {
        disableSelection();
        $("#aliens-elowan").removeClass("d-none");
        $("#aliens-elowan").addClass("d-block");
        $("#toggle-elowan").removeClass("btn-secondary-off");
        $("#toggle-elowan").addClass("btn-secondary-on");
        elowanToggle = true;
    }
    else {
        disableSelection();
    }
  });
  /* Select Gazurtoid */
  $("#toggle-gazurtoid").click(function() {
    if (gazurtoidToggle == false) {
        disableSelection();
        $("#aliens-gazurtoid").removeClass("d-none");
        $("#aliens-gazurtoid").addClass("d-block");
        $("#toggle-gazurtoid").removeClass("btn-secondary-off");
        $("#toggle-gazurtoid").addClass("btn-secondary-on");
        gazurtoidToggle = true;
    }
    else {
        disableSelection();
    }
  });
  /* Select Mechans */
  $("#toggle-mechans").click(function() {
    if (mechansToggle == false) {
        disableSelection();
        $("#aliens-mechans").removeClass("d-none");
        $("#aliens-mechans").addClass("d-block");
        $("#toggle-mechans").removeClass("btn-secondary-off");
        $("#toggle-mechans").addClass("btn-secondary-on");
        mechansToggle = true;
    }
    else {
        disableSelection();
    }
  });
  /* Select Spemin */
  $("#toggle-spemin").click(function() {
    if (speminToggle == false) {
        disableSelection();
        $("#aliens-spemin").removeClass("d-none");
        $("#aliens-spemin").addClass("d-block");
        $("#toggle-spemin").removeClass("btn-secondary-off");
        $("#toggle-spemin").addClass("btn-secondary-on");
        speminToggle = true;
    }
    else {
        disableSelection();
    }
  });
  /* Select Thrynn */
  $("#toggle-thrynn").click(function() {
    if (thrynnToggle == false) {
        disableSelection();
        $("#aliens-thrynn").removeClass("d-none");
        $("#aliens-thrynn").addClass("d-block");
        $("#toggle-thrynn").removeClass("btn-secondary-off");
        $("#toggle-thrynn").addClass("btn-secondary-on");
        thrynnToggle = true;
    }
    else {
        disableSelection();
    }
  });
  /* Select Uhlek */
  $("#toggle-uhlek").click(function() {
    if (uhlekToggle == false) {
        disableSelection();
        $("#aliens-uhlek").removeClass("d-none");
        $("#aliens-uhlek").addClass("d-block");
        $("#toggle-uhlek").removeClass("btn-secondary-off");
        $("#toggle-uhlek").addClass("btn-secondary-on");
        uhlekToggle = true;
    }
    else {
        disableSelection();
    }
  });
  /* Select Velox */
  $("#toggle-velox").click(function() {
    if (veloxToggle == false) {
        disableSelection();
        $("#aliens-velox").removeClass("d-none");
        $("#aliens-velox").addClass("d-block");
        $("#toggle-velox").removeClass("btn-secondary-off");
        $("#toggle-velox").addClass("btn-secondary-on");
        veloxToggle = true;
    }
    else {
        disableSelection();
    }
  });
  /* Select Other Aliens */
  $("#toggle-otheraliens").click(function() {
    if (otheraliensToggle == false) {
        disableSelection();
        $("#aliens-otheraliens").removeClass("d-none");
        $("#aliens-otheraliens").addClass("d-block");
        $("#toggle-otheraliens").removeClass("btn-secondary-off");
        $("#toggle-otheraliens").addClass("btn-secondary-on");
        otheraliensToggle = true;
    }
    else {
        disableSelection();
    }
  });
});

function disableSelection() {
  $("#history").removeClass("d-block");
  $("#history").addClass("d-none");
  $("#toggle-history").removeClass("btn-secondary-on");
  $("#toggle-history").addClass("btn-secondary-off");
  historyToggle = false;
  $("#science").removeClass("d-block");
  $("#science").addClass("d-none");
  $("#toggle-science").removeClass("btn-secondary-on");
  $("#toggle-science").addClass("btn-secondary-off");
  scienceToggle = false;
  $("#engineering").removeClass("d-none");
  $("#engineering").addClass("d-block");
  $("#toggle-engineering").removeClass("btn-secondary-off");
  $("#toggle-engineering").addClass("btn-secondary-on");
  engineeringToggle = false;
  $("#engineering").removeClass("d-block");
  $("#engineering").addClass("d-none");
  $("#toggle-engineering").removeClass("btn-secondary-on");
  $("#toggle-engineering").addClass("btn-secondary-off");
  engineeringToggle = false;
  $("#combat").removeClass("d-none");
  $("#combat").addClass("d-block");
  $("#toggle-combat").removeClass("btn-secondary-off");
  $("#toggle-combat").addClass("btn-secondary-on");
  combatToggle = false;
  $("#combat").removeClass("d-block");
  $("#combat").addClass("d-none");
  $("#toggle-combat").removeClass("btn-secondary-on");
  $("#toggle-combat").addClass("btn-secondary-off");
  combatToggle = false;
  $("#artifacttech").removeClass("d-none");
  $("#artifacttech").addClass("d-block");
  $("#toggle-artifacttech").removeClass("btn-secondary-off");
  $("#toggle-artifacttech").addClass("btn-secondary-on");
  artifacttechToggle = false;
  $("#artifacttech").removeClass("d-block");
  $("#artifacttech").addClass("d-none");
  $("#toggle-artifacttech").removeClass("btn-secondary-on");
  $("#toggle-artifacttech").addClass("btn-secondary-off");
  artifacttechToggle = false;
  $("#aliens-interstel").removeClass("d-block");
  $("#aliens-interstel").addClass("d-none");
  $("#toggle-interstel").removeClass("btn-secondary-on");
  $("#toggle-interstel").addClass("btn-secondary-off");
  interstelToggle = false;
  $("#aliens-elowan").removeClass("d-block");
  $("#aliens-elowan").addClass("d-none");
  $("#toggle-elowan").removeClass("btn-secondary-on");
  $("#toggle-elowan").addClass("btn-secondary-off");
  elowanToggle = false;
  $("#aliens-gazurtoid").removeClass("d-block");
  $("#aliens-gazurtoid").addClass("d-none");
  $("#toggle-gazurtoid").removeClass("btn-secondary-on");
  $("#toggle-gazurtoid").addClass("btn-secondary-off");
  gazurtoidToggle = false;
  $("#aliens-mechans").removeClass("d-block");
  $("#aliens-mechans").addClass("d-none");
  $("#toggle-mechans").removeClass("btn-secondary-on");
  $("#toggle-mechans").addClass("btn-secondary-off");
  mechansToggle = false;
  $("#aliens-spemin").removeClass("d-block");
  $("#aliens-spemin").addClass("d-none");
  $("#toggle-spemin").removeClass("btn-secondary-on");
  $("#toggle-spemin").addClass("btn-secondary-off");
  speminToggle = false;
  $("#aliens-thrynn").removeClass("d-block");
  $("#aliens-thrynn").addClass("d-none");
  $("#toggle-thrynn").removeClass("btn-secondary-on");
  $("#toggle-thrynn").addClass("btn-secondary-off");
  thrynnToggle = false;
  $("#aliens-uhlek").removeClass("d-block");
  $("#aliens-uhlek").addClass("d-none");
  $("#toggle-uhlek").removeClass("btn-secondary-on");
  $("#toggle-uhlek").addClass("btn-secondary-off");
  uhlekToggle = false;
  $("#aliens-velox").removeClass("d-block");
  $("#aliens-velox").addClass("d-none");
  $("#toggle-velox").removeClass("btn-secondary-on");
  $("#toggle-velox").addClass("btn-secondary-off");
  veloxToggle = false;
  $("#aliens-otheraliens").removeClass("d-block");
  $("#aliens-otheraliens").addClass("d-none");
  $("#toggle-otheraliens").removeClass("btn-secondary-on");
  $("#toggle-otheraliens").addClass("btn-secondary-off");
  otheraliensToggle = false;
}