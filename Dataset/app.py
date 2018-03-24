#!flask/bin/python
from flask import Flask, jsonify, request
import predict

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello, World!"

@app.route('/api', methods=['GET'])
def get():
    title = request.args.get('title')
    return jsonify({"response":predict.pd(title)})






if __name__ == '__main__':
    app.run(debug=True)