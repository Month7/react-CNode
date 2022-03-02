const cloneDeep = (obj) => {
  if (typeof obj !== 'object') return obj
  const res = {}
  for (let key in obj) {
    res[key] = cloneDeep(obj[key])
  }
  return res;
}

const originObj = {
  a: 1,
  b: 2,
  c: {
    d: 1
  }
}

const cloneObj = cloneDeep(originObj)
originObj.a = 'clone'
console.log('cloneObj', cloneObj)
