from django.urls import path
from . import views

urlpatterns = [
    path('', views.employees_list, name='employee_list'),
    path('create/', views.employee_create, name='employee_create'),
    path('update/<int:id>', views.employee_update, name='employee_update'),
    path('delete/<int:id>', views.employee_delete, name='employee_delete'),
]
