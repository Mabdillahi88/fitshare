# Fitshare <img src="/workspace/fitshare/src/assets/logo.png" style="width: 85px; height:60px;">

![Am I Responsive](docs/fitshare_responsive.jpg)

**Mohamed Abdillahi**

[Visit live website](https://fitshare-d428ae7f1a9f.herokuapp.com/)  

---

## **Table of Contents**
  - [About](#about)
  - [User Goals](#user-goals)
  - [Site Owner Goals](#site-owner-goals)
  - [User Experience](#user-experience)
  - [User Stories](#user-stories)
  - [Design](#design)
    - [Colours](#colours)
    - [Fonts](#fonts)
    - [Structure](#structure)
      - [Website Pages](#website-pages)
      - [Database](#database)
    - [Wireframes](#wireframes)
  - [Technologies Used](#technologies-used)
  - [Features](#features)
  - [Validation](#validation)
  - [Testing](#testing)
    - [Manual Testing](#manual-testing)
    - [Automated Testing](#automated-testing)
    - [Tests on Various Devices](#tests-on-various-devices)
    - [Browser Compatibility](#browser-compatibility)
  - [Bugs](#bugs)
  - [Heroku Deployment](#heroku-deployment)
  - [Credits](#credits)
  - [Acknowledgements](#acknowledgements)

---

## **About**

Fitshare is a social fitness platform that allows users to connect, share, and discover gyms and fitness routines. Users can post reviews, upload photos, and follow their favorite fitness enthusiasts to gain insights and inspiration. Fitshare aims to create a community for fitness lovers and gym-goers worldwide.

---

## **User Goals**

- To discover gyms and share experiences with the community.
- To connect with like-minded fitness enthusiasts through posts, comments, and likes.
- To easily navigate the website across different devices.
- To securely manage personal profiles and preferences.

---

## **Site Owner Goals**

- To provide a seamless platform for sharing fitness-related content.
- To create a user-friendly website with intuitive navigation and accessibility.
- To foster an engaged fitness community with interactive features.
- To ensure the site is responsive and secure for all users.

---

## **User Experience**

### **Target Audience**
- Fitness enthusiasts looking for gym reviews and recommendations.
- Individuals aiming to connect with a fitness community.
- Gym owners and fitness trainers seeking to promote their services.

### **User Requirements and Expectations**
- A fully responsive site that works seamlessly across devices.
- Easy navigation with clear and accessible content.
- Secure user authentication and privacy protection.
- A welcoming and engaging community platform.

---

## **User Stories**

### **Users**
1. As a user, I can sign up and log in to my account to access personalized features (Must Have).
2. As a user, I can create, edit, and delete posts to share my gym experiences (Must Have).
3. As a user, I can like and unlike posts to engage with the community (Must Have).
4. As a user, I can comment on posts and manage my comments (Must Have).
5. As a user, I can follow and unfollow other users to stay updated on their activities (Must Have).
6. As a user, I can search for posts by keywords to find specific content (Should Have).
7. As a user, I can view a 404 error page for invalid links (Must Have).
8. As a user, I can update my profile, including my bio and avatar (Must Have).

### **Admin / Site Owner**
1. As an admin, I can manage user accounts to ensure a safe community (Must Have).
2. As an admin, I can monitor posts and comments to maintain quality and appropriateness (Must Have).

### **Kanban, Epics & User Stories**
- Fitshare uses GitHub Kanban to manage user stories.
- Epics are divided into functionality, posts, profiles, and comments.
- The board statuses include "To Do," "In Progress," and "Done."

---

## **Design**

### **Colours**
Fitshare’s color palette combines vibrant and neutral tones to create a dynamic and modern look. The colors aim to inspire energy and focus while keeping the design clean and accessible.

<details><summary>Colour Palette</summary>
<img src="docs/colour_palette.jpg" alt="Colour Palette">
</details>

### **Fonts**
The platform uses `Roboto` for its modern and clean aesthetics, ensuring readability across devices.

### **Structure**

#### **Website Pages**
1. **Home Page:** Showcases the platform’s features and benefits.
2. **Profile Page:** Allows users to view and edit their information.
3. **Posts Page:** Displays posts from followed users or the community.
4. **Post Details:** Provides detailed views of individual posts.
5. **Authentication Pages:** Includes sign-up, login, and logout functionalities.
6. **404 Error Page:** Guides users back to the main site for invalid links.

#### **Database**
The database is powered by PostgreSQL for production, ensuring secure storage for user profiles, posts, comments, and likes.

---

## **Technologies Used**

### **Languages**
- HTML
- CSS
- JavaScript

### **Libraries, Frameworks, and Dependencies**
- React.js
- React-Bootstrap
- Axios
- JWT for authentication
- React Infinite Scroll for post loading

### **Tools & Programs**
- GitHub for version control.
- Heroku for deployment.
- Balsamiq for wireframe design.

---

## **Features**

- User authentication and profile management.
- Post creation, editing, and deletion.
- Like and comment functionality for user interaction.
- Follow/unfollow feature to connect with other users.

---

## **Validation**
- WC3 Validators for HTML and CSS validation.
- Lighthouse for performance and accessibility checks.
- Wave for accessibility evaluation.

---

## **Testing**

### **Manual Testing**
- Tested all user stories across different devices and browsers.
- Verified CRUD operations for posts, comments, and profiles.

### **Automated Testing**
- Performed unit tests for API endpoints.
- Validated authentication flows.

### **Tests on Various Devices**
- Tested responsiveness on mobile, tablet, and desktop devices.

### **Browser Compatibility**
- Tested compatibility on Chrome, Firefox, Safari, and Edge.

---

## **Bugs**
- Fixed: Profile images not updating in real-time.
- Fixed: Comments not refreshing immediately after addition.

---

## **Heroku Deployment**
1. Created a Heroku app and set up environment variables.
2. Connected the GitHub repository for automatic deployment.
3. Configured PostgreSQL for the production database.

---

## **Credits**
- Logo designed using [Canva](https://www.canva.com/).
- Icons from [Font Awesome](https://fontawesome.com/).
- Image hosting via [Cloudinary](https://cloudinary.com/).

---

## **Acknowledgements**
Special thanks to the fitness community and the inspiration provided by similar platforms like Strava.
