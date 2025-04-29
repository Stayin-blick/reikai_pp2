# Reikai no Kamigami

This is a continuation of PP1 with new functionality.

**Reikai no Kamigami** is your go-to platform for all updates and information related to our community DAO (Decentralized Autonomous Organization). This site serves to inform both members and non-members about the latest developments and opportunities within our DAO.

---

## What You Can Find Here

- All the details about our DAO, including its mission, initiatives, and upcoming projects.  
- **Team and Membership**: Learn about the dedicated team behind Reikai no Kamigami and explore membership options that provide exclusive benefits.  
- **Contact and Social Media**: Easily connect with us through our social media channels and find answers to your membership queries.

![Am I responsive checker](/documentation/reikai-lore-sc.png)

---

## Design

Wireframes were created for laptop and tablet use, with tablets prioritizing landscape orientation as seen below. Wireframes differ depending on whether the book is open, to allow tablet users to interact with the buttons.

### Laptop Wireframe

![Wireframe - laptop](/documentation/book-cover-wireframe.jpg)  
![Wireframe - laptop](/documentation/book-wireframe-2.jpg)  
![Wireframe - tablet landscape](/documentation/tablet-view-landscape.jpg)  
![Wireframe - book end](/documentation/book-last-wireframe-4.jpg)

---

## Features (Focus on New Functionality - Lore Page)

### Navbar

- Located at the top of the site, showing different sections such as Team, Membership, etc.  
- White text contrasts well with the purple background.  
- Active page is marked with a subtle notch to indicate the current location.

### Lore Story (Swiper)

- Interactive swiper built with **Swiper.js**.  
- Users can flip through the story before being prompted with a quiz.  
- Tracks completion and gives tailored feedback.  
- Swiper replaces the original flipbook for better compatibility and accessibility.

![Lore screenshots](/documentation/laptop-book-1.png)
![Lore screenshots](/documentation/laptop-book-2.png)  
![Lore screenshots](/documentation/laptop-book-3.png)

### Interactive Quiz

- Appears after the user reads all lore slides.  
- Displays a score counter and personalized messages based on performance.  
- Fully responsive and accessible on all devices.

### Light/Dark Mode

- Toggle controlled via JavaScript.  
- Theme switch remains consistent across all pages.

---

## Testing

- Manually tested on **Chrome** (desktop) and **Safari** (iPhone 12 Pro).  
- Confirmed responsiveness via Chrome DevTools and real devices.  
- Accessibility and performance validated using Lighthouse.

---

## Bugs

- Quiz questions were not loading due to missing code (now fixed).  
- Issues with button transitions and placements on smaller screens.  
- Absolute links were not displaying correctly — switched to relative links.

---

## Validator Testing

### HTML

- No errors returned when tested through the official W3C validator.

![Official W3C HTML Validator](/documentation/nu-html-checker.jpg)

### CSS

- No errors returned from the official W3C CSS (Jigsaw) validator.

![Official W3C CSS Validator](/documentation/w3c-css-validator.jpg)

### JSHint

- There are 13 functions in this file.  
- The function with the largest signature takes 1 argument; the median is 0.  
- The largest function contains 7 statements; the median is 3.  
- The most complex function has a cyclomatic complexity of 4; the median is 1.

---

### Accessibility

- Colours and fonts were confirmed to be readable and accessible by running Lighthouse audits via DevTools.

![Lighthouse Testing](/documentation/pp2-lighthouse-score.png)

---

## Improvements

- Add audio/music toggle for immersion.  
- Add more chapters to the lore.  
- Expand the quiz with difficulty levels.  
- Refine UI and story illustrations.

---

## Resubmission Updates

- Changed lore book to use **Swiper.js**.  
- Added JavaScript-controlled dark and light modes for user preference.

![Light mode](/documentation/lightmode.png)  
![Dark mode](/documentation/darkmode.png)

- Introduced an interactive quiz (triggered after the lore is fully viewed), with score tracking and personalized messages based on performance.

![Interactive quiz](/documentation/lorequiz.png)

- Styling fixes applied across all pages.  
- Footer updated.

---

### JSHint Notes

Some JSHint warnings are related to the **Swiper** and `swiper` variables, as well as ES6 features. Here's a breakdown:

1. **Swiper Variable ("undefined variable")**  
   - JSHint flags `Swiper` as undefined because it's loaded via a CDN (`https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js`), and not declared within the script.  
   - **Resolution:** This warning is safe to ignore. Swiper is correctly loaded and functional.

2. **swiper Variable ("unused variable")**  
   - JSHint may flag the `swiper` variable as unused because it’s scoped inside an event listener.  
   - **Resolution:** This can also be ignored, as the variable is used for initializing Swiper.

### ES6 Warnings

JSHint may produce warnings for ES6 features (e.g., `let`, `const`, arrow functions). These arise from limited ES6 support.

- **Resolution:** The project runs on **Node v20.19.0**, which supports ES6 fully. The warnings don’t affect functionality. Optionally, JSHint config can be updated to suppress ES6-related warnings.

---

## Deployment

This site was deployed to GitHub Pages using the following steps:

1. In the GitHub repository, navigate to the **Settings** tab.  
2. From the **Pages** section, select the **master** branch as the source.  
3. Once selected, GitHub will provide the link to the deployed site.

[Live deployed site](https://stayin-blick.github.io/reikai_pp2//)

---

## Credits

- Thanks to **Onik** for AI-generated images.  
- Thanks to each team member for providing profile pictures.  
- Thanks to **Kami NFT** for sharing imagery.  
- Story written by **Stayin_blick**.  
- Support provided by the **Code Institute** team during development.
