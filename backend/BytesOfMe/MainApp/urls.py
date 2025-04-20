from django.urls import path
from .views import Blog,SignUp
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView



urlpatterns = [
    path('Blog/', Blog.as_view()),
    path('SignUp/',SignUp.as_view()),
    path('GetToken/',TokenObtainPairView.as_view()),
    path('RefToken/',TokenRefreshView.as_view()),
]