import { createStore } from 'vuex'

const store = createStore({
	state:{
		isMobile: false
	},
	mutations: {
		setIsMobile (state, value) {
			state.isMobile = value
		}
	}
})

export * from './types'
export default store