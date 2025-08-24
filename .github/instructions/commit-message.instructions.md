# Commit Message Instructions

## Format

```
<type>(<scope>): <icon> <short description>

[optional body]

[optional footer(s)]
```

- **Short description**:
  - ≤ 50 characters
  - Imperative mood (e.g., _Add feature_, not _Added feature_)
  - Format: `<type>(<scope>): <icon> <short description>`
- **Body** (optional):
  - Explain _what_ and _why_, not _how_
  - Wrap lines at 72 characters
  - Use bullet points if helpful
- **Footers** (optional):
  - Reference issues: `Fixes #123` or `Closes #123`
  - Breaking change notice:
    ```
    BREAKING CHANGE: <description>
    ```

---

## Types & Icons

| Type          | Icon | Description                                             |
| ------------- | ---- | ------------------------------------------------------- |
| **feat**      | ✨   | New feature                                             |
| **fix**       | 🐛   | Bug fix                                                 |
| **docs**      | 📝   | Documentation only changes                              |
| **style**     | 💄   | Code style (formatting, whitespace, etc.)               |
| **refactor**  | ♻️   | Code change that neither fixes a bug nor adds a feature |
| **perf**      | ⚡️  | Performance improvements                                |
| **test**      | ✅   | Adding or updating tests                                |
| **chore**     | 🔧   | Build process or auxiliary tools                        |
| **ci**        | 👷   | Continuous integration changes                          |
| **build**     | 🏗️   | Build system or dependency changes                      |
| **revert**    | ⏪   | Reverts a previous commit                               |
| **wip**       | 🚧   | Work in progress                                        |
| **security**  | 🔒   | Security improvements                                   |
| **i18n**      | 🌐   | Internationalization/localization                       |
| **a11y**      | ♿️   | Accessibility improvements                              |
| **ux**        | 🎨   | User experience improvements                            |
| **ui**        | 🖌️   | User interface changes                                  |
| **config**    | 🔧   | Configuration file changes                              |
| **deps**      | 📦   | Dependency updates                                      |
| **infra**     | 🧱   | Infrastructure changes                                  |
| **init**      | 🎉   | Initial commit                                          |
| **analytics** | 📈   | Analytics or tracking changes                           |
| **seo**       | 🔍   | SEO improvements                                        |
| **legal**     | ⚖️   | Licensing or legal changes                              |
| **typo**      | ✏️   | Typo fixes                                              |
| **comment**   | 💬   | Code comment changes                                    |
| **example**   | 💡   | Adding or updating examples                             |
| **mock**      | 🤖   | Adding or updating mocks                                |
| **hotfix**    | 🚑   | Critical hotfix                                         |
| **merge**     | 🔀   | Merge changes                                           |
| **cleanup**   | 🧹   | Code cleanup                                            |
| **deprecate** | 🗑️   | Deprecating code/features                               |
| **move**      | 🚚   | Moving files                                            |
| **rename**    | ✏️   | Renaming files/variables                                |
| **split**     | ✂️   | Splitting files/functions                               |
| **combine**   | 🧬   | Combining files/functions                               |
| **add**       | ➕   | Adding files/features                                   |
| **remove**    | ➖   | Removing files/features                                 |
| **update**    | ⬆️   | Updating files/features                                 |
| **downgrade** | ⬇️   | Downgrading files/features                              |
| **patch**     | 🩹   | Applying patches                                        |
| **optimize**  | 🛠️   | Optimizing code                                         |

---

## Examples

### Standard Commit

```
feat(auth): ✨ Add user authentication

Add user authentication using JWT, including login, registration,
and token verification endpoints.

- Implement JWT-based authentication
- Add login and registration endpoints
- Add middleware for token verification

Fixes #123
```

### Breaking Change

```
refactor(api): ♻️ Update API endpoints

Refactor API endpoints to follow RESTful conventions. This affects
all existing API calls.

- Update endpoint URLs
- Modify request/response formats

BREAKING CHANGE: All API calls must use the new endpoints.
```
