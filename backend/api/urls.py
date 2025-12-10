from django.urls import path
from . import views  # import your views file

urlpatterns = [
    path('register/', views.register_user, name='register'),
]
