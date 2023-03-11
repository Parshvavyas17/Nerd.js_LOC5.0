from flask import Flask, jsonify, request
import func
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route("/rec", methods=['POST'])
def rec():
    title = request.headers.get("title")
    skills = request.headers.get("skills")
    location = request.headers.get("location")
    jobType = request.headers.get("jobType")
    experience = int(request.headers.get("experience"))
    user = f"{title} {skills}"
    print(user)
    ids = func.recommend(user, jobType, location, experience)
    # return ids
    result = {
        "ids": ids,
    }
    return jsonify(result)


if __name__ == "__main__":
    app.run(port=8000, debug=True)
