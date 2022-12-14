import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inspection',
  templateUrl: './inspection.component.html',
  styleUrls: ['./inspection.component.scss']
})
export class InspectionComponent implements OnInit {
  
  img = "../../../../assets/images/pre-owned-car-guide/inspection.jpg"
  pageheading = "inspecion"
  list1 = "under carriage inspection"
  list1text = "Take the car up on a ramp and with the aid of an electrical lamp on a flexible holder look for defects in the following:"
  list1loop = [
    {
      list1heading: "Chassis",
      list1headingtext: "Hit the cross members or the frame with a hammer. You should hear a ringing metallic sound. Its absence indicates that the car was involved in an accident and welding was done to hide/rectify it."
    },
    {
      list1heading: "suspension",
      list1headingtext: "Check for leakage from the dampers. They should be dry and the bushings should be intact. Also check for any cracks on the suspension springs, inside tyre walls, damper foundation, propeller shaft joints, etc."
    },
    {
      list1heading: "leakage",
      list1headingtext: "Check for any oil leakage from the engine oil sump. Drain some oil from the sump and rub it against your fingers. The presence of any gritty metallic substance points toward the erosion of moving engine parts. Check for leaks and stains"
    }
  ]

  list2 = "external inspection"
  list2loop = [
    {
      list2heading: "sagging",
      list2headingtext: "Visually, scan the car from a distance of 15-20 feet. Observe the stance - does it sag or lean in any direction or does it sit up high and straight?"
    },
    {
      list2heading: "shock absorbers",
      list2headingtext: "Press hard on a corner of the car and release your grip. In case the car keeps rocking up and down, you may need to change the shocks."
    },
    {
      list2heading: "tyres",
      list2headingtext: "If they are not of one brand, then chances are that the car has done more mileage than what is shown in the odometer. If they are worn out unevenly, it could be due to under inflation or poor wheel alignment. It could also indicate that shocks, struts, or a part in the suspension system needs to be replaced. Do not forget to check the condition of the spare tyre."
    },
    {
      list2heading: "doors",
      list2headingtext: "These are one of the main indicators of the actual condition of the car. Look for a close fit and ease of opening and closing. A door that fits unevenly may indicate that the car was involved in a collision."
    },
    {
      list2heading: "windshield",
      list2headingtext: "Check the windshield and the window glass for cracks."
    },
    {
      list2heading: "trunk",
      list2headingtext: "Check the trunk. Is it large enough for your needs? Is there any rust at the bottom of the trunk well? Does it contain a good spare tyre and a jack?"
    },
    {
      list2heading: "body",
      list2headingtext: 'Look for rust spots, particularly at the bottoms of fenders, around lights and bumpers, on splash panels, under doors, in the wheel wells, and under trunk carpeting. Small "blisters" may indicate future rust sites. Check for paint that does not quite match, gritty surfaces, and paint oversprays on chrome - all possible signs of a new paint job, masking body problems. Look for cracks, dents, and loose bumpers - warning signs of a past accident.'
    },
    {
      list2heading: "gaps",
      list2headingtext: "Check all the gaps between the fenders, doors, bonnet and trunk. Every gap should be even along all its length. Try to inspect all the gaps in the same way."
    },
    {
      list2heading: "fenders",
      list2headingtext: "Take a look at the front fender's edge. It may have unpainted black spots. This may indicate that the fender has been changed and repainted (new parts commonly are in black or grey)."
    },
    {
      list2heading: "bonnet",
      list2headingtext: "Check the bonnet’s fastening bolts. In case you notice that the bonnet has been readjusted from its original position, it is sign that the car has had an accident."
    },
    {
      list2heading: "paint",
      list2headingtext: "It is very difficult to paint some replaced or damaged part (fender, door, hood, etc.) in exactly the same colour as the rest of the car. Therefore, take a look at the car from all angles from a distance. You may      notice some tiny things under new paint (a small strand of hair, for example)."
    },
    {
      list2heading: "rust spots",
      list2headingtext: "Check the floor under the carpet, door bottoms, trunk and wheel arches. Take a magnet and try to make it cling to the door bottoms and fenders and other places where you suspect defects or rust spots. If there is      too much filling under the paint, the magnet will not cling."
    },
    {
      list2heading: "tailpipe",
      list2headingtext: "Black, gummy soot in the tailpipe may mean worn-out piston rings or bad valves which may entail expensive overhaul."
    }
  ]
  list3 = "internal inspection"
  list3loop = [
    {
      list3heading: "lights and mechanical parts",
      list3headingtext: "Make sure all headlights, tail lights, brake lights, back-up lights, and direction signals work properly. Test the    radio, heater, air-conditioner, and windshield wipers."
    },
    {
      list3heading: "cabin",
      list3headingtext: 'Check the upholstery for major wear and tear. Do not forget to look under the floor mats and seat covers. Check the steering wheel. When unlocked, with the engine off, it should have no more than two inches of    "play." Check the inside of the door for any rust, especially at the bottom. Examine and fasten the seat belts   and make sure they are comfortable and snug. Make sure the seat is comfortable and that adjusts to your     needs. Open the glove box and spend some time looking at the car’s repair history and owners manual. Check what was done and what was recommended. Look for frequent oil changes and inspections.'
    },
    {
      list3heading: "odometer",
      list3headingtext: "Check the dates of repair against the kilometres you see on the odometer. A car with low mileage, but with a lot of wear on the driver's seat or on the brake and accelerator pedal, may indicate tampering with the odometer. A musty smell inside the vehicle could mean that the car was damaged in a flood or that rain water leaks into the car."
    },
    {
      list3heading: "under the bonnet",
      list3headingtext: "Check the battery connections to see that they are clean. Check the oil level to see that it is full. If you are buying a car with a warranty, you do not even need to look under the hood. If it makes you feel any better,     go  ahead, get out of the car and raise the hood. Look for overspray or for paint where it is not supposed to be."
    },
    {
      list3heading: "cooling system",
      list3headingtext: "Unscrew the radiator cap and peek inside. The coolant level should be almost full and there should be no oil or foreign material floating inside. The coolant should be clear light green, but do not panic if it is a little cloudy - it may just need to be replaced."
    },
    {
      list3heading: "oil pressure",
      list3headingtext: "Try to check oil pressure on the cold engine (at least an hour after the engine was switched off). Start the engine and look at the low oil pressure warning lamp or oil pressure gauge on the instrument panel. The time between the engine start and the oil pressure indication on the instrument panel should be no morethan 1 - 2 seconds. The longer the time, the worse the engine condition."
    },
    {
      list3heading: "oil level and leaks",
      list3headingtext: "If you find that the oil level is 'min.' or less on the dipstick, you can suspect that the engine consumes more oil than what is required. Check the engine thoroughly for oil leaks. The more it leaks, the worse the engine."
    },
    {
      list3heading: "air filter",
      list3headingtext: "Take off the air filter cover and look inside. If you note the presence of heavy dirt (sand, insects, leaves, etc.), then you may suspect that the last owner of the car was not paying proper attention to its maintenance."
    },
    {
      list3heading: "insttrument panel",
      list3headingtext: "All the warning lights such as those indicating low oil pressure, low oil level, overheating, etc., should go off after the engine has been started."
    },
    {
      list3heading: "break and clutch pedal wear",
      list3headingtext: "This indicates how a car has been driven so far. Do not compare it with the odometer reading, because the latter can be manipulated."
    },
    {
      list3heading: "rubber beading",
      list3headingtext: "Check for any cracks in the rubber beading close to the windshield, outside of glass windows, inside trims, along the roof linings, etc."
    },
    {
      list3heading: "door hardboards",
      list3headingtext: "Slide the glass windows up and down to check that they operate properly. Check levers such as glass window winder, door opener and safety lock."
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
