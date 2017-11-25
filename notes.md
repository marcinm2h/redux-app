# TODO
- WRITE TESTS!
- youtube api
- test youtube component

# GUIDES
- `"Rails-style: separate folders for “actions”, “constants”, “reducers”, “containers”, and “components"`
- use Yarn
- decouple every component with effects (side effects, actions, etc.) to container and pure component pair
- if small - create styled components in-place
- keep side effects in actionCreators (thunks)
- probably would not use rxjs as this is gonna be small
- keep YT_API_KEY in `.env` file in project's root

# NOTES
- docker
- https://github.com/jgthms/bulma
- https://github.com/prettier/prettier
- http://bluebirdjs.com
- try wrap YT api with graphql
- normalizr
- redux-actions
- reselect  ( ¯\\\_(ツ)\_/¯ )
- create component/container pair + tests boilerplate script: ('name') => { createContainer('name', { tests: true }), createComponent('name', { tests: true }) }
