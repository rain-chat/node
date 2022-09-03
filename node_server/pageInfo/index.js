class PageInfo {
  //pageSize 页面大小
  //pageNum 当前页面
  //total 数据总量
  //data 携带数据
  constructor(pageSize = 0, pageNum = 0, total = 0, data) {
    this.pageSize = pageSize
    this.pageNum = pageNum
    this.total = total
    this.data = data
  }

  limit() {
    return this.pageSize
  }
  offset() {
    return (this.pageNum - 1) * this.pageSize
  }
}

module.exports = {
  PageInfo
}