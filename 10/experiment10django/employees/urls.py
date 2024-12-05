from django.urls import path
from . import views

urlpatterns = [
    path('employees', views.employees),
    path('employees/<int:pk>', views.employee)
]
