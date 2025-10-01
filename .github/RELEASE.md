# Release Workflow

This GitHub Action automatically creates releases when you push a version tag.

## How to Create a Release

1. **Make sure your changes are committed:**
   ```bash
   git add .
   git commit -m "Your commit message"
   ```

2. **Create and push a version tag:**
   ```bash
   # Create a new tag (e.g., v1.0.0)
   git tag v1.0.0
   
   # Push the tag to GitHub
   git push origin v1.0.0
   ```

3. **The workflow will automatically:**
   - Install dependencies using pnpm
   - Build the project with `pnpm run build`
   - Create a `dist.zip` archive containing the built files
   - Create a GitHub release with the tag name
   - Attach the `dist.zip` file to the release

## Tag Naming Convention

Tags must follow the format `v*.*.*` (e.g., v1.0.0, v2.1.3, v0.0.1) to trigger the workflow.

Examples:
- ✅ `v1.0.0` - Will trigger the workflow
- ✅ `v2.1.3` - Will trigger the workflow
- ❌ `1.0.0` - Will NOT trigger (missing 'v' prefix)
- ❌ `release-1.0` - Will NOT trigger (wrong format)

## Viewing Releases

After the workflow completes, you can find your release at:
```
https://github.com/YOUR_USERNAME/kilam.net/releases
```

## Downloading a Release

Users can download the `dist.zip` file from the releases page and deploy it to their server.
