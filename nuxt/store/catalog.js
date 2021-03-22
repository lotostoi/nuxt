

export const state = () => ({
    catalog: []
})

export const getters = {

    catalog: state => state.catalog
}
export const mutations = {

    setCatalog(state, catalog) {
        state.catalog = catalog
    },
}

export const actions = {

    async getCatalog({ commit }) {
        try {
            let catalog = await this.$axios.$get('/test/catalog')


            catalog = catalog.map((good) => {
                good.img = require(`@/assets/img/${good.img}`)
                return good
            })
            commit('setCatalog', catalog)

        } catch (e) {
            console.log(e)
        }

    },

}