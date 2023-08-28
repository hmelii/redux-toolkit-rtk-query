import { actions as favoritesActions } from './favorites/favorites.slice'
import { actions as userActions } from './user/user.slice'
import * as userAsyncActions from './user/user.actions'

console.log('userActions', userActions)
const rootActions = {
  ...favoritesActions,
  ...userActions,
  ...userAsyncActions
}
export default rootActions
