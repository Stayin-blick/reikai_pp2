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

## Bugs

- Quiz questions were not loading due to missing code (now fixed).  
- Issues with button transitions and placements on smaller screens.  
- Absolute links were not displaying correctly — switched to relative links.

---

## Testing

Testing was conducted continuously throughout development to ensure functionality, responsiveness, accessibility, and performance.

- Manually tested on **Chrome (desktop)** and **Safari (iPhone 12 Pro)**  
- Responsiveness confirmed via **Chrome DevTools** and real devices  
- Accessibility and performance evaluated using **Lighthouse**  
- Developer Tools were used for debugging and ensuring consistent layout and behaviour across screen sizes

### Manual Testing

Each page of the site was manually tested to ensure:
- Proper display on different screen sizes
- Responsive layout on mobile, tablet, and desktop
- All interactive features functioned as intended

---

## Validator Testing

### HTML & CSS Validation

All site pages were validated using the official **W3C HTML** and **W3C CSS** validators. The table below shows the results:

| Page       | HTML Validation  | CSS Validation |
|------------|------------------|----------------|
| Home       | Pass             | Pass           |
| Team       | Pass             | Pass           |
| Membership | Pass             | Pass           |
| protectors | Pass             | Pass           |
| Lore       | Pass             | Pass           |
| Store      | Pass             | Pass           |


All validations returned no errors or warnings.

---

### JavaScript Validation (JSHint)

JavaScript was validated using **JSHint**. Below is a summary of the analysis:

- Total functions: 17  
- Largest function takes 2 arguments; median is 0  
- Largest function has 8 statements; median is 1  
- Most complex function has a cyclomatic complexity of 4; median is 1

## JSHint Warnings Summary

Some JSHint warnings relate to **Swiper usage** and **modern ES6 syntax**. Here's a breakdown and explanation:

---

### 1. `Swiper` Variable – "undefined variable"

- JSHint flags `Swiper` as undefined because it’s imported via CDN (`https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js`) and not explicitly declared in the script.
- **Resolution:** This warning is safe to ignore. Swiper is correctly loaded externally and functions as expected.

---

### 2. `swiper` Variable – "unused variable"

- The `swiper` instance is scoped within an event listener and may appear unused from JSHint’s perspective.
- **Resolution:** This warning can also be ignored. The `swiper` variable is used during initialization and is working correctly.

---

## ES6 Warnings

JSHint emits multiple warnings about ES6 features such as:

- `let`, `const`
- Arrow functions (`=>`)
- Template literals (`` `${value}` ``)
- Destructuring
- Object shorthand syntax

These appear because ES6 is not enabled in the default JSHint configuration.

- **Resolution:**  
  - The project runs on **Node v20.19.0**, which fully supports ES6 features.
  - These warnings do not affect the code’s functionality.

---

## Lighthouse Testing

Google Lighthouse was used to audit each page for **performance**, **accessibility**, **best practices**, and **SEO**. The scores for each page are summarized below:

| Page       | Performance | Accessibility | Best Practices | SEO| evidence                                            |
|------------|-------------|---------------|----------------|----|-----------------------------------------------------|
| Home       | 99          | 95            | 100            | 63 |[View Evidence](/documentation/pp2-ls-home.png)      |
| Team       | 89          | 95            | 100            | 63 |[View Evidence](/documentation/pp2-ls-team.png)      |
| Membership | 100         | 95            | 100            | 63 |[View Evidence](/documentation/pp2-ls-membership.png)|
| Protectors | 93          | 95            | 100            | 54 |[View Evidence](/documentation/pp2-ls-protectors.png)|
| Lore       | 95          | 96            | 100            | 63 |[View Evidence](/documentation/pp2-ls-lore.png)      |
| Store      | 93          | 95            | 100            | 63 |[View Evidence](/documentation/pp2-ls-store.png)     |

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
