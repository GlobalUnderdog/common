const { exec } = require('child_process')
const { version } = require('./package.json')

const commands = [
  `git tag -a '${version}' -m '${version}'`,
  `git push origin ${version}`,
]

const command = commands.join(' && ')

if (process.argv.includes('--dryRun')) {
  console.log(command)
} else {
  exec(command, () => console.log(`Added and pushed tag ${version}`))
}
