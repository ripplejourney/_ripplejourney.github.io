const fs = require('node:fs')

const isDebug = true
const replaceLibWithPaths = {
  'reactive-meta-gen': [
    'C:\\AppData\\code-vsextension\\reactive-meta-gen',
    'G:\\code-vsextension\\reactive-meta-gen',
  ],
}
const addLib = {
  devDependencies: {
    json5: '^2.2.3',
    radash: '^12.1.0'
  }
}
const pkgName = JSON.parse(fs.readFileSync('./package.json', 'utf-8')).name
const pkgNames = ['add your pkg', pkgName]
module.exports = {
  hooks: {
    readPackage: (pkg, context) => {
      if (pkgNames.includes(pkg.name) === false) {
        return pkg
      }
      context.log(`'Package name:' ${pkg.name}`)
      if (isDebug) {
        Object.entries(replaceLibWithPaths)
          .forEach(([libName, libPaths]) => {
            Object.entries(pkg)
              .filter(([dependenceType, _dependencies]) => dependenceType.toLowerCase().includes('dependencies') && _dependencies[libName] !== undefined)
              .forEach(([dependenceType, _dependencies]) => {
                libPaths.forEach((libPath) => {
                  if (fs.existsSync(libPath)) {
                    pkg[dependenceType][libName] = `file:${libPath}`
                    context.log(`libName '${libName}' of dependenceType:${dependenceType} redirect to ${libPath}`)
                  }
                  else {
                    // context.log(`libName '${libName}' of dependenceType:${dependenceType} not found in ${libPath}`)
                  }
                })
              })
          })
      }
      Object.entries(addLib)
        .forEach(([dep, nameversion]) => {
          pkg[dep] = {
            ...pkg[dep],
            ...nameversion,
          }
        })
      return pkg
    },
  },
}
