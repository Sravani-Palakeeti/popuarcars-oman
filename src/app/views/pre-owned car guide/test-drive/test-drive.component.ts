import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-drive',
  templateUrl: './test-drive.component.html',
  styleUrls: ['./test-drive.component.scss']
})
export class TestDriveComponent implements OnInit {

  img = "../../../../assets/images/pre-owned-car-guide/Testdrive.jpg"
  pageheading = "test drive"
  heading = [
    {
      heading:"engine",
      headingtext:"There should not be any extreme noises, knocking and rattling during acceleration or idling. If you see steam in the exhaust after the engine has achieved normal operating temperature, it indicates some cooling system defect - blown-off head gasket, for instance. (Note, if the engine is cold or has just started, steam or water pouring out from the exhaust pipe is okay). In several of the latest cars, there is a sign on the instrument panel indicating any failure inside the engine."
    },
    {
      heading:"smoke",
      headingtext:"Start the engine. Let it idle for 3-5 mins. Then press halfway down the accelerator pedal for 2-3 secs. and tell your friend to check the smoke from the exhaust pipe."
    },
    {
      headingtext:"Strong black smoke means the engine is flooded with petrol because of a fuel system defect or that the spark plugs may not be working."
    },
    {
      headingtext:"Blue or white-blue smoke means burning of oil because of internal engine defects (like broken pistons or piston rings)."
    },
    {
      headingtext:"White smoke (steam) is a result of the coolant penetrating into the cylinders. It could also mean some gasket defect."
    },
    {
      heading:"noise",
      headingtext:"Once the car has warmed up, listen for engine noise as you drive; unusual sounds may be the signs of major trouble. Drive over rough road surfaces, watch for unusual vibrations, noises or odours. Make several stops and starts, at varying, but safe, rates of speed on a clear, level road surface."
    },
    {
      heading:"suspension",
      headingtext:"Drive carefully, close all the windows, switch off the radio, and listen for any noise. If the car is a front-wheel-drive model, pay more attention to checking front suspension. If there is any knocking noise, the suspension has some faults."
    },
    {
      heading:"frame",
      headingtext:"You become a bystander and allow the seller to drive the car on a flat, muddy terrain. The tyre marks on the front wheels should match those on the rear ones. If they don’t, then the chassis or the frame has been damaged due to an accident."
    },
    {
      heading:"one-road performance",
      headingtext:"The car should accelerate smoothly and should brake without grabbing, vibrating, or pulling to one side. When you step firmly on the brake pedal, it should feel firm, not spongy. Try turning at various speeds. Too much sway or stiffness can mean bad shocks and/or front--rear problems. Turn the wheel all the way from one side to the other; power steering should feel smooth, with little or no squealing. In case of worn-out wheel bearings, you can hear a humming sound which betrays this defect. Also, the noise of the distorted steering bushings will cause excessive steering column vibration."
    },
    {
      heading:"instrument panel",
      headingtext:"Sit inside the vehicle for a minute while it warms up. Now is a good time to try the horn, the signals, the lights, and other electrical items."
    },
    {
      heading:"accessories",
      headingtext:"Play the radio if you want to check out the sound system. You may want to take your favorite tape or CD when you hunt for cars. Try the air-conditioner while idling and during high speeds. You might want to turn it off before going for a test drive to see how the car performs without it. One can check the pick-up of the car with and without A/C operation."
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
