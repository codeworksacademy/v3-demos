import { reactive } from 'vue'
import { profileService } from './services/ProfileService'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: { },
  /**
   * @type {{name: {first:string, last:string, fullname:string}}}
   */
  profile: { name: { first: '', last: '', fullname: '' } },
  services: {
    profileService
  }
})
