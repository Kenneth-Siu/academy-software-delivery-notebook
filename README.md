You need node v16.x.x for this. My advice is to install [`nvm`](https://github.com/nvm-sh/nvm). It's a node version manager that will let you switch the node version your terminal is using.

Install the Prettier VS Code extension, ID `esbenp.prettier-vscode`.

Go into settings and turn on `Format on Save`.
You may want to play around with `Auto Save` as well. (I like onFocusChange)

Make a .env.development.local file in the root of this project. It should contain

```
PGHOST=localhost
PGPORT=5432
PGDATABASE=NotebookCookbook
PGUSER=
PGPASSWORD=
```

You will need to update `PGUSER` and `PGPASSWORD` with the account details for your installation of Postgres.
You may need to update the others if you changed the default settings at all.
