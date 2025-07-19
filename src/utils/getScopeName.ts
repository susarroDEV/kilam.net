export const getScopeName = (scope: string, lang: string): string => {
  switch (lang) {
    case 'es':
      return getScopeNameES(scope)
    case 'en':
      return getScopeNameEN(scope)
    case 'ca':
      return getScopeNameCA(scope)
    case 'eu':
      return getScopeNameEU(scope)
    case 'gl':
      return getScopeNameGL(scope)
    default:
      return 'PLACEHOLDER'
  }
}

const getScopeNameES = (scope: string): string => {
  switch (scope) {
    case 'art':
      return 'Audiovisual'
    case 'game-design':
      return 'Diseño'
    case 'development':
      return 'Desarrollo'
    case 'building':
      return 'Construcción'
    default:
      return 'PLACEHOLDER'
  }
}

const getScopeNameCA = (scope: string): string => {
  switch (scope) {
    case 'art':
      return 'Audiovisual'
    case 'game-design':
      return 'Disseny'
    case 'development':
      return 'Desenvolupament'
    case 'building':
      return 'Construcció'
    default:
      return 'PLACEHOLDER'
  }
}

const getScopeNameEN = (scope: string): string => {
  switch (scope) {
    case 'art':
      return 'Audiovisual'
    case 'game-design':
      return 'Design'
    case 'development':
      return 'Developing'
    case 'building':
      return 'Building'
    default:
      return 'PLACEHOLDER'
  }
}

const getScopeNameEU = (scope: string): string => {
  switch (scope) {
    case 'art':
      return 'Ikus-entzunezkoa'
    case 'game-design':
      return 'Diseinua'
    case 'development':
      return 'Garapena'
    case 'building':
      return 'Eraikuntza'
    default:
      return 'PLACEHOLDER'
  }
}

const getScopeNameGL = (scope: string): string => {
  switch (scope) {
    case 'art':
      return 'Audiovisual'
    case 'game-design':
      return 'Deseño'
    case 'development':
      return 'Desenvolvemento'
    case 'building':
      return 'Construción'
    default:
      return 'PLACEHOLDER'
  }
}

