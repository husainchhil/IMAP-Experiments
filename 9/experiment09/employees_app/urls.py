from django.urls import path
from . import views

urlpatterns = [
    path('employees', views.employees_list, name='employees'),
    path('employees/<int:pk>', views.employees_detail, name='employee'),
]
