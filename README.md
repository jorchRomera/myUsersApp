# myUsersApp

### Install

To install the application you should run "yarn" in the root directory
  ```
  yarn
  ```
  
### Run android

To run the application on android you should just run "yarn android" in the root directory (you should have an emulator already selected)
  ```
  yarn android
  ```

### Run ios

To run the application on ios you should just run "yarn ios" in the root directory
  ```
  yarn ios
  ```
  
### Just run the server
To just run the server you should run "yarn start" in the root directory
  ```
  yarn start
  ```

### Run Tests
To run the tests
  ```
  yarn test
  ```
  
# Notes:
I haven't tested it on ios because right now I don't have a Mac or an Iphone.

# About Architecture:
I have used an MVP (Model-View-Presenter) mixed up with Clean Architecture(https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) to have a scalable and reusable front end (You can re-use everything excepts the views if you want to change react for react native, vue, backbone, have a console interface, etc...) and it's super easy to test. I could have used any state managment kind of architecture (redux, context api, etc...) but I like this one because the application is not coupled by just one framework.

# About Tests:
I have tested the usecases and the presenters.
Regarding the usecases tests, they are focused on collaboration, that's why the external parts of the application (like the HTTP layer) is mocked.
Regarding the presenters tests: the presenter has all the logic of the view, leaving the a "dumb" view. This allows to just test the presenter, which is all the view logic without interacting with implementation (react components) which tends to change a lot.
