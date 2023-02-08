/**
 * this takes the data from the api and formats it into an array
 * @param data
 * @returns data[]
 */
export function formatFilmsToArray(data: any) {
  return Object.keys(data).map(key => {
    return { key, value: data[key] }
  })
}
