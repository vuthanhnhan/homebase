import requests
from flask import Flask, request, jsonify
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)


@app.route('/api/v1/<path:path>', methods=['GET', 'POST', 'PATCH', 'DELETE'])
def proxy(path):
    express_api_url = f"{os.getenv('EXPRESS_API_BASE_URL')}/api/v1/{path}"
    
    try:
        if request.method == 'GET':
            response = requests.get(express_api_url, params=request.args)
        elif request.method == 'POST':
            response = requests.post(express_api_url, json=request.json)
        elif request.method == 'PATCH':
            response = requests.patch(express_api_url, json=request.json)
        elif request.method == 'DELETE':
            response = requests.delete(express_api_url)

    except requests.exceptions.RequestException as e:
        return jsonify({"error": str(e)}), 500

    return jsonify(response.json()), response.status_code

if __name__ == '__main__':
    app.run(host='0.0.0.0')
