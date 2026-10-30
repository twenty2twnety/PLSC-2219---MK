// ---------------------------------------------------------------------------
// YOUR SITE SETTINGS. This is the only file you need to edit (plus your CSVs).
// Edit it on github.com: open this file, click the pencil icon, change the
// text between the quotation marks, then click "Commit changes".
// ---------------------------------------------------------------------------

window.SITE_CONFIG = {
forecaster_name: "Your Nickname Here",
tagline: "Fundamentals, incumbency and money, averaged with the generic ballot",
method: [
  "Each race starts from the district's partisan lean (PVI), whether an incumbent is running, and how much each candidate has spent relative to the other. The House model is fit on 2018 to 2024 elections; the Senate model on 2012 to 2024.",
  "The national House vote comes from averaging two estimates: a fundamentals model built on presidential approval, gas prices and how strong the president's party was last time, and the generic-ballot polls, corrected for their past lean toward Democrats. Together they put Democrats at about 53.6% of the national vote.",
  "Uncertainty combines one national error shared by every race with a separate error for each race. Seat totals and chances of a majority come from 10,000 simulated elections."
],
  // The name shown at the top of your site. A nickname or made-up forecaster
  // name is fine and recommended. Do not put your real name, email, photo,
  // or anything else that identifies you on this site.
  forecaster_name: "Michael Kluger",

  // One short line under the name (optional).
  tagline: "Fundamentals, incumbency and money, averaged with the generic ballot",

  // A plain-language description of YOUR model, in your own words. Each line in
  // quotes is one paragraph, followed by a comma. Two or three short paragraphs:
  // what your forecast is built from, how you set the national environment,
  // and how you handled uncertainty. Until you fill this in, your site shows a
  // reminder in this spot.
  //
  // For example, the class model could be described like this (describe your
  // own model):
  //   "A fundamentals-only model (no polls). Each race's predicted Democratic share combines the district's partisan lean, incumbency, and a forecast of the national House vote from presidential approval, gas prices, income and the midterm penalty.",
  //   "Uncertainty combines one national error shared by every race with a separate error for each race. Seat totals come from 10,000 simulated elections.",
  method: [
    "Each race starts from the district's partisan lean (PVI), whether an incumbent is running, and how much each candidate has spent relative to the other. The House model is fit on 2018 to 2024 elections; the Senate model on 2012 to 2024.",
  "The national House vote comes from averaging two estimates: a fundamentals model built on presidential approval, gas prices and how strong the president's party was last time, and the generic-ballot polls, corrected for their past lean toward Democrats. Together they put Democrats at about 53.6% of the national vote.",
  "Uncertainty combines one national error shared by every race with a separate error for each race. Seat totals and chances of a majority come from 10,000 simulated elections."
  ],

  // Your data files. Leave these alone unless you renamed your files.
  forecast_file: "forecast.csv",
  sims_file: "seat_sims.csv",

  // Course links. Leave these as they are.
  links: {
    class_forecast: "https://kevinmdeluca.com/forecast/class/",
    tracker: "https://kevinmdeluca.com/forecast/",
    gallery: "https://kevin-deluca-polisci.github.io/plsc2219-forecasts/gallery.html"
  }
};
