# T3 App Example

This repository contains an example of T3 application with mysql database that is deployed on Dokploy.

1. **Use Git Provider in Your Application**:

   - Repository: `https://github.com/Dokploy/examples.git`
   - Branch: `main`
   - Build path: `/t3`

2. **Create a MySQL Database**:

   - Enter to the database and copy the Internal Connection URL.

3. **Add Environment Variables to your Application**:

- Navigate to the "Environments" tab and add the following variable:
  ```plaintext
  DATABASE_URL="the-database-url-you-copied-from-the-previous-step"
  ```

3. **Click on Deploy**:

   - Deploy your application by clicking the deploy button.

4. **Generate a Domain**:
   - Click on generate domain button.
   - A new domain will be generated for you.
   - You can use this domain to access your application.

If you need further assistance, join our [Discord server](https://discord.com/invite/2tBnJ3jDJc).
