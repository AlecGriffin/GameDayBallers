import MySQLdb

# Convenient access class for MySQL db cursor
class db_connect:
    def __init__(self, host, user, password, db):
        self.db = MySQLdb.connect(host=host,    # your host, usually localhost
                     user=user,                      # your username
                     db=db)            # name of the data base
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

    # returns list of all entries in the provided table
    def list_table(self, table):
        self.cur.execute("SELECT * FROM %s" % (table))
        return self.cur.fetchall()

    # returns row where id name matches provided id
    def get_row(self, table, id, row_id):
        self.cur.execute("SELECT * FROM %s WHERE %s = '%s'"%(table, id, row_id))
        return self.cur.fetchall()

# Test that the classes are working
def main():
    with db_connect("localhost", "root", None, "gamedayballersdb") as db:
        for row in db.list_table("players"):
            print row
        print(db.get_row("players", "PLAYERAPIID", "fake"))

if __name__ == '__main__':
    main()