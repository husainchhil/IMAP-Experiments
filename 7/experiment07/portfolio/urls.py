from django.urls import path, include
from . import views


urlpatterns = [
    path('home', views.home, name='home'),
    path('portfolio', views.portfolio, name='portfolio'),
]
