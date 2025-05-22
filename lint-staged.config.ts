export default {
    "*.{js,mjs,cjs,jsx,ts,mts,cts,tsx,md,html,css}":{ 
        title: 'Lint and format',
        task: async (stagedFiles: string[]) =>  [
            `pnpm lint:fix`, 
            `prettier --ignore-unknown --write ${stagedFiles.join(' ')}`
        ]
    }
  }