# TODO
- create base components: <Input /> <Button /> <Link />...

# GUIDES
- use Yarn
- decouple every component with effects (side effects, actions, etc.) to container and pure component pair
- keep side effects in actionCreators (thunks)
- probably would not use rxjs as this is gonna be small

# NOTES
- redux-actions
- reselect // ¯\\\_(ツ)\_/¯
- styled-components?
- `"Rails-style: separate folders for “actions”, “constants”, “reducers”, “containers”, and “components"`
- create component/container pair + tests boilerplate script: ('name') => { createContainer('name', { tests: true }), createComponent('name', { tests: true }) }