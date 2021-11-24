## Application architecture

#### Overall architecture

<img src="Architecture.png" width="500"/>

#### Code architecture

*front*
- api: api to interact with backend
- app: main file of the app
- components: reusable components for pages
- components/__tests__: tests for components
- pages: compositions of components
- pages:__tests__: tests for pages

*Library-Backend/src/main/java*
- controllers: composition of endpoints
- dto: base objects for endpoints
- entities: entities in the db
- repositories: layer between the db and backend
- services: helper functions

*Library-Backend/src/test*
- BookControllerTest: tests for all apis