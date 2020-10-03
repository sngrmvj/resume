# Resume

My resume

## Steps to create a working webpage
- Create a project in angular.
- Create a public repository in github. 
- Push the code to the repository created.
- After that install following command 
    `npm i angular-cli-ghpages --save-dev`
- Build the project 
    `ng build --prod --base-href "https://sngrmvj.github.io/<repo_name>/"`
- Run the command 
    `angular-cli-ghpages`
- Deploy the application
    `ngh --dir=dist/<name_of_the_folder_created>`
- Notice there will be 2 branches created . 
    1. Master
    2. gh-pages
- navigate to gh-pages branch. On right side you can see environments. Under it, the URL where your app is running.

## For My resume 
- https://sngrmvj.github.io/resume/#/
