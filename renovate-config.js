module.exports = {
    globalExtends: ["config:recommended"], // using this instead of "extends" solves the problem with order of the configuration
    repositories: ['stefan-karlsson/aviene'],
    baseBranches: ["main"],
    commitBody: "Signed-off-by: {{{gitAuthor}}}",
    dependencyDashboard: true,
    allowedPostUpgradeCommands: ['^pnpm install'],
    packageRules: [
        {
            // Group all non-major dependencies together
            "groupName": "all non-major dependencies",
            "groupSlug": "all-minor-patch",
            "matchPackageNames": ["*"],
            "matchUpdateTypes": ["minor", "patch"],
            "postUpgradeTasks": {
                "commands": ["pnpm install"],
                "fileFilters": ["**/**"],
                "executionMode": "branch"
            }
        },
        {
            // Require dashboard approval for major updates
            "matchUpdateTypes": ["major"],
            "dependencyDashboardApproval": true,
        }
    ],
    printConfig: true,
    labels: ['dependencies'],
    dependencyDashboardLabels: ['dependencies'],
    commitMessagePrefix: 'chore: ',
    prHourlyLimit: 0 // removes rate limit for PR creation per hour
};