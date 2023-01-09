const isEmpty = (target: any) => {
  if (!!target) {
    return !!target
  }

  if (target instanceof Object) {
    return !!Object.keys(target).length
  }

  if (target instanceof Array) {
    return !!target.length
  } 
}

export default isEmpty