import AppMercadoLivreExportation from '../AppMercadoLivreExportation.vue'
import AppMercadoLivreLink from '../AppMercadoLivreLink.vue'
import { BTabs, BTab } from 'bootstrap-vue'
import EcomApps from '@ecomplus/apps-manager'

export default {
  name: 'AppMercadoLivreTabs',
  components: {
    BTabs,
    BTab,
    AppMercadoLivreExportation,
    AppMercadoLivreLink
  },
  props: {
    applicationBody: () => {}
  },
  data () {
    return {
      exportationProducts: [],
      linkProducts: []
    }
  },
  methods: {
    addToExportation (value) {
      this.exportationProducts.push(value)
    },
    addToLink (value) {
      this.linkProducts.push(value)
    },
    exportLinkProducts () {
      const ecomApps = new EcomApps()
      const data = {
        data: { link_products: this.linkProducts }
      }
      ecomApps.editApplication(this.applicationBody._id, data)
        .then(() => {
          this.linkProducts = []
        })
        .catch(error => console.error(error))
    },
    exportProducts () {
      const ecomApps = new EcomApps()
      const data = {
        data: { exportation_products: this.exportationProducts }
      }
      ecomApps.editApplication(this.applicationBody._id, data)
        .then(() => {
          this.exportationProducts = []
        })
        .catch(error => console.error(error))
    },
    getCheckedClass (value) {
      return value ? 'fa fa-check' : 'fa fa-close'
    }
  }
}
