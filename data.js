var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.055754857985341744,
        "pitch": -0.06004440627658525,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -0.11083440247042198,
          "pitch": -0.2892096584377395,
          "rotation": 7.0685834705770345,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.3324897635398525,
          "pitch": 0.311380861351795,
          "title": "Welcome!",
          "text": "To the Faculty of Engineering!"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.11688756252792132,
        "pitch": -0.24782180860854197,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -0.03612596192582096,
          "pitch": 0.03157335603414424,
          "rotation": 0.7853981633974483,
          "target": "2-engineering-auditorium-atrium"
        },
        {
          "yaw": -1.6486103993439531,
          "pitch": 0.013152460894913176,
          "rotation": 5.497787143782138,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.15166407774705,
          "pitch": -0.38511246202958915,
          "title": "A sculpture",
          "text": "Of something"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.012288816355612298,
        "pitch": -0.018931818070051065,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 3.0767434892261836,
          "pitch": 0.056140821189970325,
          "rotation": 0.7853981633974483,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.7602897088878642,
          "pitch": -0.23971146280264577,
          "title": "Spinelli Coffee Company",
          "text": "Coffee"
        }
      ]
    }
  ],
  "name": "Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
