# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `GET /api/users/:id`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Categories

- `GET /api/categories`
- `GET /api/categories/:id`


### Concepts

- `GET /api/concepts`
- `GET /api/concepts?title=search_title`
- accepts `title` query param to searched list concepts
- `GET /api/concepts/:id`
- `POST /api/concepts`
- `PATCH /api/concepts/:id`
- `DELETE /api/concepts/:id`


### Comments

- `POST /api/concepts/:concept_id/comments`
- `PATCH /api/concepts/:concept_id/comments_id`
- `DELETE /api/concepts/:concept_idcomments/:id`
