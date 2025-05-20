# Ways of Working - Git

## Overview

This repository follows a simplified GitHub Flow with two main branches:

- `develop` - Integration branch for ongoing development
- `main` - Production-ready code

## Branch Strategy

### Main Branches

- `main` - Always production-ready, deployed to production
- `develop` - Integration branch for features, deployed to staging

### Feature Branches

- Created from `develop`
- Named as `feature/description-of-change` or `fix/description-of-bug`
- Merged back to `develop` via Pull Request

## Workflow

### Starting New Work

1. Start from `develop`:

   ```bash
   git checkout develop
   git pull origin develop
   ```

2. Create feature branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

### Development Process

1. Make small, focused changes
2. Commit frequently following conventional commits:

   ```plain
   feat: add new feature
   fix: resolve bug
   chore: update dependencies
   docs: update documentation
   ```

3. Keep your branch up to date:

   ```bash
   git fetch origin
   git rebase origin/develop
   ```

4. Push your branch:

   ```bash
   git push origin feature/your-feature-name
   ```

### Merging to Develop

1. Create Pull Request (PR) to `develop`
2. Get code review from at least one team member
3. Resolve any conflicts:

   ```bash
   git checkout develop
   git pull origin develop
   git checkout feature/your-feature-name
   git rebase develop
   # Resolve conflicts if any
   git push origin feature/your-feature-name --force-with-lease
   ```

4. Merge options:
   - **Rebase and merge** (preferred): For clean, linear history
   - **Squash and merge**: For combining multiple commits into one clean commit

### Deploying to Production

1. Create PR from `develop` to `main`
2. After review and approval, merge to `main`
3. Tag the release with semantic version:

   ```bash
   git tag -a v1.2.3 -m "Release version 1.2.3"
   git push origin v1.2.3
   ```

4. Deployment to production happens automatically

## Best Practices

### Commit Messages

Follow conventional commits format:

```plain
<type>(<scope>): <description>

[optional body]
```

Types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

### Branch Protection

- `main` and `develop` are protected
- Require PR reviews
- Require passing CI checks
- No direct pushes allowed

## Common Commands

### Basic Workflow

```bash
# Update your local repository
git fetch origin
git pull origin develop

# Create and switch to new branch
git checkout -b feature/new-feature

# Stage and commit changes
git add .
git commit -m "feat: add new feature"

# Push changes
git push origin feature/new-feature
```

### Conflict Resolution

```bash
# Update your branch with latest changes
git checkout develop
git pull origin develop
git checkout feature/your-feature
git rebase develop

# After resolving conflicts
git add .
git commit -m "chore: resolve merge conflicts"
git push origin feature/your-feature --force-with-lease
```

## CI/CD Integration

- All PRs must pass CI checks
- Automated tests run on PR creation and updates
- Deployment to staging happens after merging to `develop`
- Deployment to production happens after merging to `main`
