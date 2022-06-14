import {nanoid} from "nanoid"

const Data = [
    {
        id: nanoid(),
        topic: "Telescopes",
        brief_description1: "A space telescope or space observatory is a telescope in outer space       used to observe astronomical objects.",
        brief_description2: "Galileo saw the craters of the moon, the rings of Saturn, the moons of     Jupiter, and described the Milky Way.",
        intro_img1:     "https://img.freepik.com/free-vector/telescope-icon-telescope-planet-stars-earth-space-icon-white-isolated_138676-552.jpg?w=740",
        intro_img2: "https://i.pinimg.com/564x/d6/d0/02/d6d0029a91c6f78d91267b1adddbedc0.jpg",
        brief_description1_ref: "wikipedia.com",
        brief_description2_ref: "coolkidfacts.com",
        intro_img1_ref: "freepik.com",
        intro_img2_ref: "brainpop.com",
        types: [
            {
                id: nanoid(),
                name: "James Webb Space Telescope",
                img: "https://i.pinimg.com/564x/69/f2/da/69f2da0b3464b73b475df35e35a5242e.jpg",
                description: "NASA's largest and most powerful space science telescope",
                img_ref: "quotidianomotori.com",
                description_ref: "webb.nasa.gov",
                hot_news: true,
                card: [
                    {
                        id: nanoid(),
                        card_img:              "https://www.nasa.gov/sites/default/files/thumbnails/image/47690335362_a9b23dc6c8_o.jpeg",
                        headline: "NASA’s Webb Telescope Will Have the Coolest Camera in Space",
                        text: 
                            `NASA’s James Webb Space Telescope is the largest space observatory in history, and it has an equally gargantuan task: to collect infrared light from the distant corners of the cosmos, enabling scientists to probe the structures and origins of our universe and our place in it.
                        
                            Many cosmic objects – including stars and planets, as well as the gas and dust from where they form – emit infrared light, sometimes called heat radiation. But so do most other warm objects, like toasters, humans, and electronics. That means Webb’s four infrared instruments can detect their own infrared glow. To reduce those emissions, the instruments have to be really cold – about 40 kelvins, or minus 388 degrees Fahrenheit (minus 233 degrees Celsius). But to operate properly,the detectors inside the mid-infrared instrument, or MIRI, will have to get even colder: less than 7 kelvins (minus 448 degrees Fahrenheit, or minus 266 degrees Celsius).`,
                        latest_news: false,
                        card_ref: "webb.nasa.gov",
                        card_img_ref:"webb.nasa.gov"
                    },
                    {
                        id: nanoid(),
                        card_img: "https://i.pinimg.com/564x/65/14/64/651464917d2c2305d0b6987feb8c27a2.jpg",
                        headline: "NASA's Webb Telescope Launches to See First Galaxies, Distant    Worlds",
                        text: 
                            `NASA’s James Webb Space Telescope launched at 7:20 a.m. EST Saturday on an Ariane 5 rocket from Europe’s Spaceport in French Guiana, South America.
                        
                            A joint effort with ESA (European Space Agency) and the Canadian Space Agency, the Webb observatory is NASA’s revolutionary flagship mission to seek the light from the first galaxies in the early universe and to explore our own solar system, as well as planets orbiting other stars, called exoplanets.
                        
                            “The James Webb Space Telescope represents the ambition that NASA and our partners maintain to propel us forward into the future,” said NASA Administrator Bill Nelson. “The promise of Webb is not what we know we will discover; it’s what we don’t yet understand or can’t yet fathom about our universe. I can’t wait to see what it uncovers!”

                            Ground teams began receiving telemetry data from Webb about five minutes after launch. The Arianespace Ariane 5 rocket performed as expected, separating from the observatory 27 minutes into the flight. The observatory was released at an altitude of approximately 870 miles (1,400 kilometers). Approximately 30 minutes after launch, Webb unfolded its solar array, and mission managers confirmed that the solar array was providing power to the observatory. After solar array deployment, mission operators will establish a communications link with the observatory via the Malindi ground station in Kenya, and ground control at the Space Telescope Science Institute in Baltimore will send the first commands to the spacecraft.`,
                        latest_news: false,
                        card_ref: "webb.nasa.gov",
                        card_img_ref:"dailymail.co.uk"
                    },
                    {
                        id: nanoid(),
                        card_img: "https://i.pinimg.com/564x/b8/6e/41/b86e419c158b677a85b8415beeb0f5fd.jpg",
                        headline: "First Images From NASA’s Webb Space Telescope Coming Soon",
                        text: 
                            `NASA’s James Webb Space Telescope, a partnership with ESA (European Space Agency) and the Canadian Space Agency (CSA), will release its first full-color images and spectroscopic data on July 12, 2022. As the largest and most complex observatory ever launched into space, Webb has been going through a six-month period of preparation before it can begin science work, calibrating its instruments to its space environment and aligning its mirrors. This careful process, not to mention years of new technology development and mission planning, has built up to the first images and data: a demonstration of Webb at its full power, ready to begin its science mission and unfold the infrared universe.`,
                        latest_news: true,
                        card_ref: "webb.nasa.gov",
                        card_img_ref: "newscientist.com"
                    }
                ]
            },
            {
                id: nanoid(),
                name: "Hubble Space Telescope",
                img: "https://i.pinimg.com/564x/39/bc/29/39bc29411783a69f39e6fd22e4d36a42.jpg",
                description: "The farthest that Hubble has seen so far is about 10-15 billion   light-years away.",
                img_ref: "popularmechanics.com",
                description_ref: "coolcosmos.ipac.caltech.edu",
                hot_news: false,
                card: [
                    {
                        id: nanoid(),
                        card_img: "https://stsci-opo.org/STScI-01G050B7E3SVFKJ4FNVKJRTWMY.png",
                        headline: 
                        "HUBBLE SHEDS LIGHT ON ORIGINS OF SUPERMASSIVE BLACK HOLES",
                        text: 
                            `The universe is so saturated with galaxies that even the weirdest things can go unnoticed for years after Hubble Space Telescope "deep-exposure" observations are taken. In sort of an intergalactic Where's Waldo, an international team of astronomers uncovered in Hubble archival data a mysterious red dot nearly in the middle of the Great Observatories Origins Deep Survey-North (GOODS-North). As innocuous as it looks, it could be a rare missing link between some of the very earliest galaxies and the birth of supermassive black holes. The object, referred to as GNz7q, existed when the universe was just a toddler, only 750 million years after the big bang. The mixture of radiation from the object cannot be attributed to star formation alone. The best explanation is that it is a growing black hole shrouded in dust. Given time, the black hole will emerge from its dusty cocoon as a brilliant quasar, an intense beacon of light at the heart of an early galaxy. The pioneering Hubble telescope has provided a unique target for NASA's James Webb Space Telescope to use its spectroscopic instruments to study objects like GNz7q in unprecedented detail.`,
                        latest_news: false,
                        card_ref: "hubblesite.org",
                        cad_img_ref: "hubblesite.org"
                    },
                    {
                        id: nanoid(),
                        card_img: "https://stsci-opo.org/STScI-01G2QPZAZGX3NY83EM9GJHT9GT.png",
                        headline: "A DAZZLING HUBBLE COLLECTION OF SUPERNOVA HOST GALAXIES",
                        text: 
                            `This collection of 36 images from NASA's Hubble Space Telescope features galaxies that are all hosts to both Cepheid variables and supernovae. These two celestial phenomena are both crucial tools used by astronomers to determine astronomical distance, and have been used to refine our measurement of the Hubble constant, the expansion rate of the universe.`,
                        latest_news: false,
                        card_ref: "hubblesite.org",
                        cad_img_ref: "hubblesite.org"
                    },
                    {
                        id: nanoid(),
                        card_img: "https://stsci-opo.org/STScI-01FX6169HWYWXH80JZQK3J8SDG.png",
                        headline: "HUBBLE'S ADVANCED CAMERA FOR SURVEYS CELEBRATES 20 YEARS OF DISCOVERY",
                        text: 
                            `When astronauts installed the Advanced Camera for Surveys (ACS) on March 7, 2002, the Hubble Space Telescope was already famous for taking deep images of the distant universe. ACS went even deeper, pushing humanity's view of the universe back to within 435 million years of the Big Bang and capturing images of the earliest objects in the cosmos. It also helps map the distribution of dark matter, searches for massive planets and studies the evolution of clusters of galaxies. The longevity and consistency of ACS is critical for monitoring cosmic phenomena over time. In its 20 years aboard Hubble, ACS has taken over 125,000 pictures and spawned numerous discoveries.`,
                        latest_news: false,
                        card_ref: "hubblesite.org",
                        cad_img_ref: "hubblesite.org"
                    }
                ]
            },
            {
                id: nanoid(),
                name: "Event Horizon Telescope",
                img: "https://i.pinimg.com/564x/4d/3a/fc/4d3afc7a27d64361cfeb9a2001bd3668.jpg",
                description: "Making the first-ever image of a black hole in the galaxy M87",
                img_ref: "",
                description_ref: "eventhorizontelescope.org",
                hot_news: false,
                card: [
                    {
                        id: nanoid(),
                        card_img: "https://i.pinimg.com/564x/24/6f/4d/246f4d5279c54251d83ac582357c0326.jpg",
                        headline: "What is Event Horizon Telescope?",
                        text: 
                            `A long standing goal in astrophysics is to directly observe the immediate environment of a black hole with angular resolution comparable to the event horizon.  Such observations could lead to images of strong gravity effects that are expected near a black hole, and to the direct detection of dynamics near the black hole as matter orbits at near light speeds.  This capability would open a new window on the study of general relativity in the strong field regime, accretion and outflow processes at the edge of a black hole, the existence of event horizons, and fundamental black hole physics.

                            The EHT is an international collaboration that has formed to continue the steady long-term progress on improving the capability of Very Long Baseline Interferometry (VLBI) at short wavelengths in pursuit of this goal.  This technique of linking radio dishes across the globe to create an Earth-sized interferometer, has been used to measure the size of the emission regions of the two supermassive black holes with the largest apparent event horizons: SgrA* at the center of the Milky Way and M87 in the center of the Virgo A galaxy.  In both cases, the sizes match that of the predicted silhouette caused by the extreme lensing of light by the black hole.  Addition of key millimeter and submillimeter wavelength facilities at high altitude sites has now opened the possibility of imaging such features and sensing the dynamic evolution of black hole accretion.  The EHT project includes theoretical and simulation studies that are framing questions rooted at the black hole boundary that may soon be answered through observations.

                            By linking together existing telescopes using novel systems, the EHT leverages considerable global investment to create a fundamentally new instrument with angular resolving power that is the highest possible from the surface of the Earth.  Over the coming years, the international EHT team will mount observing campaigns of increasing resolving power and sensitivity, aiming to bring black holes into focus.`,
                        latest_news: false,
                        card_ref: "eventhorizontelescope.org",
                        cad_img_ref: "eventhorizontelescope.org"
                    },
                    {
                        id: nanoid(),
                        card_img: "https://static.projects.iq.harvard.edu/files/styles/os_files_xxlarge/public/eht/files/avgimage_afmhot_us_edit.png?m=1652355847&itok=cMbEDmsL",
                        headline: "Astronomers Reveal First Image of the Black Hole at the Heart of Our Galaxy",
                        text: 
                            `Astronomers have unveiled the first image of the supermassive black hole at the centre of our own Milky Way galaxy. This result provides overwhelming evidence that the object is indeed a black hole and yields valuable clues about the workings of such giants, which are thought to reside at the centre of most galaxies. The image was produced by a global research team called the Event Horizon Telescope (EHT) Collaboration, using observations from a worldwide network of radio telescopes.`,
                        latest_news: false,
                        card_ref: "eventhorizontelescope.org",
                        cad_img_ref: "eventhorizontelescope.org"
                    },
                    {
                        id: nanoid(),
                        card_img: "https://static.projects.iq.harvard.edu/files/styles/os_files_xlarge/public/eht/files/20190410-78m-800x466.png?m=1554877319&itok=p3yfzMuz",
                        headline: "Press Release (April 10, 2019): Astronomers Capture First Image of a Black Hole",
                        text: 
                            `Scientists have obtained the first image of a black hole, using Event Horizon Telescope observations of the center of the galaxy M87. The image shows a bright ring formed as light bends in the intense gravity around a black hole that is 6.5 billion times more massive than the Sun. This long-sought image provides the strongest evidence to date for the existence of supermassive black holes and opens a new window onto the study of black holes, their event horizons, and gravity. Credit: Event Horizon Telescope Collaboration`,
                        latest_news: false,
                        card_ref: "eventhorizontelescope.org",
                        cad_img_ref: "eventhorizontelescope.org"
                    }
                ]
            }
        ]
    },
    {
        id: nanoid(),
        topic: "Rockets",
        brief_description1: "fireworks, missiles and other weaponry, ejection seats, launch vehicles for artificial satellites, human spaceflight, and space exploration.",
        brief_description2: "Rockets were first used as weapons.",
        intro_img1: "https://i.pinimg.com/564x/26/75/35/267535ae73839a28c395fe93755d8198.jpg",
        intro_img2: "https://img.freepik.com/free-vector/flying-rocket-background_1270-85.jpg?t=st=1654698993~exp=1654699593~hmac=c5557c1667f0c712f23f82e42382ca159a303a53963b398c58ab3a370dc7d40a&w=740",
        brief_description1_ref: "wikipedia.org",
        brief_description2_ref: "facts.net",
        intro_img1_ref: "freepik.com",
        intro_img2_ref: "creativemarket.com",      
        types: [
            {
                id: nanoid(),
                name: "FALCON 9",
                img: "https://i.pinimg.com/564x/e7/41/64/e74164eedccda144bf544d1085a302d7.jpg",
                description: "FIRST ORBITAL CLASS ROCKET CAPABLE OF REFLIGHT",
                img_ref: "inverse.com",
                description_ref: "spacex.com",
                hot_news: false,
                card: [
                    {
                        id: nanoid(),
                        card_img: "https://i.pinimg.com/564x/f2/e2/c2/f2e2c20aa9307301b7a96daea28b9192.jpg",
                        headline: "Speciality of Falcon 9",
                        text: 
                            `Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of people and payloads into Earth orbit and beyond. Falcon 9 is the world’s first orbital class reusable rocket. Reusability allows SpaceX to refly the most expensive parts of the rocket, which in turn drives down the cost of space access`,
                        latest_news: false,
                        card_ref: "spacex.com",
                        card_img_ref: "teslafly.com"
                    },
                    {
                        id: nanoid(),
                        card_img: "https://i.pinimg.com/564x/b0/2a/d6/b02ad672060e0e3d541b2c3f85e62fcb.jpg",
                        headline: "Stages of Falcon 9",
                        text: 
                            `Falcon 9’s first stage incorporates nine Merlin engines and aluminum-lithium alloy tanks containing liquid oxygen and rocket-grade kerosene (RP-1) propellant.

                            Falcon 9 generates more than 1.7 million pounds of thrust at sea level. 
                            
                            The second stage, powered by a single Merlin Vacuum Engine, delivers Falcon 9’s payload to the desired orbit. The second stage engine ignites a few seconds after stage separation, and can be restarted multiple times to place multiple payloads into different orbits.
                            
                            The interstage is a composite structure that connects the first and second stages, and houses the pneumatic pushers that allow the first and second stage to separate during flight.
                            
                            Falcon 9 is equipped with four hypersonic grid fins positioned at the base of the interstage. They orient the rocket during reentry by moving the center of pressure.`,
                        latest_news: false,
                        card_ref: "spacex.com",
                        card_img_ref: "https://www.pinterest.ca/redbubble/_created/"
                    },
                    {
                        id: nanoid(),
                        card_img: "https://www.sketchappsources.com/resources/source-image/spacex-nasa-demo-2-launch.png",
                        headline: "Payload",
                        text: 
                            `Made of a carbon composite material, the fairing protects satellites on their way to orbit. The fairing is jettisoned approximately 3 minutes into flight, and SpaceX continues to recover fairings for reuse on future missions.
                            
                            Dragon is capable of carrying up to 7 people and/or cargo in the spacecraft’s pressurized section. In addition, Dragon can carry cargo in the spacecraft’s unpressurized trunk, which can also accommodate secondary payloads.`,
                        latest_news: false,
                        card_ref: "spacex.com",
                        card_img_ref: "https://www.sketchappsources.com/"
                    }
                ]
            },
            {
                id: nanoid(),
                name: "Starship",
                img: "https://i.pinimg.com/564x/55/67/40/5567403c7cfebd1e2d558f0dc19ee5b1.jpg",
                description: "The most powerful, and reusable multipurpose rocket",
                img_ref: "humanmars.net",
                description_ref: "",
                hot_news: true,
                card: [
                    {
                        id: nanoid(),
                        card_img: "https://i.pinimg.com/564x/03/db/2a/03db2a80fb7b537f8dcb329c6f95c2ab.jpg",
                        headline: "Overview",
                        text: 
                            `SpaceX’s Starship spacecraft and Super Heavy rocket (collectively referred to as Starship) represent a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars and beyond. Starship will be the world’s most powerful launch vehicle ever developed, with the ability to carry in excess of 100 metric tonnes to Earth orbit.`,
                        latest_news: true,
                        card_ref: "spacex.com",
                        card_img_ref: "9gag.com"
                    },
                    {
                        id: nanoid(),
                        card_img: "https://i.pinimg.com/564x/b5/28/8e/b5288ea529b7baf5829b307b59aa0493.jpg",
                        headline: "STARSHIP SN15",
                        text: 
                            `On Wednesday, May 5, Starship serial number 15 (SN15) successfully completed SpaceX’s fifth high-altitude flight test of a Starship prototype from Starbase in Texas.

                            Similar to previous high-altitude flight tests of Starship, SN15 was powered through ascent by three Raptor engines, each shutting down in sequence prior to the vehicle reaching apogee – approximately 10 km in altitude. SN15 performed a propellant transition to the internal header tanks, which hold landing propellant, before reorienting itself for reentry and a controlled aerodynamic descent.
    
                            The Starship prototype descended under active aerodynamic control, accomplished by independent movement of two forward and two aft flaps on the vehicle. All four flaps were actuated by an onboard flight computer to control Starship’s attitude during flight and enabled precise landing at the intended location. SN15’s Raptor engines reignited as the vehicle performed the landing flip maneuver immediately before touching down for a nominal landing on the pad.

                            These test flights of Starship are all about improving our understanding and development of a fully reusable transportation system designed to carry both crew and cargo on long-duration interplanetary flights, and help humanity return to the Moon, and travel to Mars and beyond.

                            Congratulations to the entire SpaceX team on SN15’s successful flight and landing!`,
                        latest_news: false,
                        card_ref: "spacex.com",
                        card_img_ref: "interestingengineering.com"
                    },
                    {
                        id: nanoid(),
                        card_img: "https://i.pinimg.com/564x/33/a7/07/33a7074956ebf0846f3dacc427bc323d.jpg",
                        headline: "Starship/ Super Heavy/ Payload",
                        text: 
                            `Starship is the fully reusable spacecraft and second stage of the Starship system. It offers an integrated payload section and is capable of carrying passengers and cargo to Earth orbit, planetary destinations, and between destinations on Earth.
                            
                            The first stage, or booster, of our next-generation launch system has a gross liftoff mass of over 3 million kg and uses sub-cooled liquid methane and liquid oxygen (CH4/LOX) propellants. The booster will return to land at the launch site on its 6 legs.
                            
                            The Starship payload fairing is 9 m in diameter and 18 m high, resulting in the largest usable payload volume of any current or in development launcher. This payload volume can be configured for both crew and cargo.`,
                        latest_news: false,
                        card_ref: "spaex.com",
                        card_img_ref: "etsy.com"
                    }
                ]
            },
            {
                id: nanoid(),
                name: "PSLV",
                img: "https://i.pinimg.com/564x/cb/2a/76/cb2a7640c7c88c74ec1ace6c943ba2e1.jpg",
                description: "The one that carried 104 satellites and the primary payload safely in to orbit",
                img_ref: "blogs.wsj.com",
                description_ref: "",
                hot_news: false,
                card: [
                    {
                        id: nanoid(),
                        card_img: "https://i.pinimg.com/564x/6c/2f/60/6c2f60523d6456449c4d68b4393c9e13.jpg",
                        headline: "About",
                        text: 
                            `Polar Satellite Launch Vehicle (PSLV) is the third generation launch vehicle of India. It is the first Indian launch vehicle to be equipped with liquid stages. After its first successful launch in October 1994, PSLV emerged as the reliable and versatile workhorse launch vehicle of India with 39 consecutively successful missions by June 2017. During 1994-2017 period, the vehicle has launched 48 Indian satellites and 209 satellites for customers from abroad.

                            Besides, the vehicle successfully launched two spacecraft – Chandrayaan-1 in 2008 and Mars Orbiter Spacecraft in 2013 – that later traveled to Moon and Mars respectively`,
                        latest_news: false,
                        card_ref: "www.isro.gov.in",
                        card_img_ref: "siliconeer.com"
                    },
                    {
                        id: nanoid(),
                        card_img: "https://i.pinimg.com/564x/54/7a/9a/547a9a9dc89952b7087601362eaa0040.jpg",
                        headline: "Technical Specifications",
                        text: 
                            `PSLV earned its title 'the Workhorse of ISRO' through consistently delivering various satellites to Low Earth Orbits, particularly the IRS series of satellites. It can take up to 1,750 kg of payload to Sun-Synchronous Polar Orbits of 600 km altitude.
                            
                            Due to its unmatched reliability, PSLV has also been used to launch various satellites into Geosynchronous and Geostationary orbits, like satellites from the IRNSS constellation.
                            
                            The PS4 is the uppermost stage of PSLV, comprising of two Earth storable liquid engines.
                            
                            The third stage of PSLV is a solid rocket motor that provides the upper stages high thrust after the atmospheric phase of the launch.
                            
                            PSLV uses an Earth storable liquid rocket engine for its second stage, know as the Vikas engine, developed by Liquid Propulsion Systems Centre.
                            
                            PSLV uses the S139 solid rocket motor that is augmented by 6 solid strap-on boosters.
                            
                            PSLV uses 6 solid rocket strap-on motors to augment the thrust provided by the first stage in its PSLV-G and PSLV-XL variants. However, strap-ons are not used in the core alone version (PSLV-CA).`,
                        latest_news: false,
                        card_ref: "www.isro.gov.in",
                        card_img_ref: "https://www.pinterest.ca/pin/97953360617015307/"
                    },
                    {
                        id: nanoid(),
                        card_img: "https://www.isro.gov.in/sites/default/files/launchers/pslv/pslv.png",
                        headline: "Vehicle Specification",
                        text: 
                            `Height: 44 m
                            Diameter: 2.8 m
                            Number of Stages: 4
                            Lift Off Mass: 320 tonnes (XL)
                            Variants: 3 (PSLV-G, PSLV - CA, PSLV - XL)
                            First Flight: September 20, 1993`,
                        latest_news: false,
                        card_ref: "www.isro.gov.in",
                        card_img_ref: "www.isro.gov.in"
                    }
                ]
            }
        ]
    },
    // {
    //     id: nanoid(),
    //     topic: "Planets",
    //     brief_description1: "A planet is a large astronomical body that is neither a star nor a stellar remnant.",
    //     brief_description2: "The Earth is the only planet in our solar system not to be named after a Greek or Roman deity.",
    //     intro_img1: "https://i.pinimg.com/564x/ba/01/8a/ba018a210eb5c12ca50e0c64ac45edd5.jpg",
    //     intro_img2: "https://i.pinimg.com/564x/40/92/84/4092846f4955f6bd3f65ae7c62e388e4.jpg",
    //     brief_description1_ref: "wikipedia.org",
    //     brief_description2_ref: "space-facts.com",
    //     intro_img1_ref: "9gag.com",
    //     intro_img2_ref: "Mungfali.com",
    //     types: [
    //         {
    //             id: nanoid(),
    //             name: "",
    //             img: "",
    //             description: "",
    //             img_ref: "",
    //             description_ref: "",
    //             hot_news: false,
    //             card: [
    //                 {
    //                     id: nanoid(),
    //                     card_img: "",
    //                     headline: "",
    //                     text: ``,
    //                     latest_news: false,
    //                     card_ref: "",
    //                     cad_img_ref: ""
    //                 },
    //                 {
    //                     id: nanoid(),
    //                     card_img: "",
    //                     headline: "",
    //                     text: ``,
    //                     latest_news: false,
    //                     card_ref: "",
    //                     cad_img_ref: ""
    //                 },
    //                 {
    //                     id: nanoid(),
    //                     card_img: "",
    //                     headline: "",
    //                     text: ``,
    //                     latest_news: false,
    //                     card_ref: "",
    //                     cad_img_ref: ""
    //                 }
    //             ]
    //         },
    //         {
    //             id: nanoid(),
    //             name: "",
    //             img: "",
    //             description: "",
    //             img_ref: "",
    //             description_ref: "",
    //             hot_news: false,
    //             card: [
    //                 {
    //                     id: nanoid(),
    //                     card_img: "",
    //                     headline: "",
    //                     text: ``,
    //                     latest_news: false,
    //                     card_ref: "",
    //                     cad_img_ref: ""
    //                 },
    //                 {
    //                     id: nanoid(),
    //                     card_img: "",
    //                     headline: "",
    //                     text: ``,
    //                     latest_news: false,
    //                     card_ref: "",
    //                     cad_img_ref: ""
    //                 },
    //                 {
    //                     id: nanoid(),
    //                     card_img: "",
    //                     headline: "",
    //                     text: ``,
    //                     latest_news: false,
    //                     card_ref: "",
    //                     cad_img_ref: ""
    //                 }
    //             ]
    //         },
    //         {
    //             id: nanoid(),
    //             name: "",
    //             img: "",
    //             description: "",
    //             img_ref: "",
    //             description_ref: "",
    //             hot_news: false,
    //             card: [
    //                 {
    //                     id: nanoid(),
    //                     card_img: "",
    //                     headline: "",
    //                     text: ``,
    //                     latest_news: false,
    //                     card_ref: "",
    //                     cad_img_ref: ""
    //                 },
    //                 {
    //                     id: nanoid(),
    //                     card_img: "",
    //                     headline: "",
    //                     text: ``,
    //                     latest_news: false,
    //                     card_ref: "",
    //                     cad_img_ref: ""
    //                 },
    //                 {
    //                     id: nanoid(),
    //                     card_img: "",
    //                     headline: "",
    //                     text: ``,
    //                     latest_news: false,
    //                     card_ref: "",
    //                     cad_img_ref: ""
    //                 }
    //             ]
    //         },
    //     ]
    // },
    // {
    //     id: nanoid(),
    //     topic: "Agencies",
    //     brief_description1: "",
    //     brief_description2: "",
    //     intro_img1: ,
    //     intro_img2: ,
    //     types: [
    //         {id: nanoid()},
    //         {id: nanoid()},
    //         {id: nanoid()}
    //     ]
    // },
    // {
    //     id: nanoid(),
    //     topic: "Missions",
    //     brief_description1: "",
    //     brief_description2: "",
    //     intro_img1: ,
    //     intro_img2: ,
    //     types: [
    //         {id: nanoid()},
    //         {id: nanoid()},
    //         {id: nanoid()}
    //     ]
    // },
    // {
    //     id: nanoid(),
    //     topic: "Future",
    //     brief_description1: "",
    //     brief_description2: "",
    //     intro_img1: ,
    //     intro_img2: ,
    //     types: [
    //         {id: nanoid()},
    //         {id: nanoid()},
    //         {id: nanoid()}
    //     ]
    // }
]

