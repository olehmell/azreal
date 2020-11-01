import requests
import json
import os
from dotenv import load_dotenv


dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
print(dotenv_path)
if os.path.exists(dotenv_path):
    load_dotenv(dotenv_path)

airly_token = os.getenv('AIRLY_TOKEN')


def parse_measurements(sensor_ids):
    sensors_values = {}
    for ID in sensor_ids:
        parameters = {'installationId': ID}
        headers = {'apikey': airly_token, 'Accept': 'application/json'}
        url = 'https://airapi.airly.eu/v2/measurements/installation?'
        response = requests.get(url, params=parameters, headers=headers)
        info = json.loads(response.text)

        current_values = info['current']
        datetime = current_values['tillDateTime']
        sensors_values.setdefault('tillDateTime', datetime)
        measurement_values = current_values['values']
        for value_data in measurement_values:
            sensors_values.setdefault(str(ID), [])
            name = value_data['name']
            value = value_data['value']
            sensors_values.get(str(ID)).append((name, value))

    return sensors_values
