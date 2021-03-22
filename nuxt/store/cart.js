

export const state = () => ({
    cart: []
})

export const getters = {

    cart: state => state.cart
}
export const mutations = {

    setCart(state, cart) {
        state.cart = cart
    },
    addToCart(state, item) {
        state.cart.push(item)
    },
    incToCart(state, _id) {
        const index = state.cart.findIndex(({ id }) => +id === +_id)
        if (index >= 0) {
            const item = state.cart[index]
            item.amount++
            this._vm.$set(state.cart, index, item)
        }
    },

    decToCart(state, _id) {
        const index = state.cart.findIndex(({ id }) => +id === +_id)
        if (index >= 0) {
            const item = state.cart[index]
            item.amount--
            this._vm.$set(state.cart, index, item)
        }
    },

    deleteFromCart(state, _id) {
        state.cart = state.cart.filter(({ id }) => +id !== +_id)
        console.log(state.cart)
    }
}

export const actions = {

    async getCart({ commit }) {
        try {

            let cart = await this.$axios.$get('/test/cart')
            commit('setCart', cart)

        } catch (e) {
            console.log(e)
        }

    },

    async addToCart({ commit, state }, good) {
        try {
            const goodInCart = state.cart.find(({ id }) => +id === good.id)
            if (!goodInCart) {
                const goodForCart = { ...good, amount: 1 }
                const { result } = await this.$axios.$post('/test/cart/add', goodForCart)
                if (result) {
                    commit('addToCart', goodForCart)
                }
            } else {
                const { result } = await this.$axios.$put(`/test/cart/inc/${good.id}`)
                if (result) {
                    commit('incToCart', good.id)
                }
            }
        } catch (e) {
            console.log(e)
        }
    },

    async removeFromCart({ commit, state }, good) {
        try {
            if (good.amount > 1) {
                const { result } = await this.$axios.$put(`/test/cart/dec/${good.id}`)
                if (result) {
                    commit('decToCart', good.id)
                }
            } else {
                const { result } = await this.$axios.$delete(`/test/cart/delete/${good.id}`)
                if (result) {
                    commit('deleteFromCart', good.id)
                }
            }
        } catch (e) {
            console.log(e)
        }
    }
}