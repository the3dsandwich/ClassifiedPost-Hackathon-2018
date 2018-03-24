import requests
import json

out = open("dataset_dumped.json", "w")

headers = {
    "Accept": "application/json",
    "Authorization": "Bearer 88654f933274f9e5b15d4cee0c819c17"
}

params = "&limit=40000"

href = "https://datastudio-api.hkstp.org:443/scmparticlessample/v1.0/datastore_search?resource_id=0e27027d-ef86-4d03-ba99-3bb0fafec3f9"+params

res = requests.get(href, headers=headers, verify=False)

print(res.text)

json.dump(res.text, out)