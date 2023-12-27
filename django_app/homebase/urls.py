from django.urls import path
from .views import get_all_users

urlpatterns = [
    # Add your existing URL patterns

    # Add a new URL pattern for fetching user data
    path('', get_all_users, name='get_all_users'),
]
