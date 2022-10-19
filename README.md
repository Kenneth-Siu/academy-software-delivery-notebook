# Academy Software Delivery Notebook

## Zero to Hero

Install the Prettier VS Code extension, ID `esbenp.prettier-vscode`.

Go into settings and turn on `Format on Save`.

You may want to play around with `Auto Save` as well. (I like onFocusChange)

Make a file called `.env.development.local` in the root of this project. It should contain

```
PGHOST=localhost
PGPORT=5432
PGDATABASE=AcademySoftwareDeliveryNotebook
PGUSER=
PGPASSWORD=
```

You will need to update `PGUSER` and `PGPASSWORD` with the account details for your installation of Postgres.
You may need to update the other properties if you changed the default settings at all.

## Run

`npm run start` starts the development server. It will (mostly) automatically refresh the page as you make changes.

`npm test` starts the test watcher. It will run the tests automatically whenever you make changes.
