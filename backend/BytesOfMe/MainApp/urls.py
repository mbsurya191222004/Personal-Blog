from django.urls import path
from .views import Blog


urlpatterns = [
    path('Blog/', Blog.as_view()),
]