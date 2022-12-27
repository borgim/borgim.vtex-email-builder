export function templateNameFormatter(unformattedName: string) {
  return (
    unformattedName
      .toLowerCase()
      .trim()
      /*
      TODO: when VTEX starts supporting ES2021, change this line below to replaceAll() method
    */
      .split(' ')
      .join('-')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
  )
}
