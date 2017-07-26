[
    {
        "id": "41e40682.d1d438",
        "type": "tab",
        "label": "Netatmo"
    },
    {
        "id": "b367a0d2.58de5",
        "type": "inject",
        "z": "41e40682.d1d438",
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
                "43b84b9e.d4e8d4"
            ]
        ]
    },
    {
        "id": "43b84b9e.d4e8d4",
        "type": "netatmo-dashboard",
        "z": "41e40682.d1d438",
        "creds": "190010fb.a6894f",
        "x": 195,
        "y": 197,
        "wires": [
            [
                "99ceba58.a68c58"
            ]
        ]
    },
    {
        "id": "99ceba58.a68c58",
        "type": "function",
        "z": "41e40682.d1d438",
        "name": "",
        "func": "var msg1 = {};\nvar msg2 = {};\nvar msg3 = {};\nvar msg4 = {};\nvar msg5 = {};\nvar msg6 = {};\nvar msg7 = {};\nvar msg8 = {};\nvar msg9 = {};\nmsg1.payload = msg.payload.temperature;\nmsg2.payload = msg.payload.co2;\nmsg3.payload = msg.payload.humidity;\nmsg4.payload = msg.payload.noise;\nmsg5.payload = msg.payload.pressure;\nmsg6.payload = msg.payload.pressureTrend;\nmsg7.payload = msg.payload.externalTemperature;\nmsg8.payload = msg.payload.externalHumidity;\nmsg9.payload = msg.payload.externalTemperatureTrend;\nreturn [msg1,msg2,msg3,msg4,msg5,msg6,msg7,msg8,msg9];",
        "outputs": "9",
        "noerr": 0,
        "x": 396,
        "y": 163,
        "wires": [
            [
                "214bed19.995ce2"
            ],
            [
                "169f3f65.ba57a1"
            ],
            [
                "aa238b72.211258"
            ],
            [
                "60c32b6f.9e2e34"
            ],
            [
                "fcda826a.d38a5"
            ],
            [
                "b9a117e5.08c038"
            ],
            [
                "d43e92c0.2dd04"
            ],
            [
                "639dfada.deda34"
            ],
            [
                "a7b74066.5866b"
            ]
        ]
    },
    {
        "id": "214bed19.995ce2",
        "type": "ui_gauge",
        "z": "41e40682.d1d438",
        "name": "",
        "group": "b88585a0.6bb088",
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
        "id": "169f3f65.ba57a1",
        "type": "ui_gauge",
        "z": "41e40682.d1d438",
        "name": "",
        "group": "b88585a0.6bb088",
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
        "id": "aa238b72.211258",
        "type": "ui_gauge",
        "z": "41e40682.d1d438",
        "name": "",
        "group": "b88585a0.6bb088",
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
        "id": "60c32b6f.9e2e34",
        "type": "ui_gauge",
        "z": "41e40682.d1d438",
        "name": "",
        "group": "b88585a0.6bb088",
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
        "id": "fcda826a.d38a5",
        "type": "ui_gauge",
        "z": "41e40682.d1d438",
        "name": "",
        "group": "b88585a0.6bb088",
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
        "id": "d43e92c0.2dd04",
        "type": "ui_gauge",
        "z": "41e40682.d1d438",
        "name": "",
        "group": "b88585a0.6bb088",
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
        "id": "639dfada.deda34",
        "type": "ui_gauge",
        "z": "41e40682.d1d438",
        "name": "",
        "group": "b88585a0.6bb088",
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
        "id": "b9a117e5.08c038",
        "type": "ui_text",
        "z": "41e40682.d1d438",
        "group": "b88585a0.6bb088",
        "order": 0,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Luftdruck",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "x": 610.5,
        "y": 217,
        "wires": []
    },
    {
        "id": "a7b74066.5866b",
        "type": "ui_text",
        "z": "41e40682.d1d438",
        "group": "b88585a0.6bb088",
        "order": 0,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Außentemperatur",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "x": 641.5,
        "y": 330,
        "wires": []
    },
    {
        "id": "190010fb.a6894f",
        "type": "netatmo-config-node",
        "z": "",
        "client_id": "yourclientid",
        "client_secret": "yourclientsecret",
        "username": "yourusername",
        "password": "youpassword"
    },
    {
        "id": "b88585a0.6bb088",
        "type": "ui_group",
        "z": "",
        "name": "Default",
        "tab": "346425e8.60fcea",
        "disp": true,
        "width": "12"
    },
    {
        "id": "346425e8.60fcea",
        "type": "ui_tab",
        "z": "",
        "name": "Home",
        "icon": "dashboard",
        "order": 1
    }
]
