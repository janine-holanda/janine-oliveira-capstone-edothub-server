# E.Hub

## Overview

Event Hub is a web application designed to make event management easier within corporate environments. Employees can easily order food and beverages for their internal events, such as meetings and conferences. The event management team receives these orders and ensures all requirements are met efficiently

### Problem Space

Currently, our event management process is inefficient and prone to errors. We have many clients, but only two managers who handle all received orders through both a website and emails. This dual-channel system forces managers to constantly switch between platforms, making it difficult to keep track of orders.

Additionally, once an order is placed on the website, clients cannot modify it. If the event team needs more information, they must communicate via email, leading to back-and-forth exchanges. This process is complicated and often results in mistakes and rework for the operational team.

Event Hub aims to centralize all communication related to event orders within the application, eliminating the need for email exchanges. Clients can place and update orders directly through the app, and managers can request additional information and receive updates easily. This will simplify the process, reduce errors, and improve overall efficiency.

### User Profile

Event Hub will have two types of users: event hosts and event managers.

#### Event Hosts: These are the clients who organize events within the company. They can:
* Make an order, update or cancel an order
* View their order status and details
* Send messages to the event managers

#### Event Managers: These users are responsible for managing the event orders. They can:
* Receive and review orders, accept or decline orders
* View order details
* Send messages to event hosts

#### Special considerations:

* The app must be user-friendly and intuitive to ensure that employees of all technical skill levels can use it effectively.
* Real-time updates and notifications are crucial to keep both event hosts and event managers informed about the status of orders and any changes.
* At the beginning, the application will not include authentication and authorization features. Instead, users will select their role (event host or event manager) from the homepage.

### Features

#### Event Hosts:
1) Order Creation: I want to create an order for food and beverages for my event, so that I can ensure all necessary items are arranged.
2) Order Cancellation: I want to cancel an order, so that I can manage changes in event plans.
3) Order Update: I want to update an existing order, so that I can make changes to the event requirements as needed.
4) Order Status and Details: I want to view the status and details of my order, so that I can stay informed about its progress.
5) Messaging System: I want to send messages to the event managers regarding my order, so that I can communicate any additional information or changes.

#### Event Managers:
1) Order Review: I want to review incoming orders, so that I can understand the requirements and plan accordingly.
2) Order Acceptance: I want to accept an order, so that I can confirm the event arrangements.
3) Order Decline: I want to decline an order, so that I can manage requests that cannot be fulfilled.
4) Order Details Access: I want to view the details of each order, so that I can ensure all requirements are met.
5) Messaging System:: I want to send messages to the event hosts regarding their orders, so that I can request additional information or provide updates.

## Implementation

### Tech Stack

* Front-End: React, CSS, SASS???, react-toastify.
  - https://ui.shadcn.com/
  - https://tailwindcss.com/
  - https://www.radix-ui.com/icons
  
* Back-End: NodeJS, REST API, Express

### APIs

External apis will not be used.

### Sitemap

#### Home Page
Description: This page provides a brief description of the company and the application. It includes two links for users to choose their role: event manager or client.

#### Event List Page
Description: This page is shared by both managers and clients. It displays a list accepted events of the day and a list with created events to be reviewed. Each row includes:

* Event ID
* Host name
* Event date
* Checkmarks for breakfast, AM break, lunch, and PM break
* Status (Reviewing, Accepted, Need More Info, Accepted and Need More Info, Declined, Cancelled, Completed)
* Button to show event details and send messages.

Additional Features:
* For managers: Additional buttons to review and decline orders.
* For clients: A button to cancel orders.

#### Event Details Page
Description: This page is also shared by both managers and clients. It shows all event information, conversation fields (name and comment), button to send a comment and the comments history related to the event.

Additional Features:
* For clients: Ability to edit order details and update the order.
* For managers: A button to accept the order or decline.

#### Create an Order Page
Description: Only accessible by clients. This page contains a form for creating an order with the following inputs:

* Location (room where the event will happen)
* Quantity of people
* Event date
* Event start time
* Event end time
* Event name
* Host name
* Checkboxes for breakfast, AM break, lunch, and PM break. Each checkbox (e.g., breakfast) opens a section with more options:
* Beverage options: Coffee, water, pops, juices, sparkling water, tea, decaf
* Food options: Dropdown menu to choose the menu, with menu items displayed next to the dropdown. Clients can see but not choose individual items.
* Similar sections for AM break, lunch, and PM break, with dropdown menus for food options.

### Mockups

## STYLE

* Logo created on Canvas software - https://www.canva.com/
* Pallete colors chosen from coolors - https://coolors.co/
* Typography - Google fonts (Poppins) - https://fonts.google.com/
* Icons - https://fonts.google.com/icons
* Mockup - ????

### Data

#### Order Table
Columns:

* order_id (Primary Key): Unique identifier for each order
* location: Room where the event will happen
* number_of_guests: Number of people attending the event
* event_date: Date of the event
* event_start_time: Start time of the event
* event_end_time: End time of the event
* event_name: Name of the event
* host_name: Name of the event host
* breakfast: Boolean indicating if breakfast is included
* am_break: Boolean indicating if AM break is included
* lunch: Boolean indicating if lunch is included
* pm_break: Boolean indicating if PM break is included
* Beverage Options (all Booleans): coffee, water, pops, juices, sparkling_water, tea, decaf
* Food Menus:
* breakfast_menu: Selected food menu for breakfast
* am_break_menu: Selected food menu for AM break
* lunch_menu: Selected food menu for lunch
* pm_break_menu: Selected food menu for PM break
* status: Status of the order (Reviewing, Accepted, Need More Info, Accepted and Need More Info, Declined, Cancelled, Completed)
* timestamp: Time when the order was created

