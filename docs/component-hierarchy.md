## Component Heirarchy

**SessionFormContainer**
- SignUp/SignInForm

**HomeContainer**
- Home
- NavBar
- CategoryIndexContainer
  - CategoryIndex
  - CategoryDetailContainer
    - CategoryDetail

**ConceptIndexContainer**
- ConceptIndex
  - ConceptIndexItem

**ConceptDetailContainer**
- ConceptDetail
- CommentIndexContainer
  - CommentIndex
    - CommentIndexItem
- CommentFormContainer
  - CommentForm

**ConceptFormContainer**
- ConceptForm

**SearchFormContainer**


## Routes

|Path                                                | Component               |
|----------------------------------------------------|-------------------------|
| "/sign-up"                                         | "SignUpFormContainer"   |
| "/sign-in"                                         | "SignInFormContainer"   |
| "/"                                                | "HomeContainer"         |
| "/user-info"                                       | "UserInfoContainer"     |
| "/concept/categoryTitle(/title=search_title)"      | "ConceptIndexContainer" |
| "/concept/conceptTitle"                            | "ConceptDetailContainer"|
| "/concept/conceptTitle/edit"                       | "ConceptFormContainer"  |
| "/new-concept"                                     | "ConceptFormContainer"  |
