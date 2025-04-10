
# Reikai no Kamigami
This is a continuation of pp1 with new functionality.

Reikai no Kamigami is your go-to platform for all updates and information related to our community DAO (Decentralized Autonomous Organization). This site serves to inform both members and non-members about the latest developments and opportunities within our DAO.

What You Can Find Here:
- All the details about our DAO, including its mission, initiatives, and upcoming projects.
- Team and Membership, Learn about the dedicated team behind Reikai no Kamigami and explore membership options that provide exclusive benefits.
- Contact and Social Media, easily connect with us through our social media channels and find answers to your membership queries.

![am i responsive checker](/documentation/reikai-lore-sc.jpeg)

## Design

wireframes was created for laptop and tablet use, tablet prioritising landscape orientation as seen below. wireframes differentiate depending on when the book is open to allow users on tablet to still interact with the buttons.
###Laptop wireframe
![Wire frame - laptop](/documentation/book-cover-wireframe.jpg)
![Wire frame - laptop](/documentation/book-wireframe-2.jpg)
![Wire frame - laptop](/documentation/tablet-view-landscape.jpg)
![Wire frame - laptop](/documentation/book-last-wireframe-4.jpg)


## Features (focus on the new functionality - lore page)

- Navbar
  - At the top of the site, states the different areas of the site, team, membership etc...
  - white text colour contrast against purple
  - Active page notch, to subtle tell the user what page they are on

- Book
  - Book contains the first edition of the kamis journey
  - Page flip controlled by JS
  - Button relocation on tablets controlled by JS
  - Editions to be added weekly, part 2 to 3 ready
  - Different response for mobile users due to compatibility issues

![lore screenshots](/documentation/laptop-book-1.jpeg)
![lore screenshots](/documentation/laptop-book-2.jpeg)
![lore screenshots](/documentation/laptop-book-3.jpeg)

## Testing

- I tested this page on a laptop in google chrome
- Manually checked if site was responsive
- I also tested opening the site on an iphone 12pro using safari

## Bugs

- whilst trying to replicate the same book logic on a phone i ran into issues around sizing, the page turning effect and overflow of content therefore an alternative message shows for mobile users informing them of the progress of the lore for mobile devices.

- Issues around button transitions and location on a smaller screen.

- Issues with absolute links not displaying switched to relative links.


## Validator Testing

HTML

- No errors were returned when passing through the officail W3C validator

![officail W3C validator](/documentation/nu-html-checker.jpg)

CSS
- No errors were returned when passing through the officail (jigsaw) validator

![officail W3C css validator](/documentation/w3c-css-validator.jpg)

JShint
- There are 13 functions in this file.
- Function with the largest signature take 1 arguments, while the median is 0.
- Largest function has 7 statements in it, while the median is 3.
- The most complex function has a cyclomatic complexity value of 4 while the median is 1.

Accessibility

- I confirmed that the colours and fonts are easy to read and accesible by running it through lighthouse in devtools

![lighthouse testing](/documentation/pp2-lighthouse-score.jpg)

## Unfixed Bugs

- adapted mobile lore flipbook for later release

## Improvements
- To test the viability of using a slider revolution for the lore 
- Potentially redesign the UI
- more images to fill the book to follow along with the story

## Resub
- change book lore to use swiper.js
- added a js controlled dark and light mode for user

![light mode](/documentation/lightmode.png)
![dark mode](/documentation/darkmode.png)

- added a js interactive quiz with tracker and personalised user messages based on score

![interactive quiz](/documentation/lorequiz.png)

- styling fixes across all pages
- upadted footer

### JSHint 

There are some JSHint warnings related to the **Swiper** and **swiper** variables, as well as ES6 features. Here's a breakdown:

1. **Swiper Variable (Warning: "undefined variable")**
   - JSHint may throw a warning about the `Swiper` variable being undefined. This is because **Swiper** is imported from an external CDN (`https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js`), and JSHint doesn't recognize it as a global variable by default.
   - **Resolution:** This warning can be safely ignored, as Swiper is correctly imported in the HTML and functions as expected in the application.

2. **swiper Variable (Warning: "unused variable")**
   - JSHint may also show a warning regarding the `swiper` variable being unused. This variable is used to initialize the Swiper instance but might be flagged as unused by JSHint since it's declared in the `document.addEventListener` block.
   - **Resolution:** Again, this is due to JSHint's analysis and can be safely ignored as the `swiper` variable is actively used within the code to create the Swiper instance.

### ES6 Warnings

JSHint may flag ES6 features (such as arrow functions, `let`, `const`, and `import`) as warnings. These warnings are due to JSHint not fully supporting ES6 syntax by default.

- **Resolution:** Since this project is running on **Node version 20.19.0**, which provides full support for ES6 features, these warnings can also be safely ignored. The ES6 syntax is compatible with the runtime environment, and there are no functional issues in the code.

**Note:** These warnings are related to JSHint configuration and do not affect the functionality of the application. If needed, JSHint configuration can be adjusted to better recognize ES6 syntax and external libraries like Swiper.


## Deployment

- This site was deployedd to GitHub pages. The steps to deploy are as follows:
  - In the Github repository, navigate to the settings tab
  - from the source section drop-down menu, select master branch
  - Once the master branch has been selcetced, the page provided the link to the completed website

The live link can be found here - [depolyed site link](https://stayin-blick.github.io/reikai_pp2//)

## Credits

- thanks to Onik using ai generation to produce images
- thanks to each team member for profile pictures
- thanks to Kami nft for sharing images
- thanks to Stayin_blick for story writting
- codeinstitue support team in answering queries during the project 