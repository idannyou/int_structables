```json
{
  session: {
    currentUser: {
      id: 1,
      username: "TurnUpCalc@gmail.com",
    },
    signedIn: true
  },

  errors: {
    username: ["Username is taken"],
    password: ["Password can't be blank"]
  },

  loading: false,

  categories: {
    1: {
      title: "Integral",
      suggestion: conceptObject1
    },
    2: {
      title: "Derivative",
      suggestion: conceptObject2
    }
  },

  concepts: {
    index: {
      category: categoryTitle, / "search result"
      items {
        1: {
          title: "Concept Index1",
          user: userId,
          concept_image_url: "image_url"
        },
        2: {
          title: "Concept Index2",
          user: userId,
          concept_image_url: "image_url",
        }
      },
    detail: {
        id: 1,
        title: "Concept Index1",
        description: "How to take Derivatives?",
        equations: ["limits", "addition", "subtraction", "power", "multiplication", "division"],
        instruction: "detailed instructions...",
        user: userObject,
        comments: [commentOb1, commentOb2],
        concept_image_url: "image.jpg",
        video_url: "video_url"
      },
    }
  },


  search: {
    1: {
      title: "Found Concept 1",
      concept_image_url: "image.jpg"
    },
    2: {
      title: "Found Concept 2",
      concept_image_url: "image.jpg"
    }
  }
}
```
