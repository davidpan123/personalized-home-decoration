import * as types from '../mutations_types'

const state = () => {
    return {
        user: {}
    }
}

const getters = {
    userName: state => state.user.name || ''
}

const actions = {
    setUser ({commit, state}, user) {
        commit(types.SET_USER, user)
    }
}

const mutations = {
    [types.SET_USER] (state, user) {
        state.system.user = user
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
