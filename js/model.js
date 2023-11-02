(() => {
    console.log ('Javascript is running')

    let hotspots = document.querySelectorAll('.Hotspot')

    let hotspotInfo = [
        {
            title : "Flexible Brand",
            info : "An adaptive and flexible brand to help you express yourself the way you deserve to express yourself!",
            image: "images/band.svg"
        },

        {
            title: "Comfort For Your Ears",
            info: "A rubbery, but soft cushion so your ears can listen to whatever you want with as much comfort as possible!",
            image: "images/ear.svg"
        },

        {
            title: "Changing Faceplate",
            info: "The area where we will insert a logo or image based on the source of the theme of the ear bud!",
            image: "images/happy.svg"
        },

        {
            title: "Secure and Charge",
            info: "Safety clips to ensure that the ear bud doesn't slip out of its case and doubles as alternative charger!",
            image:  "images/lock.svg"
        },

        {
            title: "Snap and Plug",
            info: "Easy to snap in charging port, with charges lasting up to 8 hours!",
            image: "images/battery.svg"
        },

        {
            title: "Hard Exterior",
            info: "Durable shell that protects the components inside from serious damage!",
            image: "images/muscle.svg"
        },
    ]
    
    function loadHotspotInfo() {
        hotspotInfo.forEach((hotspotBox, index) => {
            let hotspotTarget = document.querySelector(`#hotspot-info-${index + 1}`);
            
            let title = document.createElement("h2")
            title.textContent = hotspotBox.title

            let paragraph = document.createElement("p");
            paragraph.textContent = hotspotBox.info;

            let image = document.createElement("img")
            image.src = hotspotBox.image
            image.classList.add("hotspot_icon")
            
            hotspotTarget.appendChild(paragraph);
            hotspotTarget.appendChild(title);
            hotspotTarget.appendChild(image)
        });
    }

    loadHotspotInfo();

    function showHotspot(e) {
        let hoveredSpot = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`)
        gsap.to(hoveredSpot, 1, {autoAlpha:1});
        console.log ("Mouse enter")
    }

    function hideHotspot(e) {
        let hoveredSpot = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`)
        gsap.to(hoveredSpot, 1, {autoAlpha:0});
        console.log ("Mouse left")
    }

    hotspots.forEach(hotspot => {
        hotspot.addEventListener('mouseover', showHotspot)
        hotspot.addEventListener('mouseout', hideHotspot)
    });
})();