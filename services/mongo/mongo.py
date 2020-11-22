from flask import Flask, request, make_response
from dotenv import load_dotenv
import os
from pymongo import MongoClient
from bson.objectid import ObjectId
from gridfs import GridFS
from flask_cors import CORS

dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
if os.path.exists(dotenv_path):
    load_dotenv(dotenv_path)

app = Flask(__name__)
CORS(app)
port = os.getenv('PORT')

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

my_client = MongoClient(os.getenv('POSTGRES_HOSTNAME'))
my_db = my_client["test"]
my_col = my_db["collect"]

@app.route("/add", methods=["POST"])
def add_files():
    user_file = request.files['file']
    res = my_col.insert_one({
        'filename': user_file.filename,
        'content': user_file.read(),
        'mimetype': user_file.mimetype
    })
    return { 'status': 'File saved successfully', 'id': str(res.inserted_id) }, 200

@app.route("/get/<id>", methods=["GET"])
def get_file(id):
    file = my_col.find_one({'_id': ObjectId(id)})
    if file is not None:
        response = make_response(file['content'])
        response.headers.set('Content-Type', file['mimetype'])
        response.headers.set(
            'Content-Disposition', 'attachment', filename=file['filename'])
        return response
    else: 
        return {'status': 'File is not found'}, 404

@app.route("/delete/<id>", methods=["DELETE"])
def delete_file(id):
    my_col.find_one_and_delete({'_id': ObjectId(id)})
    return {'status': 'File delete successfully'}, 200

if __name__ == '__main__':
    app.run(debug=True, port=port)
