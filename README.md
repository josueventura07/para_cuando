# Basic Information for team work
   
## About [npm](https://www.npmjs.com/) & [node](https://nodejs.org/en/) versions:

This "Skeleton" was created using `npm` v9.2.0 & `node` [v18.13.0](https://nodejs.org/en/).

Updating your own npm & node is necesary for better work flow, so, before cloning, merging or fetching the repository, make sure you already have updated npm & node.

##### npm updating:

```bash
npm install -g npm@latest
```
## Dependencies:

Make sure to install all required dependencies before working, this is simply done by running this comand:

```bash
npm install
```
## Syntax conventions:

Make sure you have read at least the first part of the [Project Bases](https://academlo.notion.site/Base-del-Proyecto-b54473bef71747369accb2c569b94ce6') document, wich specify notation requirements for naming and object properties calling.

Also, remember to always use git commit conventions as follows:

##### Prefixes:

- `feat`: adding a new feature
- `fix`: bug and error fixing
- `docs`: documentation related
- `perf`: performance improvement changes
- `refactor`: changes that doesn't improve the performance, but report some other kind of improvement(for example, on order or legibility)
- `test`: code for testing purposes

After the prefix we have to give a simple but precise description of our contribution, followed by our name or nickname in parenthesis (I think this will help us to notice whether our partners are contribuing or not, and to quikly identify whom to contact in case of need).

##### Example:

```bash
git commit -m 'feat: users model added (Mario)'
```

## Environment variables:

You'll find an `.env.example` file where you can check wich environment variables we are using, its important to remember that some of them can be used by all of us and some others can't. Please, take your time to correctly fill your own `.env` with than info.

## Scripts:

To make the job a bit faster the following scripts were added to `package.json`:


```bash
npm run lint-fix 
```
Will automatically fix all eslint errors detected

```bash
npm run migrate
```
Will execute all migrations, keep in mind that if you want to make only one migration, you better execute this command instead: 

```bash
npx sequelize-cli db:migrate --name yourMigrationFileName.js
```

```bash
npm run undo-mig
```
Will reverse a single migration, if you want to revert the migration of three models, you'll have to run this comand three times. 

###### *If you want to add another `script` to the list make sure to add it first in `package.json`, then make a single commit like this: `git commit -m 'feat: new migration script added (Mario)'`, and finally let us know its function here in the `readme` file. 

## Migrations and Transactions: 

For most of us this resources may be new, so don't foget to check the related documentation about [Migrations](https://sequelize.org/docs/v6/other-topics/migrations/) and [Transactions](https://sequelize.org/docs/v6/other-topics/transactions/).

Also, you may find a bit tricky to use the configurations suggested in [Project Bases](https://academlo.notion.site/Base-del-Proyecto-b54473bef71747369accb2c569b94ce6). Frecuently checking both documentations will help a lot. 

#### Finally, for more don't forget to read the whole Notion document on: [Project Bases](https://academlo.notion.site/Base-del-Proyecto-b54473bef71747369accb2c569b94ce6).
