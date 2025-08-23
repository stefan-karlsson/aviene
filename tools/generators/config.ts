import type { PlopTypes } from '@turbo/gen';
import path from 'node:path';

export default function generator(plop: PlopTypes.NodePlopAPI) {
  plop.setGenerator('package', {
    description: 'Create a new package',
    prompts: [
      {
        type: 'list',
        name: 'environment',
        message: 'What environment will the code run in?',
        choices: ['server', 'browser', 'universal'],
        default: 'universal',
      },
      { type: 'input', name: 'name', message: 'Package name (without scope)' },
      { type: 'input', name: 'description', message: 'Package description' },
    ],
    actions: (data: any) => {
      if (!data?.turbo?.paths) {
        throw new Error('Missing turbo.paths in data');
      }

      const { root, workspace } = data.turbo.paths;
      const env = String(data.environment);
      const name = String(data.name);

      const dest = path.join(root, 'packages', env, name);
      const source = path.join(workspace, 'templates', 'package', env);

      const actions: PlopTypes.ActionType[] = [
        {
          type: 'addMany',
          destination: dest,
          base: source,
          templateFiles: `${source}/**/*`,
          globOptions: { dot: true }, // include dotfiles (e.g. .gitignore)
          stripExtensions: ['hbs'], // remove .hbs when writing
          data, // pass prompts to templates
        },
      ];
      return actions;
    },
  });
}
