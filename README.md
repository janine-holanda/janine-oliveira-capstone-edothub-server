# E.Hub

## Instructions 

EdotHub backend repo work together with EdotHub frontend repo:
https://github.com/janine-holanda/janine-oliveira-capstone-edothub

Step-by-step instructions for setting up the project locally:

1) npm install

2) create .env file locally using the .env.sample file

3) npm run dev

## Overview

Event Hub is a web application designed to make event management easier within corporate environments. Employees can easily order food and beverages for their internal events, such as meetings and conferences. The event management team receives these orders and ensures all requirements are met efficiently

### Problem Space

Currently, our event management process is inefficient and prone to errors. We have many clients, but only two managers who handle all received orders through both a website and emails. This dual-channel system forces managers to constantly switch between platforms, making it difficult to keep track of orders.

Additionally, once an order is placed on the website, clients cannot modify it. If the event team needs more information, they must communicate via email, leading to back-and-forth exchanges. This process is complicated and often results in mistakes and rework for the operational team.

Event Hub aims to centralize all communication related to event orders within the application, eliminating the need for email exchanges. Clients can place and update orders directly through the app, and managers can request additional information and receive updates easily. This will simplify the process, reduce errors, and improve overall efficiency.

### User Profile

Event Hub will have two types of users: event hosts and event managers.

#### Event Hosts: These are the clients who organize events within the company. They can:
* Create an order, update or delete an order
* View their order status and details
* Send messages to the event managers

#### Event Managers: These users are responsible for managing the event orders. They can:
* Accept, decline or delete an order
* View order details
* Send messages to event hosts

#### Special considerations:

* The app must be user-friendly and intuitive to ensure that employees of all technical skill levels can use it effectively.
* Real-time updates and notifications are crucial to keep both event hosts and event managers informed about the status of orders and any changes.
* At the beginning, the application will not include authentication and authorization features. Instead, users will select their role (event host or event manager) from the homepage.

### Features

#### Event Hosts:
1) Order Creation: I want to create an order for food and beverages for my event, so that I can ensure all necessary items are arranged.
2) Order Cancellation: I want to delete an order, so that I can manage changes in event plans.
3) Order Update: I want to update an existing order, so that I can make changes to the event requirements as needed.
4) Order Status and Details: I want to view the status and details of my order, so that I can stay informed about its progress.
5) Messaging System: I want to send messages to the event managers regarding my order, so that I can communicate any additional information or changes.

#### Event Managers:
1) Order Review: I want to review incoming orders, so that I can understand the requirements and plan accordingly.
2) Order Acceptance: I want to accept an order, so that I can confirm the event arrangements.
3) Order Decline: I want to decline an order, so that I can manage requests that cannot be fulfilled.
4) Order Cancellation: I want to delete an order, so that I can manage requests that cannot be fulfilled.
5) Order Details Access: I want to view the details of each order, so that I can ensure all requirements are met.
6) Messaging System:: I want to send messages to the event hosts regarding their orders, so that I can request additional information or provide updates.

## Implementation

### Tech Stack

* Front-End: React, CSS, react-toastify.
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
Description: This page is shared by both managers and clients. It displays a list accepted events of the day and a list with created events to be reviewed. Each row/card includes:

* Event ID
* Host name
* Event date
* Checkmarks for breakfast, AM break, lunch, and PM break
* Status (New Order, Accepted, Modified, Declined, Cancelled)
* Clinking on the row/card will open order details page

Additional Features:
* For managers: Button to accept,, decline or cancel an order
* For hosts: Button to cancel orders.

#### Event Details Page
Description: This page is also shared by both managers and clients. It shows all event information, conversation fields (name and comment), button to send a comment and the comments history related to the event.

Additional Features:
* For clients: Ability to edit order details and update the order.

#### Create an Order Page
Description: Only accessible by clients. This page contains a form for creating an order with the following inputs:

* Location (room where the event will happen)
* Quantity of people
* Event date
* Event start time
* Event end time
* Event name
* Host name
* Checkboxes for Services such as breakfast, AM break, lunch, and PM break. Also, Beverage options: Coffee, water, pops, juices, sparkling water, tea, decaf. Each service checkbox (e.g., breakfast) opens a section with menu options:
* Food options: Dropdown menu to choose the menu.

### Mockups

## STYLE

* Logo created on Canvas software - https://www.canva.com/
* Pallete colors chosen from coolors - https://coolors.co/
* Typography - Google fonts (Poppins) - https://fonts.google.com/
* Icons - https://fonts.google.com/icons

### Data

#### Order Table
Columns:

* order_id (Primary Key): Unique identifier for each order
* event_name: Name of the event
* host_name: Name of the event host
* location: Room where the event will happen
* number_of_guests: Number of people attending the event
* event_date: Date of the event
* event_start_time: Start time of the event
* event_end_time: End time of the event
* hasBreakfast: Boolean indicating if breakfast is included
* hasAmBreak: Boolean indicating if AM break is included
* hasLunch: Boolean indicating if lunch is included
* hasPmBreak: Boolean indicating if PM break is included
* beverage_options (object) with Booleans: hasCoffee, hasWater, hasPops, hasJuices, hasSparklingWater, hasTea, hasDecaf
* service_options (object):
* breakfast_menu: Selected food menu for breakfast
* am_break_menu: Selected food menu for AM break
* lunch_menu: Selected food menu for lunch
* pm_break_menu: Selected food menu for PM break
* status: Status of the order (Reviewing, Accepted, Need More Info, Accepted and Need More Info, Declined, Cancelled, Completed)
* created_timestamp: Time when the order was created
* updated_timestamp: Time when the order was updated

#### Conversation Table
Columns:

* comment_id (Primary Key): Unique identifier for each conversation
* order_id (Foreign Key): References order_id in the Order Table
* name: Text of the name
* role: Indicates if the sender is a client or manager
* comment: Text of the comment
* timestamp: Time when the message was sent

### Endpoints

1) Get Order List
Method: GET
Endpoint: /api/orders

2) Get Order Details
- Method: GET
- Endpoint: /api/orders/:order_id
- Parameters: order_id

3) Post an Order
- Method: POST
- Endpoint: /api/orders
- Parameters: Order data (body parameters)

4) Update an Order
- Method: PUT
- Endpoint: /api/orders/:order_id
- Parameters: order_id (path parameter), updated order data (body parameters)

5) Delete an Order
- Method: DELETE
- Endpoint: /api/orders/:order_id
- Parameters: order_id (path parameter)

6) Get Messages from Order
- Method: GET
- Endpoint: /api/orders/:order_id/messages
- Parameters: order_id (path parameter)

7) Post a Message
- Method: POST
- Endpoint: /api/orders/:order_id/messages
- Parameters: order_id (path parameter), message data (body parameters)

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
11) Add modal.






