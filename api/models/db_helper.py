import MySQLdb
import os

# Convenient access class for MySQL db cursor
class db_connect:
    def __init__(self):
        CLOUDSQL_CONNECTION_NAME = os.environ.get('CLOUDSQL_CONNECTION_NAME')
        CLOUDSQL_USER = os.environ.get('CLOUDSQL_USER')
        CLOUDSQL_PASSWORD = os.environ.get('CLOUDSQL_PASSWORD')

        def connect_to_cloudsql():
            # When deployed to App Engine, the `SERVER_SOFTWARE` environment variable
            # will be set to 'Google App Engine/version'.
            if os.getenv('SERVER_SOFTWARE', '').startswith('Google App Engine/'):
                # Connect using the unix socket located at
                # /cloudsql/cloudsql-connection-name.
                cloudsql_unix_socket = os.path.join(
                    '/cloudsql', CLOUDSQL_CONNECTION_NAME)

                db = MySQLdb.connect(
                    unix_socket=cloudsql_unix_socket,
                    user=CLOUDSQL_USER,
                    passwd=CLOUDSQL_PASSWORD,
                    db="gamedayballersdb")

            # If the unix socket is unavailable, then try to connect using TCP. This
            # will work if you're running a local MySQL server or using the Cloud SQL
            # proxy, for example:
            #
            #   $ cloud_sql_proxy -instances=your-connection-name=tcp:3306
            #
            else:
                db = MySQLdb.connect(
                    host='localhost', user="root",db="gamedayballersdb")

            return db

        self.db = connect_to_cloudsql()
        self.cur = self.db.cursor()

    def __enter__(self):
        return DB(self.cur)

    def __exit__(self, *args):
        self.cur.close()
        self.db.close()

# Provides convenience methods for reading from a MySQL db
class DB:
    def __init__(self, cursor):
        self.cur = cursor

    def search_table(self, table, attrs, keyword):
        keywords = keyword.split(" ")
        search_strings = ["%s LIKE '%%%s%%'"%(attr, keyword) for attr in attrs]
        attr_string = " OR ".join(search_strings)
        query_string = "(SELECT * FROM %s WHERE %s);"% (table, attr_string)
        self.cur.execute(query_string)
        self.cur.execute
        return self.cur.fetchall()

    # returns list of all entries in the provided table
    def list_table(self, table):
        self.cur.execute("SELECT * FROM %s;" % (table))
        return self.cur.fetchall()

    # returns row where id name matches provided id
    def get_rows(self, table, id, row_id):
        self.cur.execute("SELECT * FROM %s WHERE %s = '%s';"%(table, id, row_id))
        return self.cur.fetchall()

# Test that the classes are working
def main():
    with db_connect() as db:
        for row in db.list_table("players"):
            print row
        print(db.get_rows("players", "PLAYERAPIID", "fake"))

if __name__ == '__main__':
    main()
