# TODO
- Try styled-components

# GUIDES
- use Yarn
- decouple every component with effects (side effects, actions, etc.) to container and pure component pair
- keep side effects in actionCreators (thunks)
- probably would not use rxjs as this is gonna be small

# NOTES
- redux-actions
- normalizr
- reselect // ¯\\\_(ツ)\_/¯
- `"Rails-style: separate folders for “actions”, “constants”, “reducers”, “containers”, and “components"`
- create component/container pair + tests boilerplate script: ('name') => { createContainer('name', { tests: true }), createComponent('name', { tests: true }) }