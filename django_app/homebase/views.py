from django.shortcuts import render

# Create your views here.
import requests
from django.http import JsonResponse
import os

def get_all_users(request):
    proxy_url = f"{os.getenv('PROXY_API_BASE_URL')}/api/v1/users"
    try:
        response = requests.get(proxy_url)

        if response.status_code == 200:
            users = response.json()
            return JsonResponse({'users': users})
        else:
            return JsonResponse({ 'success': False, 'error': 'Express Server error'})
    except requests.exceptions.RequestException as e:
        return JsonResponse({ 'success': False, 'error': 'Something error'})
