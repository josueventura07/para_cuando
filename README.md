# Weekly tasks:

As you've heard we have tasks for next tuesday and thursday, check it out: [Tasks](https://academlo.notion.site/Tareas-7479dc64d0f34f8bbbdd2744cc5d7e72)

To this date (thursday 12) there are five models left to create, wich are: `countries`, `city`, `votes`, `publications_types` & `publications`.
`Publications` is the model that has more foreign keys, therefore, requieres more code, so may be reasonable to considere it as two models in terms of work time.

The Proposal then is to split the remaining job in two groups of tasks, so you can choose one of them to work on:

## Group 1:

This will be the so-called "publications" group, and it consists of models: `publications` & `publications_types`.

The task is to create those models using migrations and transactions methods, so make sure you understand how they work. Don't forget to code all the relations and foreign keys expected by the `db.diagram` provided [here](https://academlo.notion.site/Esquema-Rutas-Controllers-Services-y-Auth-b636156118d54e339b1bc9f6f8e8faf7).

## Group 2:

This group consist of the models: `countries` , `city` , & `votes`. Theese are small models but requiere lots of relations between them and the other models, so be careful.

Task is the same as described in `Group 1` section.

### Also, theese are few general steps and advices for model creation:

- When creating a model start using command: 
```bash
npx sequelize-cli model:generate --name "ModelName" --attributes "attributeName": "attributeType"
```
`" "` make reference to fields you have to fill with the model information, such as its name and a single attribute of the model to start with, and of course, its type.

- Once you've created the model following the previous step, you'll get two new files: `"ModelName".js` in folder `model`, and `XXXXXXXXXXXXXX-create-"modelName".js` in `migrations` folder.

To actually create the model in the database you have to run any migration command, for this you can consult the script section above or check the sequelize documentation about [migrations](https://sequelize.org/docs/v6/other-topics/migrations/). But before migrating make sure your model satisfies the task requirements.

Anyways, it is in the `migration` file where you have to code the whole model structure, this is, all the attributes and its properties, this includes the foreign keys attributes. Relations between models have to be declared in the `model` file, make sure to specify the `tableName` as well. `modelName` must begin with capital letter (ex: `modelName: 'Users'`), and `tableName` bellow must not (ex: `tableName: 'users'`). 

- Finally, to verify the functioning of the code you'll have to run the migration command and check the tables created at your local database with `Dbeaver`. 

If you have any mistake (i mean, if some data is missing or wrong like attributes names or properties) just run the undo migration command to "delete" the tables from the database and make your corrections in the corresponding files.

# !Basic Information for team work
   
## About [npm](https://www.npmjs.com/) & [node](https://nodejs.org/en/) versions:

This "Skeleton" was created using `npm` v9.2.0 & `node` [v18.13.0](https://nodejs.org/en/).

Updating your own `npm` & `node` is necesary for better work flow, so, before cloning, merging or fetching the repository, make sure you already have updated `npm` & `node`.

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

Make sure you have read at least the first part of the [Project Bases](https://academlo.notion.site/Base-del-Proyecto-b54473bef71747369accb2c569b94ce6) document, wich specify notation requirements for naming and object properties calling.

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

#### Finally, for more information about how to start don't forget to read the whole `Notion` document on: [Project Bases](https://academlo.notion.site/Base-del-Proyecto-b54473bef71747369accb2c569b94ce6).
