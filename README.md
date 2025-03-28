# Fitshare <img src="docs/readme/logo_2.jpg" style="width: 85px; height:60px;">

![Mockup image](docs/readme/fitshare_home%20_page.jpg)

** Mr Mohamed Abdillahi**

[Visit live website](https://fitshare-d428ae7f1a9f.herokuapp.com/)  

---

## Table of Contents
  - [About](#about)
  - [Project Goals](#project-goals)
  - [User Stories](#user-stories)
  - [Design](#design)
    - [Colours](#colours)
    - [Fonts](#fonts)
    - [Wireframes](#wireframes)
  - [Technologies Used](#technologies-used)
    - [Languages](#languages)
    - [Libraries, frameworks and dependencies](#libraries-frameworks-and-dependencies)
    - [Tools & Programs](#tools--programs)
  - [Front-End](#front-end)
  - [Back-End API](#back-end-api)
  - [Features](#features)
  - [Future features / improvements](#future-features--improvements)
  - [Validation](#validation)
  - [Testing](#testing)
    - [Manual testing of user stories](#manual-testing-of-user-stories)
    - [Performing tests on various devices](#performing-tests-on-various-devices)
    - [Browser compatibility](#browser-compatibility)
  - [Bugs](#bugs)
  - [Config](#config)
  - [Credits](#credits)


## About

Fitshare is a social platform designed for fitness enthusiasts to connect, share, and discover gyms and fitness facilities. Users can create profiles, share gym-related posts, comment, like, and interact with other fitness enthusiasts. The platform aims to foster a community where users can explore the best gyms and share their fitness journeys.

---

## Project Goals

FitShare is a dynamic social platform designed to connect fitness enthusiasts by enabling them to share their gym experiences, discover new workout spots, and build a supportive community. The project aims to:

1. Provide a seamless platform for users to:
   - Share their gym visits through posts, including images and captions.
   - Engage with others by liking, commenting, and following profiles.

2. Enhance user interaction by offering:
   - The ability to create and manage user profiles.
   - Real-time feedback notifications for actions like posting, commenting, and following.

3. Deliver a superior user experience with:
   - Intuitive navigation and responsive design across all devices.
   - Features such as infinite scrolling, keyword search, and post filtering.

4. Empower users to personalize their experience by:
   - Viewing and editing their profiles and posts.
   - Customizing their feed through follows, likes, and search options.

5. Maintain high accessibility and reliability through:
   - Comprehensive error handling, such as custom 404 pages.
   - Secure authentication and user data management.


## User Stories

### Authentication Backlog
1. As a user, I can create an account to access all features of the platform (Must have).
2. As a user, I can log in and maintain my session until I log out (Must have).
3. As a user, I can log out to securely end my session (Must have).
4. As a user, I can change my password to keep my account secure (Must have).
5. As a user, I can update my username to reflect my identity (Could have).

### Comments Backlog
6. As a user, I can add comments on posts to share my thoughts (Must have).
7. As a user, I can edit my comments to correct or update them (Must have).
8. As a user, I can delete my comments to remove unwanted content (Must have).
9. As a user, I can view all comments on a post to engage with the community (Must have).

### Functionality Backlog
10. As a user, I can navigate the site using a navbar for easy access to all pages (Should have).
11. As a user, I can browse posts using infinite scrolling to avoid navigating through multiple pages (Could have).
12. As a user, I can see a custom 404 error page when accessing invalid URLs (Must have).
13. As a user, I can experience a fully responsive platform across all devices (Must have).
14. As a user, I can see feedback messages for actions like posting, commenting, or editing to confirm successful operations (Must have).

### Post Backlog
15. As a user, I can create posts with images and captions to share my gym experiences (Must have).
16. As a user, I can edit my posts to update or correct information (Should have).
17. As a user, I can delete my posts to remove unwanted content (Should have).
18. As a user, I can like or unlike a post to show my appreciation for the content (Must have).
19. As a user, I can view all posts from other users, sorted by the latest, to discover new gyms and content (Must have).
20. As a user, I can search posts by keywords to find content relevant to my interests (Should have).
21. As a user, I can view detailed information on individual posts, such as comments and likes (Must have).
22. As a user, I can view all posts created by a specific user to follow their content (Should have).

### Profile Backlog
23. As a user, I can view my profile to see my posts and account details (Must have).
24. As a user, I can edit my profile information, including my bio and profile picture (Must have).
25. As a user, I can see statistics on my profile, such as the number of followers and posts (Should have).
26. As a user, I can follow or unfollow other users to customize my feed (Should have).
27. As a user, I can view a list of the most popular profiles to discover new users to follow (Should have).

### Achievements Backlog
28. As a user, I can view my earned achievements so that I can track my progress and be motivated by visual rewards (badges) for my fitness activities (Must have).


### Notifications Backlog
29. As a user, I can view notifications so that I know when other users interact with my content (e.g., likes, comments, follows), ensuring I receive timely feedback on my posts (Must have).


## Design

### Colours

The colour scheme for FitShare was designed to convey the intensity and energy of fitness and boxing, while maintaining a modern and user-friendly aesthetic. The bold red (`#ff4d4d`) from the logo serves as the primary accent color, symbolizing strength and passion. It is complemented by a deep blue (`#2142b2`) for buttons, links, and borders, representing trust and professionalism. A light grey (`#f4f4f4`) background ensures high contrast and readability throughout the application, while subtle black and white shades (`#333333` and `#ffffff`) are used for text and containers to provide a clean, minimalist look.

colour pallete
<img src="docs/readme/colour_pallete.jpg">

These colors were selected to:
- Reflect the rugged, energetic vibe of fitness and boxing.
- Provide excellent readability and user focus on content.
- Ensure seamless contrast and accessibility for all users.

### Implementation
- **Primary Action Buttons**: Deep blue (`#2142b2`) with hover effects transitioning to a darker blue (`#1a337d`), emphasizing interactivity.
- **Error and Warning Highlights**: Red (`#ff4d4d`) for icons like hearts (likes) and error messages, resonating with the boxing glove's dynamic color.
- **Navigation Bar and Search Bar**: Light grey (`#ffffff`) with blue text and highlights for a professional appearance.
- **Interactive Elements**: Gradients and hover effects are used to enhance the visual hierarchy and make buttons and icons more engaging.

The chosen palette ensures the application remains visually striking, aligned with the branding of FitShare, while also offering a user-friendly experience.


### Fonts

FitShare uses **DM Sans** from Google Fonts for its clean and modern look, ideal for a fitness-focused platform. It offers excellent readability with a slightly taller x-height and works well for both headers and body text. Paired with **sans-serif** as a fallback, DM Sans ensures a consistent and professional appearance across all devices.


### Wireframes

<details><summary>desktop view</summary>
<img src="docs/wireframes/wireframes-desktop_view.png">
</details>
<details><summary>mobile view</summary>
<img src="docs/wireframes/wireframes-mobile_view.png">
</details>
<details><summary>ipad view</summary>
<img src="docs/wireframes/wireframes-ipad_view.png">
</details>

##### Back to [top](#table-of-contents)


## Technologies Used

### Languages
- HTML
- CSS
- JavaScript
  - React (17.0.2)

### Libraries, Frameworks, and Dependencies
- [React](https://reactjs.org/) - Core library for building the user interface of FitShare.
- [React DOM](https://reactjs.org/docs/react-dom.html) - Provides DOM-specific methods for React.
- [React Router DOM](https://v5.reactrouter.com/) - Enables dynamic routing to navigate between pages without reloading.
- [Axios](https://axios-http.com/) - Used for promise-based HTTP requests to communicate with APIs.
- [React-Bootstrap](https://react-bootstrap.github.io/) - Integrates Bootstrap's UI components seamlessly with React for responsive design.
- [Bootstrap](https://getbootstrap.com/) - A CSS framework for building responsive and modern interfaces.
- [React Icons](https://react-icons.github.io/react-icons/) - Provides a collection of popular icons for enhancing the UI.
- [React Infinite Scroll Component](https://www.npmjs.com/package/react-infinite-scroll-component) - Implements infinite scrolling to load posts and comments dynamically.
- [JWT Decode](https://github.com/auth0/jwt-decode) - Decodes JSON Web Tokens for managing authentication.
- [MSW (Mock Service Worker)](https://mswjs.io/) - A testing tool for mocking API requests in development and testing environments.

### Development Tools
- [React Scripts](https://create-react-app.dev/docs/getting-started/) - Includes essential scripts for building, testing, and running the app.
- [Web Vitals](https://web.dev/vitals/) - Used to measure and report performance metrics.
- [Jest](https://jestjs.io/) - A testing framework for unit and integration tests.
- [Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Simplifies testing React components to ensure they behave correctly.

### Engines
- Node.js: 16.19.1
- NPM: 8.19.3


### Tools & Programs

- [Am I Responsive](http://ami.responsivedesign.is/) - Showcased FitShare's seamless responsiveness across devices with a mock-up preview.
- [Balsamiq](https://balsamiq.com/) - Used to create wireframes for planning the website layout and design.
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/) - Debugged and fine-tuned the website for optimal responsiveness and performance.
- [Cloudinary](https://cloudinary.com/) - Managed and served high-quality images and media assets efficiently.
- [Colorzilla](https://www.colorzilla.com/) - Used to identify and create the color palette for the website.
- [Favicon Generator](https://favicon.io/) - Designed a custom favicon for consistent branding across tabs.
- [Font Awesome](https://fontawesome.com/) - Enhanced navigation and user interface with sleek and meaningful icons.
- [Google Fonts](https://fonts.google.com/) - Incorporated "DM Sans" for a modern, clean, and fitness-friendly typography.
- [Git](https://git-scm.com/) - Used for version control, enabling collaborative coding and error-free development.
- [GitHub](https://github.com/) - Hosted the FitShare repository, facilitating remote collaboration and deployment.
- [Gitpod](https://gitpod.io/) - Provided a robust development environment to streamline the coding and testing workflow.

#### Validation Tools
- [W3C HTML Validator](https://validator.w3.org/) - Ensured the HTML code adhered to web standards for functionality and compatibility.
- [CSS Validator](https://jigsaw.w3.org/css-validator/) - Checked the CSS for clean syntax and compliance with best practices.
- [ESLint](https://eslint.org/) - Enforced coding standards and identified potential issues in JavaScript and React code.
- [Wave Accessibility Tool](https://wave.webaim.org/) - Ensured the website met accessibility standards for inclusive design.

##### Back to [top](#table-of-contents)


## Front-End: FitShare

**React**  
FitShare is built using **React**, a powerful JavaScript library for creating dynamic and interactive user interfaces. React's flexibility and modular structure make it the perfect choice for developing scalable and maintainable applications like FitShare.

### Why React?
- **Speed**: React improves loading times by dynamically updating components without requiring full-page reloads, ensuring a smooth user experience.
- **Flexibility**: React's modular structure allows for efficient code management and scalability.
- **React Bootstrap**: This library provides pre-built components for styling and responsiveness, enhancing the overall user experience.
- **Popularity**: React powers major platforms like Meta (Facebook), Instagram, and Netflix, proving its reliability for social and media applications.
- **Component Reusability**: React components can be reused across the app, reducing redundancy and simplifying maintenance.

---

### Key Pages and Features
FitShare's modular structure organizes its features into distinct groups:

#### Authentication
- **SignInForm.js**: Handles user login.
- **SignUpForm.js**: Handles user registration.
- **User Stories Covered**: 1, 2, 3.

#### Comments
- **Comment.js**: Displays user comments on posts.
- **CommentCreateForm.js**: Allows users to add new comments.
- **CommentEditForm.js**: Enables users to edit their comments.
- **User Stories Covered**: 6, 7, 8, 9.

#### Posts
- **Post.js**: Displays individual posts with all associated details.
- **PostCreateForm.js**: Handles the creation of new posts.
- **PostEditForm.js**: Enables users to edit their posts.
- **PostPage.js**: Shows detailed information about a single post.
- **PostsPage.js**: Displays a feed of all posts.
- **User Stories Covered**: 15, 16, 17, 18, 19, 20, 21, 22.

#### Profiles
- **PopularProfiles.js**: Displays trending profiles.
- **Profile.js**: Handles individual user profiles.
- **ProfileEditForm.js**: Allows users to update their profile information.
- **ProfilePage.js**: Displays full profile pages.
- **UsernameForm.js**: Enables username updates.
- **UserPasswordForm.js**: Handles password changes.
- **User Stories Covered**: 23, 24, 25, 26, 27.

#### Achievements
- **Achievements.js**: Displays the achievements earned by the user by fetching data from the backend API. This component shows rewards such as "Newbie", "Popular Post", and "Comment Champion".
- **User Stories Covered**: 28.

#### Notifications
- **Notifications.js**: Displays user notifications by fetching data from the backend API. This component shows messages for interactions such as likes, comments, and follows.
- **User Stories Covered**: 29.

#### Utilities and Hooks
- **utils.js**: Contains utility functions used throughout the app.
- **useClickOutsideToggle.js**: Manages events for toggling components when clicking outside a specified element.
- **useRedirect.js**: Handles logic for page redirections.

This modular design ensures FitShare is easy to navigate, maintain, and scale.



## Back-End API - FitShare API

The FitShare application is powered by a robust back-end built using the Django REST Framework (DRF). This API handles all data and operations to provide a seamless experience for users. From user authentication to managing posts, comments, and profiles, the API serves as the backbone of FitShare.

Explore the detailed documentation and repository for the DRF Back-End: [FitShare API Repository](https://github.com/Mabdillahi88/fitshare-api).

### Key Features of the API:
- **User Authentication**: Provides secure endpoints for user login, registration, and session management.
- **Post Management**: Full CRUD functionality for creating, updating, deleting, and retrieving posts.
- **Comment Functionality**: Allows users to add, edit, and delete comments on posts.
- **Profile Control**: Enables users to view and edit profiles, manage passwords, and track followers.
- **Achievements**: Automatically tracks and awards user achievements (e.g., "Newbie", "Popular Post", "Comment Champion") based on user activity.
- **Notifications**: Provides endpoints to monitor and manage user notifications, ensuring users receive timely feedback on interactions such as likes, comments, and follows.
- **Search and Filtering**: Supports searching posts and filtering results by keywords, tags, or authors.
- **Performance Optimizations**: Implements efficient serializers and query optimization for fast data responses.



Visit the live FitShare API: [Live API](https://fitshareapi-b9588b2c11b9.herokuapp.com/).

By leveraging Django REST Framework's flexibility and scalability, the FitShare API ensures secure, efficient, and real-time interaction between the front-end and back-end systems, bringing user stories to life.

##### Back to [top](#table-of-contents)


## Features

## Testing

### Manual Testing of FitShare User Stories

#### Authentication Backlog

1. **As a user, I can create an account to access all features of the platform.**

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to `/signup`, fill in the username, password, and confirm password fields, then submit the form. | Account is created, and the user is redirected to the login page. | Works as expected. |

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-01.png">
</details>

2. **As a user, I can log in and maintain my session until I log out.**

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to `/signin`, enter valid credentials, and submit the form. | User is authenticated and redirected to the home page with session maintained. | Works as expected. |

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-02.png">
</details>

3. **As a user, I can log out to securely end my session.**

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Click the logout button in the navbar. | User is logged out and redirected to the landing page as a guest. | Works as expected. |

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-03.1.png">
</details>

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-03.2.png">
</details>

4. **As a user, I can change my password to keep my account secure.**

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to `/profile`, click "Change Password", enter the new password, and save. | Password is updated | Works as expected. |

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-04.1.png">
</details>

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-04.2.png">
</details>

5. **As a user, I can update my username to reflect my identity.**

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------
Navigate to the profile settings page and click on the "Edit Username" option. | The username field becomes editable. | Works as expected.
Enter a new username and click "Save". | The username updates, and a confirmation message is displayed. | Works as expected.
Log out and log back in using the new username. | The new username works for login, and changes are reflected across the app. | Works as expected.

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-05.1.png">
</details>

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-05.2.png">
</details>


#### Comments Backlog

6. **As a user, I can add comments on posts to share my thoughts.**

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to a post, type a comment in the input box, and click "Add Comment". | Comment appears under the post. | Works as expected. |

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-06.png">
</details>

7. **As a user, I can edit my comments to correct or update them.**

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Click the edit button on an existing comment, update the text, and save. | The updated comment replaces the original with a confirmation message. | Works as expected. |

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-07.png">
</details>

8. **As a user, I can delete my comments to remove unwanted content.**

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Click the delete button on a comment. | The comment is removed, and a confirmation message appears. | Works as expected. |

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-08.1.png">
</details>

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-08.2.png">
</details>

9. **As a user, I can view all comments on a post to engage with the community.**

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to a post page. | Comments are displayed below the post. | Works as expected. |

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-09.png">
</details>


#### Posts Backlog

10. **As a user, I can create posts with images to share my gym experiences.**

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to `/create-post`, upload an image and submit the form. | Post appears on the home feed with the uploaded image. | Works as expected. |

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-10.1.png">
</details>

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-10.2.png">
</details>

11. **As a user, I can edit my posts to update or correct information.**

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to an existing post, click the "Edit Post" button, make changes, and save. | Post updates with the new information and a confirmation message is displayed. | Works as expected. |

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-11.1.png">
</details>

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-11.2.png">
</details>

12. **As a user, I can delete my posts to remove unwanted content.**

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Click the delete button on an existing post. | Post is removed from the feed, and a confirmation message appears. | Works as expected. |

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-12.png">
</details>

13. **As a user, I can like or unlike a post to show my appreciation for the content.**

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Click the "Like" button under a post. | The like icon toggles, and the like count updates dynamically. | Works as expected. |

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-13.1.png">
</details>

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-13.2.png">
</details>

14. **As a user, I can view all posts from other users to discover new gyms and content.**

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to the main posts page. | Posts are displayed in descending order of creation time. | Works as expected. |

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-14.png">
</details>

15. **As a user, I can search posts by keywords to find content relevant to my interests.**

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Use the search bar on the main posts page and input a keyword. | Posts containing the keyword in their title, description, or tags are displayed. | Works as expected. |

<details><summary>Screenshots</summary>
<img src="docs/testing/user-stories-testing/user-story-15.png">
</details>

16. **As a user, I can view detailed information on individual posts, such as comments and likes.**

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Click on a post thumbnail from the main posts page. | Redirects to the post details page, displaying comments, like count, and user interactions. | Works as expected. |

<details><summary>Screenshots</summary>
<img src="docs/testing/user-stories-testing/user-story-16.png">
</details>

17. **As a user, I can view all posts created by a specific user to follow their content.**

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to a user profile and view their posts section. | All posts by the user are displayed. | Works as expected. |

<details><summary>Screenshots</summary>
<img src="docs/testing/user-stories-testing/user-story-17.png">
</details>

#### Profile Backlog

18. **As a user, I can view my profile to see my posts and account details.**

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to `/profile` to view your information and posts. | Profile information and posts are displayed. | Works as expected. |

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-18.png">
</details>

19. **As a user, I can edit my profile information, including my bio and profile picture.**

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to the profile page, click "Edit Profile", update the bio and upload a new profile picture, then save. | Profile updates are saved, and a confirmation message is displayed. | Works as expected. |

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-19.png">
</details>

20. **As a user, I can see statistics on my profile, such as the number of followers and posts.**

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to `/profile` and view the stats section. | Statistics such as the number of posts, followers, and following are displayed. | Works as expected. |

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-20.png">
</details>

21. **As a user, I can follow or unfollow other users to customize my feed.**

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to a user profile and click the "Follow" or "Unfollow" button. | The button toggles, and the user is added or removed from the following list. | Works as expected. |

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-21.1.png">
</details>

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-21.2.png">
</details>

22. **As a user, I can view a list of the most popular profiles to discover new users to follow.**

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to `/popular-profiles`. | A list of popular profiles is displayed. | Works as expected. |

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-22.png">
</details>


#### Functionality Backlog

23. **As a user, I can navigate the site using a navbar for easy access to all pages.**

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Load any page of the application. | Navbar with different links is displayed on top of each page. | Works as expected. |

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-23.png">
</details>

24. **As a user, I can experience a fully responsive platform across all devices.**

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Access the site on devices with varying screen sizes or use browser developer tools. | Layout adjusts seamlessly for all screen sizes. | Works as expected. |

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-24.1.png">
</details>

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-24.2.png">
</details>

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-24.3.png">
</details>

25. **As a user, I can see statistics on my profile, such as the number of followers and posts.**

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------
Navigate to the profile page. | Profile statistics (e.g., number of followers, number of posts) are displayed. | Works as expected.
Verify that the statistics update dynamically when posts are added or followers change. | The statistics update in real-time. | Works as expected.

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-25.1.png">
</details>

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-25.2.png">
</details>


26. **As a user, I can see feedback messages for actions like posting, commenting, or editing to confirm successful operations.**

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Perform actions such as creating a post, adding a comment, or editing a profile. | Feedback messages appear, confirming successful operations. | Works as expected. |

<details><summary>Screenshots</summary>
<img src="docs/testing/user-stories-testing/user-story-26.1.png">
<img src="docs/testing/user-stories-testing/user-story-26.1.png">
<img src="docs/testing/user-stories-testing/user-story-26.3.png">
</details>

27. **As a user, I can browse posts using infinite scrolling to avoid navigating through multiple pages.**

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Scroll to the bottom of the posts feed. | New posts load automatically without needing to navigate to another page. | Works as expected. |

<details><summary>Screenshots</summary>
<img src="docs/testing/user-stories-testing/user-story-27.1.png">
<img src="docs/testing/user-stories-testing/user-story-27.2.png">
</details>


28. **As a user, I can view my earned achievements so that I can track my progress and be motivated by visual rewards (badges) for my fitness activities.**

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------
Create a new user account and publish the first post. | The user should automatically receive the "Newbie" achievement. | Works as expected.
Add at least 1 like or 1 comment to a post. | The post owner should receive the "Popular Post" achievement. | Works as expected.
Post 2 or more comments. | The user should receive the "Comment Champion" achievement. | Works as expected.

<details><summary>Screenshot: Newbie  Achievement</summary>
<img src="docs/testing/user-stories-testing/user-story-28.1.png" alt="Newbie achievement screenshot">
</details>

<details><summary>Screenshot: Popular Post Achievement</summary>
<img src="docs/testing/user-stories-testing/user-story-28.2.png" alt="Popular Post achievement via likes screenshot">
</details>


<details><summary>Screenshot: Comment Champion Achievement</summary>
<img src="docs/testing/user-stories-testing/user-story-28.3.png" alt="Comment Champion achievement screenshot">
</details>


<details><summary><strong>Screenshots: Notifications</strong></summary>
  <details><summary>Notification for Follow, Like and Comment </summary>
    <img src="docs/testing/user-stories-testing/user-story-29.1.png" alt="Notification for follow screenshot">
  </details>
</details>



## Future Features / Improvements 🚀

FitShare is just getting started! Here’s a sneak peek at the bold features and upgrades that could take this platform to the next level:

### **Authentication**
- 🔒 **Next-Level Security**: Require email verification for sign-ups to ensure only genuine gym enthusiasts join the FitShare community.
- 🔄 **Forget No More**: A sleek "Forgot Password" recovery system, empowering users to regain access with just a few clicks.
- 🌐 **Social Login Power**: Seamless logins with LinkedIn, Google, or Facebook accounts – because who needs extra passwords?

### **Profile**
- ✉️ **Slide Into DMs**: A private messaging feature to connect users and exchange tips, motivation, or even plan gym meetups.
- 🏆 **Earn Your Badges**: Unlock achievements for milestones like “Fitness Guru,” “Top Lifter,” or “Most Inspirational Posts.”

### **Posts**
- 💡 **Detailed Workouts**: Include fields for workout steps, equipment used, and tips – a one-stop solution for crafting the perfect gym routine.
- 🔥 **Trending Workouts**: A "Hot Right Now" section featuring the most-liked and commented posts – because everyone loves the spotlight!
- 🏋️ **Tag Your Gym**: Bring gyms into the mix by tagging specific locations and linking to their profiles for reviews and insights.

### **Comments**
- 💬 **Threaded Conversations**: Enable users to reply directly to comments, sparking real discussions and deeper connections.
- ❤️ **Comment Love**: Like/unlike comments to spotlight the funniest, most helpful, or downright motivational ones.
- 🌟 **Top Comments**: Automatically feature the best comments at the top, ensuring the wisdom doesn’t get buried.

### **Notifications**
- 🔔 **Real-Time Alerts**: Stay in the loop with live notifications for likes, comments, follows, and even comment replies.
- 📅 **Weekly Recap**: Opt for a summary email highlighting the most exciting activities from your FitShare week.

### **User Account Management**
- 🗑️ **Full Control**: Enable users to request permanent account deletion, respecting their digital autonomy.
- 👻 **Go Incognito**: Add a deactivation feature to temporarily hide profiles for users taking a break.

### **Discover More**
- 🔍 **Search Like a Pro**: Enhanced filters to find posts by workout type (strength, cardio, yoga) or gym name.
- 🏅 **Top Performers**: Introduce a leaderboard showcasing the most active, inspiring, or followed users on FitShare.


## Validation  

## HTML Validation ✅

The W3C Markup Validation Service confirmed the website’s HTML is error-free and fully compliant. 🚀


<details><summary>Main page</summary> 
<img src="docs/validation/html-validation-main-page.png"> 
</details> 

<details><summary>Signup page</summary> 
<img src="docs/validation/html-validation-signup-page.png"> 
</details>

<details><summary>Login page</summary> 
<img src="docs/validation/html-validation-signin-page.png"> 
</details>

<details><summary>Post page</summary>
<img src="docs/validation/html-validation-post-page.png">
</details>

<details><summary>Post create page</summary>
<img src="docs/validation/html-validation-post-create-page.png">
</details>

<details><summary>Post edit page</summary>
<img src="docs/validation/html-validation-post-edit-page.png">
</details>

<details><summary>Profile page</summary>
<img src="docs/validation/html-validation-profile-page.png">
</details>

<details><summary>Profile edit page</summary>
<img src="docs/validation/html-validation-profile-edit-page.png">
</details>

<details><summary>Password change page</summary>
<img src="docs/validation/html-validation-password-change-page.png">
</details>

<details><summary>Password change page</summary>
<img src="docs/validation/html-validation-username-change-page.png">
</details>


## CSS Validation ✅

The W3C Jigsaw CSS Validation Service confirmed all CSS modules are error-free. 


<details><summary>App.module.css</summary> 
<img src="docs/validation/css-validation-app.png"> 
</details> 

<details><summary>Asset.module.css</summary> 
<img src="docs/validation/css-validation-asset.png"> 
</details> 

<details><summary>Avatar.module.css</summary> 
<img src="docs/validation/css-validation-avatar.png"> 
</details> 

<details><summary>Comment.module.css</summary> 
<img src="docs/validation/css-validation-comment.png"> 
</details> 

<details><summary>CommentCreateEditForm.module.css</summary> 
<img src="docs/validation/css-validation-comment-create-edit-form.png"> 
</details> 

<details><summary>Landing.module.css</summary> 
<img src="docs/validation/css-validation-landing.png"> 
</details> 

<details><summary>SignInUpForm.module.css</summary> 
<img src="docs/validation/css-validation-login-sign-up-form.png"> 
</details> 

<details><summary>PostsPage.module.css</summary> 
<img src="docs/validation/css-validation-posts-page.png"> 
</details> 

<details><summary>NavBar.module.css</summary> 
<img src="docs/validation/css-validation-navbar.png"> 
</details> 

<details><summary>Post.module.css</summary> 
<img src="docs/validation/css-validation-post.png"> 
</details> 

<details><summary>PostCreateEditForm.module.css</summary> 
<img src="docs/validation/css-validation-post-create-edit-form.png"> 
</details> 

<details><summary>Profile.module.css</summary> 
<img src="docs/validation/css-validation-profile.png"> 
</details> 

<details><summary>ProfilePage.module.css</summary> 
<img src="docs/validation/css-validation-profile-page.png"> 
</details> 

<details><summary>Button.module.css</summary> 
<img src="docs/validation/css-validation-button.png"> 
</details> 

<details><summary>NotFound.module.css</summary> 
<img src="docs/validation/css-validation-NotFound.png"> 
</details> 

<details><summary>index.css</summary> 
<img src="docs/validation/css-validation-index.png"> 
</details> 

<details><summary>Achievements.css</summary> 
<img src="docs/validation/css-validation-achievement.png" alt="CSS validation for Achievements.css">
</details>

<details><summary>Notification.css</summary> 
<img src="docs/validation/css-validation-notification.png" alt="CSS validation for Achievements.css">
</details>


## JSX Validation ✅

The JSX code was validated using ESLint, confirming compliance and best practices.

<details><summary>axiosDefaults.js</summary> 
<img src="docs/validation/eslint-axiosDefaults.js.png"> 
</details> 

<details><summary>Asset.js</summary> 
<img src="docs/validation/eslint-Asset.js.png"> 
</details> 

<details><summary>Avatar.js</summary> 
<img src="docs/validation/eslint-Avatar.js.png"> 
</details> 

<details><summary>MoreDropdown.js</summary> 
<img src="docs/validation/eslint-MoreDropdown.js.png"> 
</details> 

<details><summary>NavBar.js</summary> 
<img src="docs/validation/eslint-NavBar.js.png"> 
</details> 

<details><summary>NotFound.js</summary> 
<img src="docs/validation/eslint-NotFound.js.png"> 
</details> 

<details><summary>CurrentUserContext.js</summary> 
<img src="docs/validation/eslint-CurrentUserContext.js.png"> 
</details> 

<details><summary>ProfileDataContext.js</summary> 
<img src="docs/validation/eslint-ProfileDataContext.js.png"> 
</details> 

<details><summary>useClickOutsideToggle.js</summary> 
<img src="docs/validation/eslint-useClickOutsideToggle.js.png"> 
</details> 

<details><summary>useRedirect.js</summary> 
<img src="docs/validation/eslint-useRedirect.js.png"> 
</details> 

<details><summary>SignInForm.js</summary> 
<img src="docs/validation/eslint-SignInForm.js.png"> 
</details> 

<details><summary>SignUpForm.js</summary> 
<img src="docs/validation/eslint-SignUpForm.js.png"> 
</details> 

<details><summary>Comment.js</summary> 
<img src="docs/validation/eslint-Comment.js.png"> 
</details> 

<details><summary>CommentCreateForm.js</summary> 
<img src="docs/validation/eslint-CommentCreateForm.js.png"> 
</details> 

<details><summary>CommentEditForm.js</summary> 
<img src="docs/validation/eslint-CommentEditForm.js.png"> 
</details> 

<details><summary>Post.js</summary> 
<img src="docs/validation/eslint-Post.js.png"> 
</details> 


<details><summary>PostCreateForm.js</summary> 
<img src="docs/validation/eslint-PostCreateForm.js.png"> 
</details> 

<details><summary>PostEditForm.js</summary> 
<img src="docs/validation/eslint-PostEditForm.js.png"> 
</details> 

<details><summary>PostPage.js</summary> 
<img src="docs/validation/eslint-PostPage.js.png"> 
</details> 

<details><summary>PostsPage.js</summary> 
<img src="docs/validation/eslint-PostsPage.js.png"> 
</details> 


<details><summary>PopularProfiles.js</summary> 
<img src="docs/validation/eslint-PopularProfiles.js.png"> 
</details> 

<details><summary>Profile.js</summary> 
<img src="docs/validation/eslint-Profile.js.png"> 
</details> 

<details><summary>ProfileEditForm.js</summary> 
<img src="docs/validation/eslint-ProfileEditForm.js.png"> 
</details> 

<details><summary>ProfilePage.js</summary> 
<img src="docs/validation/eslint-ProfilePage.js.png"> 
</details> 

<details><summary>UsernameForm.js</summary> 
<img src="docs/validation/eslint-UsernameForm.js.png"> 
</details> 

<details><summary>UserPasswordForm.js</summary> 
<img src="docs/validation/eslint-UserPasswordForm.js.png"> 
</details> 

<details><summary>Landing.js</summary> 
<img src="docs/validation/eslint-Landing.js.png"> 
</details> 

<details><summary>utils.js</summary> 
<img src="docs/validation/eslint-utils.js.png"> 
</details> 

<details><summary>App.js</summary> 
<img src="docs/validation/eslint-App.js.png"> 
</details> 

<details><summary>Achievements.js</summary> 
<img src="docs/validation/eslint-Achievement.js.png" alt="ESLint validation for Achievements.js">
</details>

<details><summary>Notification.js</summary> 
<img src="docs/validation/eslint-Notification.js.png" alt="ESLint validation for Achievements.js">
</details>

### Wave

The WAVE WebAIM tool was used to evaluate the accessibility of the FitShare website. However, each attempt to analyze the site returned the same image result, suggesting that WAVE was unable to access the hosted content.

<details><summary>Landing page</summary>
<img src="docs/validation/wave-landing-page.png">
</details>

<details><summary>Sign up page</summary>
<img src="docs/validation/wave-sign-up.png">
</details>

<details><summary>Log in page</summary>
<img src="docs/validation/wave-sign-in.png">
</details>

<details><summary>Main posts page</summary>
<img src="docs/validation/wave-posts-page.png">
</details>

<details><summary>Post page</summary>
<img src="docs/validation/wave-post-page.png">
</details>

<details><summary>Post create page</summary>
<img src="docs/validation/wave-post-create-page.png">
</details>

<details><summary>Post edit page</summary>
<img src="docs/validation/wave-post-edit-page.png">
</details>

<details><summary>Profile page</summary>
<img src="docs/validation/wave-profile-page.png">
</details>

<details><summary>Profile edit page</summary>
<img src="docs/validation/wave-profile-edit-page.png">
</details>

<details><summary>Password change page</summary>
<img src="docs/validation/wave-password-change-page.png">
</details>

<details><summary>Password change page</summary>
<img src="docs/validation/wave-username-change-page.png">
</details>

<details><summary>Achievement</summary>
<img src="docs/validation/wave-achievements.png">
</details>

<details><summary>Achievement</summary>
<img src="docs/validation/wave-notification.png">
</details>

##### Back to [top](#table-of-contents)


### Performing tests on various devices

Performing Tests on Various Devices 📱💻

FitShare was tested using Google Chrome Developer Tools Toggle Device Toolbar to simulate various devices. 
The website was successfully tested on the following devices:

1. ASUS ZenBook 
2. Samsung Galaxy Tab A 
3. Samsung Galaxy S7 
Browser Compatibility 

Testing was carried out on the following browsers:

1. Google Chrome 
2. Firefox Browser 
3. Microsoft Edge 

All functionalities, including navigation, media, and interactivity, worked seamlessly across all tested browsers.

##### Back to [top](#table-of-contents)


## Bugs

| **Bug** | **Fix** |
| ------- | ------- |
| Dropdown menu three dots going off the container on smaller screens | Changed `grid-template-columns: '60px auto 200px'` to `grid-template-columns: '60px auto 60px'` |
| User was redirected to 404 page after signing up and logging in | Changed `history.goBack();` to `history.push("/")` |

## Future Improvements

| **Improvement** | **Details** |
| --------------- | ----------- |
| User analytics | Implement a feature to log user activity to analyze engagement and improve user experience. |
| Improved mobile responsiveness | Enhance layout styles to ensure better responsiveness for smaller screens by adjusting `flex-direction` and padding. |




## Deployment

This section provides a detailed, step-by-step guide for deploying the FitShare frontend on Heroku.

### Deploying the Frontend to Heroku

#### Log in to Heroku and Create a New Heroku App
- **Log in to Heroku:**  
  Open your terminal and log in by running:
  ```bash
  heroku login

<details><summary>Login to Heroku</summary> <img src="docs/testing/user-stories-testing/create_login_account.pngpng" alt="Login to Heroku"> </details>


### Create the App:

Create a new Heroku app (for example, fitshare-d428ae7f1a9f) by running:

heroku create fitshare-d428ae7f1a9f

<details><summary>Create App</summary> <img src="docs/testing/user-stories-testing/create_new_app.png" alt="Create app"> </details>


### Configure Environment Variables

In the Heroku dashboard, navigate to your app's Settings and click Reveal Config Vars.

Set any required environment variables. For example, if your backend API is hosted separately, set:

REACT_APP_API_URL to https://fitshareapi-b9588b2c11b9.herokuapp.com

<details><summary>Config Vars</summary> <img src="docs/testing/user-stories-testing/create_confiq_vars.png" alt="Config Vars"> </details>


### Create a Production Build

Run the following command in your local repository to create an optimized production build:
npm run build

<details><summary>Production Build</summary> <img src="docs/testing/build_production.png" alt="Production Build"> </details>

### Deploy Your Code

Commit Your Changes:
Ensure all changes are committed:

git add .
git commit -m "Prepare frontend for deployment on Heroku"

### Set Heroku as Your Remote:
Link your local repository to the Heroku app:

heroku git:remote -a fitshare-d428ae7f1a9f


### Push Your Code to Heroku:
Deploy your code by pushing to the Heroku remote:

git push heroku main

### Verify Deployment
Check the Live Site:

### Connect to GitHub and Enable Automatic Deploys
Log in to your Heroku Dashboard and select your app.

Go to the Deploy tab.

Under Deployment method, select GitHub.

Search for your repository (e.g., Mabdillahi88/fitshare) and click Connect.

Once connected, click Enable Automatic Deploys to allow Heroku to deploy your app automatically whenever changes are pushed to the GitHub repository.

<details><summary>Connect to Heroku</summary> <img src="docs/testing/user-stories-testing/connect_heroku_github.png" alt="Connect to Heroku"> </details>

Visit https://fitshare-d428ae7f1a9f.herokuapp.com/ in your browser to confirm that the frontend is live.


### Local Setup

#### Fork & Clone the Repository

1. **Fork the Repository:**  
   Visit the [FitShare GitHub repository](https://github.com/Mabdillahi88/fitshare) and click the **Fork** button in the top-right corner to create your own copy.

2. **Clone Your Fork:**  
   In your terminal, run:
   ```bash
   git clone https://github.com/Mabdillahi88/fitshare.git
   cd fitshare

#### Install Dependencies

1. **Install the Required Dependencies:**  
   In the cloned repository's directory, run:
   ```bash
   npm install

#### Running the Application Locally

**Start the Development Server:**  
To test your application locally, run:
```bash
npm start
 
 The application will be available at [http://localhost:3000](http://localhost:3000).


## Config

### Forking the GitHub Repository
1. Go to the [FitShare GitHub repository](https://fitshare-d428ae7f1a9f.herokuapp.com/).
2. Click on the **Fork** button in the top right corner.
3. You will then have a copy of the repository in your own GitHub account.

### Making a Local Clone
1. Go to the [FitShare GitHub repository](https://fitshare-d428ae7f1a9f.herokuapp.com/).
2. Locate the **Code** button above the list of files and click it.
3. Highlight the **HTTPS** button to clone with HTTPS and copy the link.
4. Open the command-line interface on your computer.
5. Change the current working directory to the one where you want the cloned directory.
6. Type `git clone` and paste the URL from the clipboard:
   ```bash
   $ git clone https://fitshare-d428ae7f1a9f.herokuapp.com/


## Credits
### Images

All images used in this project were sourced from Google Images under free-use and no-copyright licensing. Every effort was made to ensure the images comply with free-use terms. These include images for the landing page, posts, and icons used across the site. If there are any issues with the usage of these images, please feel free to contact me for attribution or removal.

### Code

This project was heavily inspired by the ['Moments'](https://github.com/Code-Institute-Solutions/moments) social media platform, which was a final walk-through project with Code Institute. 

### Acknowledgements

First and foremost, my heartfelt gratitude goes to my wife, Filsan. Her unwavering patience, support, and understanding have been the backbone of this project. Balancing time between our young ones and this project was made feasible due to her continuous encouragement.

I'd also like to extend a thank you to my mentor, Mo Shami. 

