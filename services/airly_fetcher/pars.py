import json

import requests

from config import AIRLY_TOKEN


def parse_airly_measurements(sensor_id):
    sensor_values = {}
    parameters = {'installationId': sensor_id}
    headers = {'apikey': AIRLY_TOKEN, 'Accept': 'application/json'}
    url = 'https://airapi.airly.eu/v2/measurements/installation?'
    response = requests.get(url, params=parameters, headers=headers)
    info = json.loads(response.text)
    if response.status_code != 200:
        return

    current_values = info['current']
    datetime = current_values['tillDateTime']
    sensor_values.setdefault('tillDateTime', datetime)
    measurement_values = current_values['values']
    for value_data in measurement_values:
        sensor_values.setdefault(str(sensor_id), [])
        factor_name = value_data['name']
        value = value_data['value']
        sensor_values.get(str(sensor_id)).append((factor_name, value))

    return sensor_values
