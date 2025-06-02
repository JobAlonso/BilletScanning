from django.urls import path
from .views import PingView
from . import views

urlpatterns = [
    path('ping/', PingView.as_view()),
    path('saludo/', views.HolaMundoView.as_view()),
]
