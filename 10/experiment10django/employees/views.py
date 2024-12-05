from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Employee
from .serializers import EmployeeSerializer


@api_view(['GET', 'POST'])
def employees(request):
    if request.method == 'GET':
        emps = Employee.objects.all()
        serializer = EmployeeSerializer(emps, many=True)
        return Response(serializer.data, status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = EmployeeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status.HTTP_200_OK)
        return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)
    else:
        return Response(status.HTTP_405_METHOD_NOT_ALLOWED)


@api_view(['GET', 'POST', 'DELETE'])
def employee(request, pk):
    try:
        emp = Employee.objects.get(pk=pk)
    except Employee.DoesNotExist:
        return Response({'error': 'Employee not found!'}, status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = EmployeeSerializer(emp)
        return Response(serializer.data, status.HTTP_200_OK)
    elif request.method == 'PUT':
        serializer = EmployeeSerializer(emp, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status.HTTP_200_OK)
        return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        emp.delete()
        return Response(status.HTTP_204_NO_CONTENT)
    else:
        return Response(status.HTTP_405_METHOD_NOT_ALLOWED)
