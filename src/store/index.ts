import { createStore } from 'vuex'

const store = createStore({
	state:{
		isMobile: false,
		hasScrolled: false,
	},
	mutations: {
		setIsMobile (state, value) {
			state.isMobile = value
		},
		setHasScrolled (state, value) {
			state.hasScrolled = value
		}
	}
})

export * from './types'
export default store