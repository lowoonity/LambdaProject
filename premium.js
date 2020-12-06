API_ENDPOINT = 'https://discord.com/api/v6'
CLIENT_ID = '332269999912132097'
CLIENT_SECRET = '937it3ow87i4ery69876wqire'
REDIRECT_URI = 'https://nicememe.website'

def exchange_code(code):
  data = {
    'client_id': CLIENT_ID,
    'client_secret': CLIENT_SECRET,
    'grant_type': 'authorization_code',
    'code': code,
    'redirect_uri': REDIRECT_URI,
    'scope': 'identify email connections'
  }
  headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  r = requests.post('%s/oauth2/token' % API_ENDPOINT, data=data, headers=headers)
  r.raise_for_status()
  return r.json()