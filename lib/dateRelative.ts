import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

export const distanceToNow = (dateTime: string) => {
  const time = new Date(dateTime)
  return formatDistanceToNowStrict(time, {
    addSuffix: true,
  })
}
export const formatDate = (dateTime: string) => {
  let reg = /\d{4}-\d{2}-\d{2}/
  const time = reg.exec(dateTime)
  const arg = time[0].split('-')

  return `${arg[0]}年${arg[1]}月${arg[2]}日`
}

export const distanceToNowHour = (dateTime:string) =>{
  // const timeReg = /\d{4}-\d{2}-\d{2}/
  // const start = timeReg.exec(dateTime)
  // const now = new Date()
  // const hour = now.getHours()
  // const day = now.getDay() - parseInt(start[2])
  // const month = now.getMonth() - parseInt(start[1])
  // const year = now.getFullYear()-parseInt(start[0])
  // const caculateTime = 
  const time = new Date(dateTime).getTime()
  
  const now = new Date().getTime()
  const last = parseInt(((now-time)/1000/3600).toString())
  return last
}
export const formatMonth = (dateTime: string) => {
  let reg = /\d{4}-\d{2}/
  const time = reg.exec(dateTime)
  const arg = time[0].split('-')

  return `${arg[0]}年${arg[1]}月`
}


export const formatDay = (dateTime: string) => {
  let reg = /\d{4}-\d{2}-\d{2}/
  const time = reg.exec(dateTime)
  const arg = time[0].split('-')

  return `${arg[1]}月${arg[2]}日`
}