import { computed, inject, reactive } from "vue"

/**
 * 手写迷你vuex
 */

const STORE_KEY = '__store__'
function useStore() {
    // inject获取数据
    return inject(STORE_KEY)
}

function createStore(options) {
    return new Store(options)
}

class Store {
    // 构造函数
    constructor(options) {
        this.$options = options
        this._state = reactive({
            data: options.state()
        })
        this._mutations = options.mutations
        this._actions = options.actions
        this.getters = {}

        Object.keys(options.getters).forEach(name => {
            const fn = options.getters[name]
            this.getters[name] = computed(() => fn(this.state))
        })
    }

    get state() {
        return this._state.data
    }

    commit = (type, payload) => {
        const entry = this._mutations[type]
        entry && entry(this.state, payload)
    }

    dispatch(type, payload) {
        const entry = this._actions[type]
        return entry && entry(this, payload)
    }


    // main.js 入口处app.use(store)的时候，会执行这个函数
    install(app) {
        app.provide(STORE_KEY, this)
    }
}

export { createStore, useStore }