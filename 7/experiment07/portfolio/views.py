from django.shortcuts import render


def home(request):
    return render(request, 'home.html')


def portfolio(request):
    items = ['Project 1', 'Project 2', 'Project 3']
    myself = {
        'name': 'Husain',
        'age': 20,
        'education': 'MBA.Tech'
    }

    context = {
        'items': items,
        'myself': myself
    }

    return render(request, 'portfolio.html', context)
