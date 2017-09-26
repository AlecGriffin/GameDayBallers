## A skeleton for building Python applications on Google App Engine with [Flask](http://flask.pocoo.org), [React](https://facebook.github.io/react/), [Webpack](https://webpack.github.io/) and [Babel](https://babeljs.io/).

## Run Locally
1. Install the [App Engine Python SDK](https://developers.google.com/appengine/downloads).
You'll need python 2.7 and [pip 1.4 or later](http://www.pip-installer.org/en/latest/installing.html) installed too.

2. Install Python dependencies in the project's lib directory and install Node dev dependencies.
   Note: App Engine can only import libraries from inside your project directory.

   ```
   virtualenv env
   source env/bin/activate
   pip install -r requirements.txt -t lib
   npm install
   ```

3. Run
   ```
   webpack --watch
   ```
   from command line so that you can `require` your components and compile .jsx files to .js.

4. Run local server from the command line:

   ```
   dev_appserver.py app.yaml
   ```
   Visit the application [http://localhost:8080](http://localhost:8080)


See [the development server documentation](https://developers.google.com/appengine/docs/python/tools/devserver)
for options when running dev_appserver.

## Deploy
To deploy the application:

1. Use the [Admin Console](https://appengine.google.com) to create a
   project/app id. (App id and project id are identical)
1. [Deploy the
   application](https://developers.google.com/appengine/docs/python/tools/uploadinganapp) with

   ```

   ```
1. Congratulations!  Your application is now live at your-app-id.appspot.com

### Relational Databases and Datastore
To add persistence to your models, use
[NDB](https://developers.google.com/appengine/docs/python/ndb/) for
scale.  Consider
[CloudSQL](https://developers.google.com/appengine/docs/python/cloud-sql)
if you need a relational database.

### Installing Libraries
See the [Third party
libraries](https://developers.google.com/appengine/docs/python/tools/libraries27)
page for libraries that are already included in the SDK.  To include SDK
libraries, add them in your app.yaml file. Other than libraries included in
the SDK, only pure python libraries may be added to an App Engine project.

### Feedback
Star this repo if you found it useful. Use the github issue tracker to give
feedback on this repo.

## Author
Axo Sal
