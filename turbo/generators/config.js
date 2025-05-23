module.exports = function generator(plop) {
  plop.setGenerator("service", {
    description: "Create a new service",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the service? (You can skip the `@aviene/` prefix)",
      },
    ],
    actions: [
      {
        type: "addMany",
        templateFiles: "templates/node-service/**/*",
        base: "templates/node-service",
        destination: "{{ turbo.paths.root }}/services/{{dashCase name}}/",
      },
    ],

  });

  plop.setGenerator("package", {
    description: "Create a new package",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the package? (You can skip the `@aviene/` prefix)",
      },
      {
        type: "list",
        name: "type",
        message: "What is the target environment for this package? (Where will it be used?)",
        choices: ["server", "browser", "workspace"],
      },
    ],
    actions: [
      {
        type: "addMany",
        templateFiles: "templates/node-package/**/*",
        base: "templates/node-package",
        destination: "{{ turbo.paths.root }}/packages/{{type}}/{{dashCase name}}/",
      },
    ]
  });
};
