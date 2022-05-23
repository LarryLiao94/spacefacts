function startTime() {
    const today=new Date();
    let h=today.getHours();
    let m=today.getMinutes();
    let s=today.getSeconds();
    let ampm = "";
    m = checkTime(m);
    s = checkTime(s);

    if (h > 12) {
    	h = h - 12;
    	ampm = " PM";
    } else if (h == 12){
        h = 12;
    	ampm = " AM";
    } else if (h < 12){
        ampm = " AM";
    } else {
        ampm = "PM";
    };
  
  if(h==0) {
    h=12;
  }
    
    document.getElementById('display').innerHTML = h+":"+m+':'+s+ampm;
    let t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function startDate() {
    var d = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    document.getElementById("date").innerHTML = days[d.getDay()]+" | "+[d.getMonth()+1]+"/"+d.getDate()+"/"+d.getFullYear();
  }
  

const spaceFacts = [
  "SPACE IS COMPLETELY SILENT. There is no atmosphere in space, which means that sound has no medium or way to travel to be heard.",
  "A FULL NASA SPACE SUIT COSTS $12,000,000. While the entire suit costs a cool $12m, 70% of that cost is for the backpack and control module. However, the space suits that NASA uses were built in 1974.  If these were priced by todays pricing, they would cost an estimated 150 million dollars!",
  "THE SUN’S MASS TAKES UP 99.86% OF THE SOLAR SYSTEM. The Sun accounts for 99.86% of the mass in our solar system with a mass of around 330,000 times that of Earth. Did you know that the Sun is made up of mostly hydrogen (three quarters worth) with the rest of its mass attributed to helium.  If the Sun had a voice would it be high and squeaky from all that helium?",
  "ONE MILLION EARTHS CAN FIT INSIDE THE SUN",
  "THERE ARE MORE TREES ON EARTH THAN STARS IN THE MILKY WAY. There are about three trillion trees on Planet Earth, and between 100-400 billion stars, approximately, in the galaxy.",
  "THE SUNSET ON MARS APPEARS BLUE. Just as colors are made more dramatic in sunsets on Earth, sunsets on Mars, according to NASA,  would appear bluish to human observers watching from the red planet. Fine dust makes the blue near the Suns part of the sky much more visibilke, while normal daylight makes the Red Planets familiar rusty dust color the most perceptible to the human eye.",
  "THERE ARE MORE STARS IN THE UNIVERSE THAN GRAINS OF SANDS ON EARTH",
  "ONE DAY ON VENUS IS LONGER THAN ONE YEAR. Venus has a slow axis rotation which takes 243 Earth days to complete its day. The orbit of Venus around the Sun is 225 Earth days, making a year on Venus 18 days less than a day on Venus.",
  "Wait a minute... those arent mountains..... theyre waves.",
  "THERE IS A PLANET MADE OF DIAMONDS",
  'Mercury & Venus are the only 2 planets in our solar system that have no moons.',
  'If a star passes too close to a black hole, it can be torn apart.',
  'The hottest planet in our solar system is Venus.',
  'Our solar system is 4.57 billion years old.',
  'Enceladus, one of Saturn’s smaller moons, reflects 90% of the Sun’s light.',
  'There are 79 known moons orbiting Jupiter.',
  'The Martian day is 24 hours 39 minutes and 35 seconds long.',
  'NASA’s Crater Observation and Sensing Satellite (LCROSS) found evidence of water on the Earth’s Moon.',
  'The Sun makes a full rotation once every 25 – 35 days.',
  'Pluto is smaller than the United States.',
  'Uranus’ blue glow is due to the gases in its atmosphere.',
  'Any free-moving liquid in outer space will form itself into a sphere.',
  'space is mad c00l brahh like we just out here'
];

function newQuote() {
  const randomNumber = Math.floor(Math.random() * spaceFacts.length);
  document.getElementById("quoteDisplay").innerHTML = spaceFacts[randomNumber];
}

document.getElementById('quoteDisplay').innerHTML = spaceFacts[randomNumber]

