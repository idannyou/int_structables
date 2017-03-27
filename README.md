#INT-Structables

[INT-Structables] (https://int-structables.herokuapp.com/#/)

INT-Structables is a full-stack web application inspired by Instructables, where users can share and learn Calculus Concepts. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the front end.

## Technology

### INT-Structables was built using:
- [MathQuill](http://mathquill.com/) for inputting math expressions
- [MathJax](https://www.mathjax.org/) for immediate pretty-printing of math expressions
- [jQuery](https://jquery.com/) for DOM manipulation

## Features

### Single-Page App

  INT-Structables is a single-page app. All React components are rendered on one static page specified by the React Router.

### Auth
  When user signs in or signs up, the frontend sends an AJAX request to the rails backend and creates an action accordingly. It sets the current user or returns an error with proper structure using jbuilder which makes it possible to show inline errors on every form. The app keeps the errors in the store and clears them when the user leaves the form component. For security, the frontend doesn't allow users to see the new concept form if they are not logged in, nor edit/delete other users' concepts.

### Concepts
  Concepts can have many steps. Steps can be text and/or images. MathJax is incorporated to render Latex to readable math symbols.

  ![alt text](https://github.com/idannyou/int_structables/blob/master/app/assets/images/readme/concept_1.gif "Concept Screenshot")


### Steps
  Steps can be added or removed from the Concept Edit page. Steps have their own edit page, where users can insert Latex in the step edit form.

  ![alt text](https://github.com/idannyou/int_structables/blob/master/app/assets/images/readme/steps_1.gif "Step Screenshot")

### Categories
  This app has 3 categories, Derivatives, Limits, and Integrals. Concepts can belong to none, one or more categories. When a user first visits the app, the user can view all the concepts, or filter them by category. Categories are set when the User is about to publish the concept.

  ![alt text](https://github.com/idannyou/int_structables/blob/master/app/assets/images/readme/category.gif "Categories Screenshot")

### Comment
  Users can leave comments on a concept when they are signed in.

### Database Query
  To prevent an N+1 query, when a user requests data, the controller includes related tables as shown below.

  ```ruby
    def self.find_by_title(name)
      Concept.includes(:images).joins(self.join_sql).where('categories.name ILIKE ?', name)
        .or(Concept.includes(:images).joins(self.join_sql).where('concepts.title ILIKE ?', "%#{name}%"))
        .distinct
    end
  ```

### Search feature
  When a user types into the search bar, the frontend sends an AJAX request to fetch for the files after a settable time.

  ```javascript
  handleInput(event) {
    this.setState({inputVal: event.target.value});
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.search();
    }, 1000);
  }
  ```

### Form create/edit authority and Routes
  In the frontend, users are re-routed if they try to access an edit page that is not theirs.

  ```javascript
    <Provider store={store}>
      <Router history={ hashHistory }>
        <Route path='/' component={ App } >
          <IndexRoute component={Home} />
          <Route path='concepts/new' component={ConceptNewContainer} onEnter={_ensureLoggedIn} />
          <Route path='concepts/user/:userId' component={ConceptUserContainer} onEnter={_ensureUser}/>
          <Route path='concepts/:conceptId' component={ConceptShowContainer}/>
          <Route path='concepts/:conceptId/step/:stepId' component={StepNewEditContainer}/>
          <Route path='concepts/:conceptId/step/:stepId/edit' component={StepEditContainer}/>
          <Route path='concepts/:conceptId/edit' component={ConceptEditContainer} onEnter={_ensureAuthor}/>
          <Route path='concepts/:conceptId/edit/publish' component={ConceptPublish} onEnter={_ensureAuthor}/>
          <Route path='search' component={SearchPageContainer} />
          <Route path='integral' component={SearchPageContainer} />
          <Route path='derivative' component={SearchPageContainer} />
          <Route path='limit' component={SearchPageContainer} />
    </Route>
      </Router>
    </Provider>
  ```
