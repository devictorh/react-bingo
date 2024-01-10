import random

from datetime import datetime
from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

results = {
    'new_number': 0,
    'history': []
}


def check_new_number(number):
    for item in results['history']:
        if item['last_number'] == number:
            return True
    return False


def get_new_number():
    new_number = random.randint(1, 75)
    if check_new_number(new_number):
        get_new_number()

    return new_number


@app.route('/api/sorting', methods=['GET'])
def get_aleatory_number():
    date_now = datetime.now().strftime('%d/%m/%Y %H:%M:%S')
    print(date_now)

    new_number = get_new_number()
    results['new_number'] = new_number

    history = {
        'last_number': new_number,
        'date': date_now
    }
    results['history'].append(history)

    reverse_order = results['history'][::-1]
    results['history'] = reverse_order

    return jsonify(results)


@app.route('/api/reset', methods=['GET'])
def reset():
    results['new_number'] = 0
    results['history'] = []

    return jsonify(results)


if __name__ == '__main__':
    app.run(debug=True)
