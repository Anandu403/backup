from django.urls import path
from test_1701 import views


urlpatterns = [
    path('', views.testShashank, name='test'),
]