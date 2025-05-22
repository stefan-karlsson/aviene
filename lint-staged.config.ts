export default {
    "*.{js,mjs,cjs,jsx,ts,mts,cts,tsx,md,html,css}":{ 
        title: 'Lint and format',
        task: async (stagedFiles: string[]) =>  [
            `eslint --fix`, 
            `prettier --ignore-unknown --write ${stagedFiles.join(' ')}`
        ]
    }
  }