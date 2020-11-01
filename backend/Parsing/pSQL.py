import psycopg2
import os
from dotenv import load_dotenv


dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
print(dotenv_path)
if os.path.exists(dotenv_path):
    load_dotenv(dotenv_path)

db_name = os.getenv('PG_DATABASE')
db_user = os.getenv('PG_USER')
db_password = os.getenv('PG_PASSWORD')
db_host = os.getenv('PG_HOST')
db_port = os.getenv('PG_PORT')


try:
    print(db_name, db_host, db_port, db_user, db_password)
    connection = psycopg2.connect(dbname=db_name, user=db_user, password=db_password, host=db_host, port=db_port)
    connection.autocommit = True
except:
    print("Error while connecting to PostgreSQL")


def query_db(query: str):
    data = []
    try:
        with connection.cursor() as cursor:
            cursor.execute(query)

            if 'SELECT' in query:
                data = cursor.fetchall()

            cursor.close()
    except (Exception, psycopg2.Error) as error:
        print("Error on PostgreSQL query: ", error)

    return data