#### Conversation Table
Columns:

* conversation_id (Primary Key): Unique identifier for each conversation
* order_id (Foreign Key): References order_id in the Order Table
* message: Text of the message
* name: Text of the name
* role: Indicates if the sender is a client or manager
* timestamp: Time when the message was sent

### Endpoints

1) Get Order List
Method: GET
Endpoint: /api/orders
Response: 
 {
    "order_id": 1,
    "host_name": "John Doe",
    "event_date": "2024-10-20",
    "status": "Reviewing",
    "breakfast": true,
    "am_break": false,
    "lunch": true,
    "pm_break": false
  }

2) Get Order Details
- Method: GET
- Endpoint: /api/orders/:order_id
- Parameters: order_id
- Response: 
{
  "order_id": 1,
  "location": "Conference Room A",
  "quantity_of_people": 50,
  "event_date": "2024-10-20",
  "event_start_time": "09:00",
  "event_end_time": "17:00",
  "event_name": "Annual Meeting",
  "host_name": "John Doe",
  "breakfast": true,
  "am_break": false,
  "lunch": true,
  "pm_break": false,
  "beverage_options": {
    "coffee": true,
    "water": true,
    "pops": false,
    "juices": true,
    "sparkling_water": false,
    "tea": true,
    "decaf": false
  },
  "food_menus": {
    "breakfast_menu": "Continental 1",
    "am_break_menu": null,
    "lunch_menu": "Buffet 1",
    "pm_break_menu": null
  },
  "status": "Reviewing",
  "timestamp": "2024-10-15T10:00:00Z"
}

3) Post an Order
- Method: POST
- Endpoint: /api/orders
- Parameters: Order data (body parameters)
- Response: 
{
  "order_id": 3,
  "message": "Order created successfully"
}

4) Update an Order
- Method: PUT
- Endpoint: /api/orders/:order_id
- Parameters: order_id (path parameter), updated order data (body parameters)
- Response:
{
  "message": "Order updated successfully"
}

5) Delete an Order
- Method: DELETE
- Endpoint: /api/orders/:order_id
- Parameters: order_id (path parameter)
- Response:
{
  "message": "Order deleted successfully"
}

6) Get Messages for Order
- Method: GET
- Endpoint: /api/orders/:order_id/messages
- Parameters: order_id (path parameter)
- Response: 
{
    "conversation_id": 1,
    "order_id": 1,
    "message": "Can you confirm the number of attendees?",
    "name": "Jane Doe"
    "sender": "manager",
    "timestamp": "2024-10-15T10:00:00Z"
  }

7) Post a Message
- Method: POST
- Endpoint: /api/orders/:order_id/messages
- Parameters: order_id (path parameter), message data (body parameters)
- Response:
{
  "conversation_id": 3,
  "message": "Message sent successfully"
}

## Roadmap

#### October 15: Design Phase
- Choose a color palette - Check
- Select typography for the application - Check
- Create mockups for the main pages (Home Page, Event List Page, Event Details Page, Create an Order Page) - x

#### October 16: Initial Setup and Basic Functionality
- Set up the project repository and initial React application - Check
- Implement the Home Page with role selection - Check

#### October 17: Create Order Form (Frontend)
- Develop the Create an Order Page with all form inputs (location, quantity of people, event date, etc.).
- Implement checkboxes and dropdowns for food and beverage options.

#### October 18: Create Order Endpoint (Backend)
- Design and set up the initial JSON data structure and initial server set up
- Develop the POST endpoint for creating an order.
- Test the Create an Order Page with the backend to ensure data is correctly saved.

#### October 19: Event List Page (Frontend)
- Implement the Event List Page layout.

#### October 20: Get Order List Endpoint (Backend)
- Develop the GET endpoint for retrieving the order list.
- Test the Event List Page with the backend to ensure data is correctly displayed.

#### October 21: Event Details Page (Frontend)
- Implement the Event Details Page layout.
- Add functionality to display order details and conversation history.

#### October 22: Get Order Details Endpoint (Backend)
- Develop the GET endpoint for retrieving order details.
- Test the Event Details Page with the backend to ensure data is correctly displayed.

#### October 23: Messaging System (Frontend)
- Implement the messaging system on the Event Details Page.
- Add input fields for sending messages.

#### October 24: Messaging Endpoints (Backend)
- Develop the GET and POST endpoints for messages.
- Test the messaging system with the backend to ensure messages are correctly sent and received.

#### October 25: Status Update Functionality (Frontend and Backend)
- Implement status update buttons on the Event Details Page for managers.
- Develop the PUT endpoint for updating order status.
- Test the status update functionality to ensure it works correctly.

#### October 26-27: Final Testing and Adjustments
- Conduct thorough testing of all features.
- Fix any bugs and make final adjustments.
- Ensure the application is fully functional and ready for submission.

## Future Implementations
1) Responsive Design: Ensure the application is responsive to both tablet and desktop screens.
2) Database Integration: Connect the database with a MySQL server and use Knex for database queries. Initially, the project will use JSON data.
3) Event List Filtering: Implement a calendar library to filter the event list by date.
4) Login Page, Authentication, and Authorization: Implement a login page and create a users table to manage authentication and authorization.
5) Email Notifications: Send email notifications to clients with updates on their order status.
6) Menu Page for Clients: Add a page where clients can view all menu items and dietary restrictions. This will require an additional table called menu.
7) Menu Management for Managers: Add a page where managers can edit menus, add new menus, and add menu items. This will also require the menu table.
8) Dietary Restrictions: Include a section for clients to specify dietary restrictions.
9) Add footer with tools used to build the application. 
10) Add Toastify to tell information to users.






