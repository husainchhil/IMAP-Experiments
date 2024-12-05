from django.shortcuts import get_object_or_404, redirect, render
from .forms import EmployeeForm
from .models import Employee


def employees_list(request):
    min_salary = request.GET.get('min_salary')
    max_salary = request.GET.get('max_salary')
    if min_salary and max_salary:
        employees = Employee.objects.filter(
            salary__gte=min_salary, salary__lte=max_salary)
    else:
        employees = Employee.objects.all()
    return render(request, 'employee_list.html', {'employees': employees})


def employee_create(request):
    if request.method == 'POST':
        form = EmployeeForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('employee_list')
    else:
        form = EmployeeForm()
        return render(request, 'employee_form.html', {'form': form})


def employee_update(request, id):
    emp = get_object_or_404(Employee, id=id)
    if request.method == 'POST':
        form = EmployeeForm(request.POST, instance=emp)
        if form.is_valid():
            form.save()
            return redirect('employee_list')
    else:
        form = EmployeeForm(instance=emp)
        return render(request, 'employee_form.html', {'form': form})


def employee_delete(request, id):
    emp = get_object_or_404(Employee, id=id)
    if request.method == 'POST':
        emp.delete()
        return redirect('employee_list')
    return render(request, 'employee_cd.html', {'emp': emp})
