[
    {
        "id": "5f7ddbf8.6be794",
        "type": "inject",
        "z": "7ea08eb2.3f545",
        "name": "",
        "topic": "5 Minutes Timer",
        "payload": "true",
        "payloadType": "bool",
        "repeat": "60",
        "crontab": "",
        "once": false,
        "x": 197,
        "y": 118,
        "wires": [
            [
                "eac6e5e1.8a4cf8"
            ]
        ]
    },
    {
        "id": "eac6e5e1.8a4cf8",
        "type": "netatmo-dashboard",
        "z": "7ea08eb2.3f545",
        "creds": "c0c400e5.eb2b7",
        "x": 195,
        "y": 197,
        "wires": [
            [
                "8fefe213.0d597"
            ]
        ]
    },
    {
        "id": "8fefe213.0d597",
        "type": "function",
        "z": "7ea08eb2.3f545",
        "name": "",
        "func": "var msg1 = {};\nvar msg2 = {};\nvar msg3 = {};\nvar msg4 = {};\nvar msg5 = {};\nvar msg6 = {};\nvar msg7 = {};\nvar msg8 = {};\nvar msg9 = {};\nmsg1.payload = msg.payload.temperature;\nmsg2.payload = msg.payload.co2;\nmsg3.payload = msg.payload.humidity;\nmsg4.payload = msg.payload.noise;\nmsg5.payload = msg.payload.pressure;\n//msg6.payload = msg.payload.pressureTrend;\nmsg7.payload = msg.payload.externalTemperature;\nmsg8.payload = msg.payload.externalHumidity;\n//msg9.payload = msg.payload.externalTemperatureTrend;\nreturn [msg1,msg2,msg3,msg4,msg5,msg6,msg7,msg8,msg9];",
        "outputs": "9",
        "noerr": 0,
        "x": 396,
        "y": 163,
        "wires": [
            [
                "792029a1.70a838"
            ],
            [
                "41d7ab35.1c5824"
            ],
            [
                "711b2db6.ba12b4"
            ],
            [
                "76d23f76.5ea99"
            ],
            [
                "81eed303.c7ba6"
            ],
            [],
            [
                "fb43741f.9f7928"
            ],
            [
                "ad327992.52f648"
            ],
            []
        ]
    },
    {
        "id": "792029a1.70a838",
        "type": "ui_gauge",
        "z": "7ea08eb2.3f545",
        "name": "",
        "group": "ee48b025.41027",
        "order": 0,
        "width": "3",
        "height": "3",
        "gtype": "gage",
        "title": "Temperatur",
        "label": "°C",
        "format": "{{value}}",
        "min": "10",
        "max": "40",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "25",
        "seg2": "30",
        "x": 619.5,
        "y": 27,
        "wires": []
    },
    {
        "id": "41d7ab35.1c5824",
        "type": "ui_gauge",
        "z": "7ea08eb2.3f545",
        "name": "",
        "group": "ee48b025.41027",
        "order": 0,
        "width": "3",
        "height": "3",
        "gtype": "gage",
        "title": "CO2",
        "label": "ppm",
        "format": "{{value}}",
        "min": 0,
        "max": "5000",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "1000",
        "seg2": "2000",
        "x": 599.5,
        "y": 67,
        "wires": []
    },
    {
        "id": "711b2db6.ba12b4",
        "type": "ui_gauge",
        "z": "7ea08eb2.3f545",
        "name": "",
        "group": "ee48b025.41027",
        "order": 0,
        "width": "3",
        "height": "3",
        "gtype": "gage",
        "title": "Luftfeuchtigkeit",
        "label": "%",
        "format": "{{value}}",
        "min": 0,
        "max": "100",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "65",
        "seg2": "70",
        "x": 629.5,
        "y": 105,
        "wires": []
    },
    {
        "id": "76d23f76.5ea99",
        "type": "ui_gauge",
        "z": "7ea08eb2.3f545",
        "name": "",
        "group": "ee48b025.41027",
        "order": 0,
        "width": "3",
        "height": "3",
        "gtype": "gage",
        "title": "Lautstärke",
        "label": "dB",
        "format": "{{value}}",
        "min": "35",
        "max": "70",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "55",
        "seg2": "65",
        "x": 619.5,
        "y": 143,
        "wires": []
    },
    {
        "id": "81eed303.c7ba6",
        "type": "ui_gauge",
        "z": "7ea08eb2.3f545",
        "name": "",
        "group": "ee48b025.41027",
        "order": 0,
        "width": "3",
        "height": "3",
        "gtype": "gage",
        "title": "Luftdruck",
        "label": "hPa",
        "format": "{{value}}",
        "min": "950",
        "max": "1100",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "x": 609.5,
        "y": 180,
        "wires": []
    },
    {
        "id": "fb43741f.9f7928",
        "type": "ui_gauge",
        "z": "7ea08eb2.3f545",
        "name": "",
        "group": "ee48b025.41027",
        "order": 0,
        "width": "3",
        "height": "3",
        "gtype": "gage",
        "title": "Temperatur außen",
        "label": "°C",
        "format": "{{value}}",
        "min": "-40",
        "max": "50",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "x": 640.5,
        "y": 255,
        "wires": []
    },
    {
        "id": "ad327992.52f648",
        "type": "ui_gauge",
        "z": "7ea08eb2.3f545",
        "name": "",
        "group": "ee48b025.41027",
        "order": 0,
        "width": "3",
        "height": "3",
        "gtype": "gage",
        "title": "Luftfeuchtigkeit außen",
        "label": "%",
        "format": "{{value}}",
        "min": 0,
        "max": "100",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "x": 651.5,
        "y": 293,
        "wires": []
    },
    {
        "id": "c0c400e5.eb2b7",
        "type": "netatmo-config-node",
        "z": "",
        "client_id": "yourclientid",
        "client_secret": "yourclientsecret",
        "username": "yourusername",
        "password": "youpassword"
    },
    {
        "id": "ee48b025.41027",
        "type": "ui_group",
        "z": "",
        "name": "Default",
        "tab": "49b7c641.ba4788",
        "disp": true,
        "width": "12"
    },
    {
        "id": "49b7c641.ba4788",
        "type": "ui_tab",
        "z": "",
        "name": "Home",
        "icon": "dashboard",
        "order": 1
    }
]
