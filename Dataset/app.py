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
    response = jsonify({"response":predict.pd(title)})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == '__main__':
    app.run(debug=True)