#!/usr/bin/env node

import { execa } from 'execa'

const args = process.argv.slice(2)

// default to today's activity
if (args.length === 0) {
  args.push('today')
}

// show the whole PR/issue title
if (!args.includes('--width')) {
  args.push('--width', '5000')
}

const res = await execa('did', args)

console.info('Status Update:')
console.info('')
console.info(
  res.stdout
  .substring(res.stdout.indexOf('*'))
  .split('\n')
  .map(line => {
    if (!line.startsWith('    * ') || !line.includes('#')) {
      return line
    }

    const [title, ...rest] = line.split(' - ')
    const [repo, issue] = title.substring(6).split('#')

    if (issue == null) {
      return line
    }

    return `    * [${repo}#${issue}](https://github.com/${repo}/issues/${issue}) - ${rest.join(' - ')}`
  })
  .join('\n')
)
