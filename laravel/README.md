# Laravel Nixpacks App

This repository is an example Laravel application, set up for easy deployment using [Nixpacks](https://nixpacks.com). Laravel provides a simple and minimal starting point for building a Laravel application with basic authentication. The container for this ONLY contains the Laravel application, and you will need to set up a database and other services separately.

## Port exports

Set `Ports Exposes` to `80`.

## Environment Variables

Make sure to set the following environment variables in your `.env` -file or your deployment tool:

-   `APP_NAME` - The name of your application.
-   `APP_ENV` - The environment for the app, usually `local`, `staging`, or `production`.
-   `APP_KEY` - Application key. Will be generated at deployment using `php artisan key:generate`.
-   `APP_DEBUG` - Debug mode (true or false).
-   `APP_URL` - The base URL of the app.
-   `ASSET_URL` - The base URL for assets, normally the same as APP_URL (needed for https).

If you want to use a database, spin one up in a separate container and set the following environment variable:

-   `DB_URL` - Database URL (useful for Heroku/Dokploy/Coolify).
-   `SESSION_DRIVER` - Session driver ("file" if you don't need a database, else use "database").

### Example (PostgreSQL)

```
APP_DEBUG=false
APP_ENV=production
APP_KEY=base64:JkcGxcA...
APP_NAME=Laravel
APP_URL=https://yourdomain.com
ASSET_URL=https://yourdomain.com
DB_CONNECTION=pgsql
DB_URL=postgres://user:password@localhost:5432/databasename
```

### Additional Configuration for Production

When deploying to production, make sure to set the following environment variables:

-   `APP_ENV=production`
-   `APP_DEBUG=false`

Ensure you have a persistent database setup and correctly configured credentials.
