/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as UserHome} from './user-home'
export {default as AddTask} from './addTask'
export {default as TaskList} from './taskList'
export {default as TasksSuggested} from './TasksSuggested'
export {default as EventTabs} from './EventTabs'
export {default as EventApp} from './EventApp'
export {Login} from './LoginPage'
export {Signup} from './auth-form'
export {default as EventForm} from './AddEventForm'
export {default as EventDetails} from './EventDetails'
export {default as InviteForm} from './InviteForm'
export {default as Vote} from './Vote'
export {default as PollForm} from './PollForm'
