<h1>Design Choices Explanation</h1>

For this project, I chose a clean and intuitive design to provide an immersive and accessible user experience. My main objective was to create an interface where users can navigate easily,
highlighting essential elements like the menu, services, and city information.

Menu with Transparent Shadow Layer
The menu is placed at the top of the page with a slight shadow and a transparent layer to distinguish this section from the rest of the header. This choice adds a sense of depth without visually weighing down the page. The transparency also maintains the visual context of the background image while making the menu items easily readable.

Aesthetic Font for Headings
I selected an elegant handwritten font for the main title to create a welcoming and refined atmosphere. This choice helps capture attention and contributes to a sense of quality and sophistication, which is essential to engage users upon their arrival.

City Information Cards
The city cards are designed with a clear layout for each city: an attractive image followed by key information such as the city name, starting price, date, and a description. This helps users quickly visualize available options and gather necessary information effortlessly.

Navigation Buttons with Icons
The navigation arrows enable users to easily browse through different city cards. By adding familiar icons, I aimed to make the user experience intuitive, even for first-time visitors.

<h1>UX Challenges and Solutions</h1>
One of the main challenges in terms of user experience was finding a balance between an information-rich interface and smooth navigation:

Managing the Number of Displayed Cards
When the number of cities exceeds four, it was essential to provide a simple way to navigate without cluttering the screen. I implemented an auto-scrolling feature to allow users to browse through the cards easily, reducing cognitive load and enhancing interactivity.

Contrast and Information Readability
With the addition of shadows and transparency, I wanted to ensure that essential information remained readable, even against a potentially busy background image. I adjusted colors and added subtle blur and shadow effects to ensure that each text and button is clearly visible.

<h1>Technical Challenges and Trade-offs in Translating Design to Code </h1>

Menu Compatibility Optimization Across Screens
A technical challenge was making the menu responsive and visually appealing on different screen sizes. I made trade-offs by reducing margins and adjusting font sizes to ensure a positive experience on mobile devices.

Managing Background Images
For the city cards, I had to adjust image sizes and formats so they display correctly without harsh cropping. Using CSS for image styling helped maintain a cohesive design and high visual quality.

Dynamic Components and Data Loading
Integrating a Django API to retrieve city data required managing the synchronization of React components and asynchronous data loading. This process involved adjustments on the front end, including displaying a temporary loading state while waiting for data.

<h1>Project Logic Explanation</h1>
The Handfree Travel App is designed to enhance the travel experience by providing a seamless luggage-carrying and storage service. The main goal is to let travelers enjoy their destinations unencumbered by bags. Through the app’s intuitive interface, users can quickly locate luggage storage services available across various cities. Each city is represented by an individual card containing essential details like the name, service rate, available dates, and a short description. This card-based layout allows travelers to easily browse storage options and make informed choices about where to store their belongings during their visit.

The app's back end, built with Django, functions as a REST API, dynamically fetching up-to-date city and service data. The front end is developed in React, utilizing modular components for a clean and responsive user interface. This structure ensures that the app provides a smooth, immersive experience across all device sizes and screen resolutions.

<h1>Instructions for Viewing Designs and Running the Application</h1>
Viewing the Designs:

Open the link https://www.figma.com/design/ujUFLd5Esl5P9TvDYlmnga/Untitled?node-id=0-1&t=VAWTTQxo1P8IYSJd-1 where design is stored to review layout choices, components, and screen interactions.

<h1>Running the Application:</h1>

Clone the repository and navigate to the project directory.
Back End: Ensure Django is installed, then run python manage.py runserver in the handfree_backend folder to start the API server.
Front End: Install dependencies in the handfree_frontend folder, and run npm start to launch the React app.

<h1>Observations on the Process</h1>
During development, integrating asynchronous data loading from the Django API with React’s dynamic UI required careful handling of loading states to ensure a smooth user experience. Additionally, design adjustments were necessary to optimize the app's responsiveness across different devices, especially for the luggage card layouts. This process highlighted the importance of balancing feature complexity with user accessibility, ensuring that travelers can easily navigate and access the services they need.
