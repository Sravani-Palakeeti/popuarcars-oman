import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  para = [
    { text: 'Popular Cars Oman is committed to maintaining the accuracy, security and privacy of personal information in accordance with applicable legislation. Popular Cars Privacy Policy is a statement of principles and guidelines concerning the protection of personal information of our association members new franchised service providers and other individuals.This Privacy Policy has been prepared to affirm commitment to maintaining high standards of confidentiality, to provide information on practices concerning the collection, use and disclosure of your personal information and to comply with the Personal Information Protection Act (PIPA) and other applicable statutes.'},
    { text: 'Popular Cars collects only the information that is necessary for the purposes outlined in this Privacy Policy. We do not sell, share or divulge client information to unrelated third parties. Personal information is kept as accurate, complete and up to date as necessary for the purposes for which it is to be used. Members and individuals are encouraged to provide updates to their personal information as changes occur, to enable us to continue to provide services to them.'}
  ]  

  heading = 'Types of Information we collect : '
  listInfo = [
    { info: 'We may collect information associated with your IP address, such as the time and date of a visit, the originating domain name, the browser type, and the particular pages or products viewed on the Media.'},
    { info: 'Cookies are a standard technology used by us to store small pieces of information on your hard drive by sending a small string of text to your browser. They make you use of our website more pleasing and efficient by "personalizing" our user interface, for example, or identifying which parts of a site you have previously visited. They also enable us to pre-populate, or automatically fill out, forms and schedules, or to assist you in visiting multiple pages within our website during the same session without having to re-enter your password multiple times.'},
    { info: 'Small graphic images or web programming code called web beacons (also known as pixel tags or clear GIF) are included on the pages of our website and in e-mail messages we send you. Web beacons or other similar technologies are used for a number of purposes, such as to count visitors to the website, monitor how you navigate the website or to count how many particular articles or links posted on the website were actually viewed.'},
    { info: 'Certain mobile service providers uniquely identify mobile devices and we may inadvertently capture specific mobile information if you access the website through a mobile device. Our website does not require or use geo-specific information from mobile devices, but we do, however, receive device IP address information that may give a rough location of the device'},
    { info: 'This site is being monitored by one or more third-party monitoring software, and may capture information about your visit that will help us improve the quality of our service.'}
  ]

  para2 = 'By using our website, you agree to this privacy policy. We reserve the right to change, modify or amend this privacy policy at any time. If we modify our privacy policy, we will update the date last modified and such changes will be effective upon posting. If we make material changes to this privacy policy, we will notify you by posting a notice on the website or by sending you a notice to the e-mail address we have on file for you. Any revised privacy policy will only apply prospectively to personal information collected or modified after the effective date of the revised policy.'

  constructor() { }

  ngOnInit(): void {
  }

}
