# User Management System

This project provides functionalities to manage users and roles efficiently with additional special features like search, filter, and dynamic views.




# RoleManagement

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.10.

Make sure to have angular 17 or above

# Dependency Installation
Write npm install in terminal to Install al dependencies

# Database Setup
This project uses firebase to store the data
Create one firebase account and create one database
As authentication is not implemented set read write to true for the database from any origin

# Database Url
Use you database url and replace it in 'proxy.config.json'

# CORS
To handle CORS policies proxy is being used, but you can whitelist your IP from backend or use any other method.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


## Functionalities

### **1. Manage Users**
- **Add User:**
  - Click on the **'Add User'** option.
  - Fill in the user details in the form and submit to add the user.

- **Edit User:**
  - Click on the **'Edit'** button for a specific user.
  - Modify the details in the edit window (previous details are pre-filled).
  - If no changes are required, simply submit the existing details.

- **Delete User:**
  - Click on the **'Delete'** button to remove the user from the database.

---

### **2. Manage Roles**

#### **Add New Roles**
- Click on the **'Add Role'** button.
- Enter a unique role name and specify permissions for the role.
- If a duplicate role name is entered, an error message will be displayed.

#### **Modify Existing Roles**
- Click on the **'Edit Roles'** button.
- Select the role from the available roles in the dropdown.
- Add or remove permissions as required, then click **'Save Changes'**.
- Modified permissions will automatically be applied to all users with the updated role.

---

## Special Features

### **1. Search**
- Users can be searched by their username using the provided search box.

### **2. Filter**
- Filter users based on their status (Active/Inactive).

### **3. View Options**
- Choose between **Table View** or **Grid View** using the dropdown.
- On mobile devices, **Grid View** is set as the default for a better user experience.

## Video
Below is the video of final output of the project
"https://drive.google.com/file/d/1jHCts88n2C2jglQkhOEDbor-L3SKJZa8/view?usp=sharing"