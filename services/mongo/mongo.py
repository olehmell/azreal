from flask import Flask, request, make_response
from dotenv import load_dotenv
from hashlib import md5
import os
import pymongo


dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
if os.path.exists(dotenv_path):
    load_dotenv(dotenv_path)


app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
my_client = pymongo.MongoClient(os.getenv('POSTGRES_HOSTNAME'))
my_db = my_client["test"]
my_col = my_db["collect"]


@app.route("/add", methods=["POST"])
def add_files():
    user_file = request.files['file']
    _id = md5(user_file.read()).hexdigest()
    if my_col.find_one({'_id': _id}):
        return _id, 'file is exist'
    else:
        my_col.insert_one({
            '_id': _id,
            'filename': user_file.filename,
            'content': user_file.read(),
            'mimetype': user_file.mimetype
        })
        return _id, 'file add'


@app.route("/get", methods=["GET"])
def get_file():
    res = request.args.get('id')
    file = my_col.find_one({'_id': res})
    response = make_response(file['content'])
    response.headers.set('Content-Type', file['mimetype'])
    response.headers.set(
        'Content-Disposition', 'attachment', filename=file['filename'])
    return response


@app.route("/delete", methods=["DELETE"])
def delete_file():
    file_id = request.args.get('id')
    my_col.find_one_and_delete({'_id': file_id})
    return file_id, 'file deleted'


if __name__ == '__main__':
    app.run(debug=True, port=3001)
