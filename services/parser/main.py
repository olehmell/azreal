from pSQL import query_db
from pars import parse_measurements
from utils import parse_str_to_timestamp


def main():
    result = query_db(query='SELECT "sensorId","locationId" FROM az_sensors."Sensors"')
    sensor_ids = []
    for x in result:
        sensor_ids.append(x[0])
    measurements_data = parse_measurements(sensor_ids)

    for sensor_data in result:
        sensor_id = sensor_data[0]
        location_id = sensor_data[1]
        values = str(measurements_data.get(str(sensor_id)))
        timestamp = parse_str_to_timestamp(measurements_data['tillDateTime'])

        query_base = 'INSERT INTO az_measurements."Measurements"("sensorId", "locationId", "timestamp", "values") '
        query_parameters = f'VALUES ({sensor_id}, {location_id}, \'{timestamp}\', ARRAY{values}::az_sensors.measurement_value[])'
        query_db(query=query_base + query_parameters)


if __name__ == "__main__":
    main()
