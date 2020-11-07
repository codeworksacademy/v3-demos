import { AppState } from '../AppState'

class ProfileService {
  async getProfile() {
    try {
      return new Promise((resolve, reject) => setTimeout(() => {
        AppState.profile = { name: 'Billy' }
        resolve()
      }, 1500))
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  }
}

export const profileService = new ProfileService()
