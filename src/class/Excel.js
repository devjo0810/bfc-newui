import * as XLSX from 'xlsx'

const DEFAULT_SHEET_NAME = 'sheet1'
const DEFAULT_HEADER_OPTION = { origin: 'A1' }
const DEFAULT_EXPORT_OPTION = { compression: true }
const FILE_POST_FIX = '.xlsx'
const FIRST_SHEET_INDEX = 0
const DEFAULT_READ_SHEET_OPTION = { header: 1 }

export default class Excel {
  constructor({ fileName, sheetName, headers, rows, readFile, readColumnNames }) {
    // create options
    this.fileName = fileName + FILE_POST_FIX
    this.sheetName = sheetName || DEFAULT_SHEET_NAME
    this.headers = headers // ['headerName1', 'headerName2'...]
    this.rows = rows
    this.workbook = null
    this.worksheet = null

    // read options
    this.readFile = readFile // array buffer data
    this.readColumnNames = readColumnNames // ['columnName1', 'columnName2'...]
  }

  /* excel export functions start */
  create() {
    this.validateCreate()
    this.createWorkbook()
    this.createWorksheet()
    this.bookAppendSheet()
    this.fixHeaders()
    return this
  }

  validateCreate() {
    if (!this.fileName) {
      throw Error('fileName is empty...')
    }

    if (!this.rows || !this.rows.length) {
      throw Error('rows is empty...')
    }
  }

  createWorkbook() {
    this.workbook = XLSX.utils.book_new()
  }

  createWorksheet() {
    this.worksheet = XLSX.utils.json_to_sheet(this.rows)
  }

  bookAppendSheet() {
    XLSX.utils.book_append_sheet(this.workbook, this.worksheet, this.sheetName)
  }

  fixHeaders() {
    XLSX.utils.sheet_add_aoa(this.worksheet, [this.headers], DEFAULT_HEADER_OPTION)
  }

  export() {
    XLSX.writeFile(this.workbook, this.fileName, DEFAULT_EXPORT_OPTION)
  }
  /* excel export functions end */

  /* excel read functions start */
  read() {
    this.validateRead()
    this.readExcelFile()
    this.readWorkbook()
    this.readWorkSheet()
    this.readRowByNames()
    return this
  }

  validateRead() {
    if (!this.readFile) {
      throw Error('readFile is empty...')
    }
  }

  readExcelFile() {
    this.workbook = XLSX.read(this.readFile)
  }

  readWorkbook() {
    this.worksheet = this.workbook.Sheets[this.workbook.SheetNames[FIRST_SHEET_INDEX]]
  }

  readWorkSheet() {
    this.rows = XLSX.utils.sheet_to_json(this.worksheet, DEFAULT_READ_SHEET_OPTION)
  }

  readRowByNames() {
    if (!this.readColumnNames) return
    this.rows = this.rows.map(row =>
      row.reduce((obj, value, index) => {
        obj[this.readColumnNames[index]] = value
        return obj
      }, {})
    )
  }
  /* excel read functions end */
}