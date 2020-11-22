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
grid_fs = GridFS(my_db)

@app.route('/add', methods=['POST'])
def add_files():
    user_file = request.files['file']
    with grid_fs.new_file(filename=user_file.filename) as fp:
        fp.write(request.data)
        file_id = fp._id

    if grid_fs.find_one(file_id) is not None:
        return { 'status': 'File saved successfully', 'id': str(file_id) }, 200
    else:
        return {'status': 'Error occurred while saving file.'}, 500

@app.route("/get/<id>", methods=["GET"])
def get_file(id):
    grid_fs_file = grid_fs.find_one({ '_id': ObjectId(id) })
    if grid_fs_file is not None:
        response = make_response(grid_fs_file.read())
        response.headers['Content-Type'] = 'application/octet-stream'
        response.headers.set(
            'Content-Disposition', 'attachment', filename=grid_fs_file.filename)
        return response
    else: 
        return {'status': 'File is not found'}, 404

@app.route("/delete/<id>", methods=["DELETE"])
def delete_file(id):
    grid_fs.delete(ObjectId(id))
    return {'status': 'File delete successfully'}, 200

if __name__ == '__main__':
    app.run(debug=True, port=port)
