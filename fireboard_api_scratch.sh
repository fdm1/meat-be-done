# get device id
curl "https://fireboard.io/api/v1/devices.json" -H "Authorization: Token $FIREBOARD_TOKEN"
FIREBOARD_DEVICE_ID=$(curl "https://fireboard.io/api/v1/devices.json" -H "Authorization: Token $FIREBOARD_TOKEN" | jq -r .[0].uuid)

# get current temps (< 1m ago)
curl "https://fireboard.io/api/v1/devices/$FIREBOARD_DEVICE_ID/temps.json" -H "Authorization: Token $FIREBOARD_TOKEN" | jq .

# list sessions
curl "https://fireboard.io/api/v1/sessions" -H "Authorization: Token $FIREBOARD_TOKEN" | jq .

SESSION_ID=950363
# get a single session
# session info, notes, and channel configs
curl "https://fireboard.io/api/v1/sessions/$SESSION_ID.json" -H "Authorization: Token $FIREBOARD_TOKEN" | jq .

# get a session's data

curl "https://fireboard.io/api/v1/sessions/$SESSION_ID/chart.json" -H "Authorization: Token $FIREBOARD_TOKEN" | jq .

