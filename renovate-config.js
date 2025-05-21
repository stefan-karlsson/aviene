export default {
    timezone: "Europe/Stockholm",
    baseBranches: ["develop"],
    
    onboarding: true,
    onboardingConfig: {
        extends: ["config:recommended"]
    },
    
    requireConfig: "required",

    extends: [
        "config:recommended",
        ":dependencyDashboard",
        ":semanticCommits", 
        ":semanticPrefixFixDepsChoreOthers",
        ":automergeAll",
        ":automergeLinters",
        ":automergeTesters",
        ":automergeTypes",
        ":maintainLockFilesWeekly"
    ],

    prHourlyLimit: 0,
    prConcurrentLimit: 0,
    
    labels: ["dependencies"],
    
    schedule: ["before 3am on monday"],
    updateNotScheduled: false,
    
    stabilityDays: 3,

    prBodyColumns: ["Package", "Change", "Age", "Adoption", "Passing", "Confidence"],
    prBodyDefinitions: {
        Age: "{{#if age}}Age: {{age}}{{/if}}",
        Adoption: "{{#if adoption}}Adoption: {{adoption}}{{/if}}",
        Change: "{{#if change}}Change: {{change}}{{/if}}",
        Confidence: "{{#if confidence}}Confidence: {{confidence}}{{/if}}",
        Package: "{{#if packageName}}Package: {{packageName}}{{/if}}",
        Passing: "{{#if passing}}Passing: {{passing}}{{/if}}"
    },

    dependencyDashboardLabels: ["dependencies"],

    packageRules: [
        {
            groupName: "Patch & Minor Updates",
            groupSlug: "all-minor-patch-updates",
            matchUpdateTypes: ["minor", "patch"],
            prCreation: "immediate",
            prPriority: 4,
            minimumReleaseAge: "3 days",
            matchPackageNames: ["*"],
        },
        {
            matchPaths: ["packages/**"],
            extends: ["config:js-lib"]
        },
        {
            matchPaths: ["apps/**", "services/**"],
            extends: ["config:js-app"] 
        }
    ],

    major: {
        automerge: false,
        prCreation: "immediate",
        minimumReleaseAge: "3 days",
        dependencyDashboardApproval: true,
    },

    vulnerabilityAlerts: {
        enabled: true,
        labels: ["security"],
    },

    allowedCommands: ["^pnpm install"],
    postUpgradeTasks: {
        commands: ["pnpm install"],
        fileFilters: ["pnpm-lock.yaml", "**/*.js"],
        executionMode: "update",
    }
};
