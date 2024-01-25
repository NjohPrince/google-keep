export const convertPathToPascalCase = (path: string) => {
  const words = path.slice(1).split('-')
  const pascalCasedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))

  return pascalCasedWords.join(' ')
}
