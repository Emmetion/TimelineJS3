import PublicGoogleSheetsParser from 'public-google-sheets-parser'

export default {
  data () {
    return {
      items: [],
    }
  },
  computed: {
    parser () {
      return new PublicGoogleSheetsParser()
    },
  },
  methods: {
    async getItems (spreadsheetId) {
      this.items = await this.parser.parse(spreadsheetId)
    },
  },
}
