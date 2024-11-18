# Nuxt Example

This repository contains an example of a Nuxt application that is deployed on Dokploy. There are two ways to deploy this application:

- With server side rendering
- As a static site

All examples assume you use `Nixpacks` as the build type.

## Server side rendering

1. **Use Git Provider in Your Application**:
   - Repository: `https://github.com/Dokploy/examples.git`
   - Branch: `main`
   - Build path: `/nuxt`

2. **Add Environment Variables**:

- Navigate to the "Environments" tab and add the following variable:

   ```plaintext
   NIXPACKS_START_CMD="node .output/server/index.mjs"
   ```

3. **Click on Deploy**:
   - Deploy your application by clicking the deploy button.

4. **Generate a Domain**:
    - Click on generate domain button.
    - A new domain will be generated for you.
    - You can use this domain to access your application.

## Static site

1. **Use Git Provider in Your Application**:
   - Repository: `https://github.com/Dokploy/examples.git`
   - Branch: `main`
   - Build path: `/nuxt`

2. **Add Environment Variables**:

- Navigate to the "Environments" tab and add the following variable:

   ```plaintext
   NIXPACKS_BUILD_CMD="pnpm generate" 
   ```

3. **Set the publish directory**:

- Ensure you set it to `dist/`. Note that there is no dot before `dist`!

4. **Click on Deploy**:
   - Deploy your application by clicking the deploy button.

5. **Generate a Domain**:
    - Click on generate domain button.
    - A new domain will be generated for you.
    - You can use this domain to access your application.
    - Set the port to 80

If you need further assistance, join our [Discord server](https://discord.com/invite/2tBnJ3jDJc).