export default Data


/* 
        {
        id: nanoid(),
        topic: "Planets",
        brief_description1: "",
        brief_description2: "",
        intro_img1: "",
        intro_img2: "",
        brief_description1_ref: "",
        brief_description2_ref: "",
        intro_img1_ref: "",
        intro_img2_ref: "",
        types: [
            {
                id: nanoid(),
                name: "",
                img: "",
                description: "",
                img_ref: "",
                description_ref: "",
                hot_news: false,
                card: [
                    {
                        id: nanoid(),
                        card_img: "",
                        headline: "",
                        text: ``,
                        latest_news: false,
                        card_ref: "",
                        cad_img_ref: ""
                    },
                    {
                        id: nanoid(),
                        card_img: "",
                        headline: "",
                        text: ``,
                        latest_news: false,
                        card_ref: "",
                        cad_img_ref: ""
                    },
                    {
                        id: nanoid(),
                        card_img: "",
                        headline: "",
                        text: ``,
                        latest_news: false,
                        card_ref: "",
                        cad_img_ref: ""
                    }
                ]
            },
            {
                id: nanoid(),
                name: "",
                img: "",
                description: "",
                img_ref: "",
                description_ref: "",
                hot_news: false,
                card: [
                    {
                        id: nanoid(),
                        card_img: "",
                        headline: "",
                        text: ``,
                        latest_news: false,
                        card_ref: "",
                        cad_img_ref: ""
                    },
                    {
                        id: nanoid(),
                        card_img: "",
                        headline: "",
                        text: ``,
                        latest_news: false,
                        card_ref: "",
                        cad_img_ref: ""
                    },
                    {
                        id: nanoid(),
                        card_img: "",
                        headline: "",
                        text: ``,
                        latest_news: false,
                        card_ref: "",
                        cad_img_ref: ""
                    }
                ]
            },
            {
                id: nanoid(),
                name: "",
                img: "",
                description: "",
                img_ref: "",
                description_ref: "",
                hot_news: false,
                card: [
                    {
                        id: nanoid(),
                        card_img: "",
                        headline: "",
                        text: ``,
                        latest_news: false,
                        card_ref: "",
                        cad_img_ref: ""
                    },
                    {
                        id: nanoid(),
                        card_img: "",
                        headline: "",
                        text: ``,
                        latest_news: false,
                        card_ref: "",
                        cad_img_ref: ""
                    },
                    {
                        id: nanoid(),
                        card_img: "",
                        headline: "",
                        text: ``,
                        latest_news: false,
                        card_ref: "",
                        cad_img_ref: ""
                    }
                ]
            },
        ]
    }
*/