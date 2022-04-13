import json
import sys
import requests

# Protected Krate
url = "https://krat.es/258439960bc7d64a1353"
record = "624b08405a015dc4d2223b2f"
headers = {
    "Content-Type": "application/json",
    "x-api-key": "3c46750c-1795-431e-9bc0-fcfb3a43c856",
}
with open(sys.path[0] + "\db.json", "r") as dbJson:
    dbData = json.load(dbJson)
    dbJson.close()
data = {"favicons": []}


def putKrates():
    # data = {"sample": "Hello World"}
    req = requests.put(url + "/" + record, json=dbData, headers=headers)
    print("updateKrates req.text = \n", req.text)


def getKrates():
    req = requests.get(url + "/record/" + record, json=None, headers=headers)
    print("readKrates req.text = \n", req.text)
    faviconsList = json.loads(req.text)
    faviconsDict = faviconsList[0]
    data["favicons"] = faviconsDict["favicons"]
    with open(sys.path[0] + "\db.json", "w+") as f:
        f.write(json.dumps(data))
        f.close()


if __name__ == "__main__":
    putKrates()
    # getKrates()
