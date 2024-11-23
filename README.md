# Clone the repo to get started



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

To add , update or delete particular user:
    -To add the user click on 'Add User' option. Fill the details and Submit to add the User.
    -To edit the user click on 'Edit' then Modify the details. Previous details are already shown on the edit window.
     If you don't want to edit then submmit the previuos details.
    -To delete the user click on 'Delete' the user will be removed from database.

To add New Roles :
    - TO add the new role click on 'Add Role'.
    -Enter the role name and permissions you want to specify for the role.
    -Role name cannot be repeated, if you try to add the same role name then it will show error message.

To modify Existing roles :
    -To modify the existing role click on 'Edit Roles'.
    -Select the role from available roles through dropdown.
    -Add or remove the permissions for the roles and click on 'Save Changes'.
    -The modifed role permissions will be reset to the every user.

Special Features :
    Search : User can be searched based on username through provided search box.
    Filter : Users can be filtered based on if their status is Active/Inactive.
    View   : Based on requirement either table or grid view can be applied by selecting dropdown.
             For mobile devices Grid view is by default Set to give better experience as table may not be suitable.


## Video
Below is the video of final output of the project
"https://drive.google.com/file/d/1jHCts88n2C2jglQkhOEDbor-L3SKJZa8/view?usp=sharing"