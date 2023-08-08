import Excel from '@/class/Excel'

export const exportExcel = (
  fileName,
  sheetName,
  headers,
  rows
) => {
  const excel = new Excel({
    fileName, sheetName, headers, rows
  })
  excel.create().export()
}

export const readExcel = (file, readColumnNames) => new Promise((resolve) => {
  const fileReader = new FileReader()
  fileReader.onload = function () {
    const readFile = fileReader.result
    const excel = new Excel({ readFile, readColumnNames })
    excel.read()
    resolve(excel)
  }
  fileReader.readAsArrayBuffer(file)
})